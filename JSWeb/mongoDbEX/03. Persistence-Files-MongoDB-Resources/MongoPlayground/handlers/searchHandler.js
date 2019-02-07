const Image = require('./../models/ImageSchema');
const fs = require('fs');

module.exports = (req, res) => {
  if (req.pathname === '/search' && req.method === "GET") {

    fs.readFile('views/results.html', 'utf8', async (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      let url = req.url.split('?').pop().split('&');
      let obj = {};
      for (let i = 0; i < url.length; i++) {
        let splitted = url[i].split('=');
        let key = splitted[0];
        let value;
        if (i === 0) {
          value = splitted[1].split('%2C').filter(x => x !== '');
        } else {
          value = splitted[1];
        }
        obj[key] = value;
      }
      let images = await Image.find({
        $and: [{
          creationDate: { $gt: obj.afterDate }
        },
        { creationDate: { $lt: obj.beforeDate } },
        {
          tags: { $in: obj.tagName }
        }]
      }).limit(Number(obj.Limit));


      let content = '';
      for (let image of images) {
        content +=
          `<fieldset>
                <legend>${image.title}:</legend>
                <img src="${image.url}" />
                <p>${image.description}<p/>
                <button onclick='location.href="/delete?id=${image._id}"'class='deleteBtn'>Delete</button>
           </fieldset>`
      }

      data = data.replace(`<div class='replaceMe'></div>`, content);
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.end(data);
    });

  } else {
    return true
  }
}
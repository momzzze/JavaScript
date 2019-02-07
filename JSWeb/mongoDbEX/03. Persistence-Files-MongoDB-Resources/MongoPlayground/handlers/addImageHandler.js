const formidable = require('formidable');
const Image = require('mongoose').model('Image');
const util = require('util');



function addImage(req, res) {
  const form = formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    if (err) {
      throw err;
    }

    const tags = fields.tagsId.split(',').reduce((p, c, i, a) => {
      if (p.includes(c) || c.length === 0) {
        return p;
      } else {
        p.push(c)
        return p;
      }
    }, []);
    const image = {
      url: fields.imageUrl,
      description: fields.description,
      tags
    };

    Image.create(image).then(image => {
      res.writeHead(302, {
        location: '/'
      })
      res.end();
    }).catch(err => {
      res.writeHead(500, {
        'content-type': 'text/plain'
      });
      res.write('Server error 500!');
      res.end();
    });
  });
}
function deleteImg(req, res) {
  let removeId = req.pathquery.id;


  Image.remove({ _id: `${removeId}` }, function (err) {
    if (err) {
      console.log(err);
      return;
    }
  }).then(() => {
    res.writeHead(302, {
      location: '/search'
    });
    res.end();
  }).catch((err) => {
    console.log(err.errors);
  });
}


module.exports = (req, res) => {
  if (req.pathname === '/addImage' && req.method === 'POST') {
    addImage(req, res)
  } else if (req.pathname === '/delete' && req.method === 'GET') {
    deleteImg(req, res)
  } else {
    return true
  }
}

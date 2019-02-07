const fs = require('fs');

module.exports = (req, res) => {
    if (req.path.startsWith('../views/home.html') && req.method === 'GET') {
        fs.readFile('../views/home.html', (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            res.writeHead(200, {
                'Content-type': 'text/html'
            });

            res.write(data);
            res.end();
        });
    } else {
        return true;
    }
};
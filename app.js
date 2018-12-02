const http = require('http');
const url = require('url');
const fs = require('fs');
const mongoose = require('mongoose');

const mongoURL = 'mongodb://admin:admin1@ds123624.mlab.com:23624/data';

mongoose.connect(mongoURL, {
    useNewUrlParser: true
});

const db = mongoose.connection;
db.on('error', (err) => console.error('Mongoose connection error', err));
db.once('open', () => {
    console.log('Mongoose success connection')
});

const port = process.env.PORT || 8080;

const server = http.createServer((request, response) => {
    var urlObj = url.parse(request.url, true);
    var bin = true;
    switch (urlObj.pathname)
    {
    case "/jQuery":
    case "/js/main_page":
    case "/js/init.js":
    case "/js/materialize.js":
    case "/js/materialize.min.js":
        response.writeHead(200, {'Content-Type': 'text/javascript'});
        break;
        
    case "/css/main_page":
    case "/css/materialize.css":
    case "/css/materialize.min.css":
    case "/css/style.css":
        response.writeHead(200, {'Content-Type': 'text/css'});
        break;
        
    case "/img/done":
    case "/img/logo":
    case "/img/logo_x4":
    case "/img/map":
    case "/img/map_green":
    case "/favicon.ico":
        response.writeHead(200, {'Content-Type': 'image/png'});
        break;    
        
    default:
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    }

    var content = '';
    var notFound = false;
    var query = JSON.parse(JSON.stringify(urlObj.query));

    switch (urlObj.pathname)
    {
    case "/":
        if (query.hasOwnProperty('bus') && query.hasOwnProperty('num'))
        {
            content = require('./main_page').getPage(query['bus'], query['num']);
            bin = false;
            break;
        }
        notFound = true;
        break;
    case "/submit":
        if (request.method === 'POST') {
            var submit_page = require('./submit_page');
            let body = '';
            request.on('data', chunk => {
                body += chunk.toString(); // convert Buffer to string
            });
            request.on('end', () => submit_page.processData(body) );
            content = submit_page.getPage();
            bin = false;
            break;
        }
        notFound = true;
        break;
    case "/admin":
        content = require('./admin_page').getPage();
        break;

    case "/index.html":
    case "/css/materialize.css":
    case "/css/materialize.min.css":
    case "/css/style.css":
    case "/js/init.js":
    case "/js/materialize.js":
    case "/js/materialize.min.js":
        content = fs.readFileSync("./"+urlObj.pathname);
        break;
        
    case "/img/done":
    case "/img/logo":
    case "/img/logo_x4":
    case "/img/map":
    case "/img/map_green":
        content = fs.readFileSync(`./${urlObj.pathname}.png`);
        break;
    
    case "/favicon.ico":
        content = fs.readFileSync(`./img/favicon_1.ico`);
        break;
        
    case "/jQuery":
        content = fs.readFileSync("./js/jquery-3.3.1.min.js","utf8");
        break;
    case "/js/main_page":
        content = fs.readFileSync("./js/main_page.js","utf8");
        break;
        
    case "/css/main_page":
        content = fs.readFileSync("./css/main_page.css","utf8");
        break;
        
    default:
        notFound = true;
    }
    if (notFound)
        content = '404';
    
    if (bin)
        response.end(content, 'binary');
    else
        response.end(content);
}); 

server.listen(port);
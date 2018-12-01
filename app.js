const http = require('http');
const url = require('url');

const port = 80;

const server = http.createServer((request, response) => {
    var urlObj = url.parse(request.url, true);
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    var content;
    switch (urlObj.pathname)
    {
    case "/":
        content = require('./main_page').getPage(urlObj.query['bus'], urlObj.query['num']);
        break;

    default:
        content = '404';
    }
    response.end(content);
}); 

server.listen(port);
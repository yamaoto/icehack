function procceed(body)
{
    const {parse} = require('querystring');
    console.log(parse(body));
}

module.exports = {
    processData: procceed,
    getPage: () => require('fs').readFileSync("./template/thanks.html","utf8")
};
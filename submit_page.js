function procceed(body)
{
    const {parse} = require('querystring');
    /*console.log(parse(body));*/
    require('fs');
    fs.writeFile("/tmp/test", "Hey there!", function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
}

module.exports = {
    processData: procceed,
    getPage: () => require('fs').readFileSync("./template/thanks.html","utf8")
};
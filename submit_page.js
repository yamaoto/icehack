const Feedback = require('./models/Feedback')

async function procceed(body)
{
    const {parse} = require('querystring');
    /*console.log(parse(body));
    require('fs');
    fs.writeFile("/data.json", "Hey there!", function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });*/

    const feed = new Feedback({
        bus: parse.bus,
        num: parse.num,
        val: parse.value,
        ids: parse.check,
        comment: parse.comment
    })
    await feed.save()
    /*const feed_ = await Feedback.findOne({ bus: 'asdasd' })*/
}

module.exports = {
    processData: procceed,
    getPage: () => require('fs').readFileSync("./template/thanks.html","utf8")
};
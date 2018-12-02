const Feedback = require('./models/Feedback')

async function procceed(body)
{
    const {parse} = require('querystring');
    const data = parse(body);
    const feed = new Feedback({
        bus: data.bus,
        num: data.num,
        val: data.value,
        ids: data.check,
        comment: data.comment
    })
    await feed.save()
    /*const feed_ = await Feedback.findOne({ bus: 'asdasd' })*/
}

module.exports = {
    processData: procceed,
    getPage: () => require('fs').readFileSync("./template/thanks.html","utf8")
};
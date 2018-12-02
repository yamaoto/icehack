const Feedback = require('./models/Feedback')

async function getFeeds() {
    const feeds = await Feedback.find()

    return feeds;
}

module.exports = {
    getPage: async () => {
        const data = await getFeeds()
        console.log(data)
        var template = require('fs').readFileSync("./template/admin.html","utf8");
        return new Function('return `' + template + '`;').call({data : data});
        /*return `
            <html>
                <head></head>
                <body>
                    ${ data.map(item => (
                        `<div>${item.toString()}</div>`
                    )) }
                </body>
            </html>
        `*/
    }
};

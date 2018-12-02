const Feedback = require('./models/Feedback')

async function getFeeds() {
    const feeds = await Feedback.find()

    return feeds;
}

module.exports = {
    getPage: async () => {
        const data = await getFeeds()
        /*console.log(data)*/
        const ids = {
            id1 : 'Манера вождения',
            id2 : 'Грубость вождения',
            id3 : 'Долгое ожидание',
            id4 : 'Заполненность',
            id5 : 'Климат',
            id6 : 'Грязный салон',
            id7 : 'Мягкая поездка',
            id8 : 'Вежливый водмтель',
            id9 : 'Прекрасная атмосфера',
            id10 : 'Уютно и чисто'
        }
        var template = require('fs').readFileSync("./template/admin.html","utf8");
        return new Function('return `' + template + '`;').call({data : data, ids : ids});
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

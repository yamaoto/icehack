const Feedback = require('./models/Feedback')

async function page() {
    const feed = await Feedback.findOne()
    console.log( feed )
    return 'asd';
}

module.exports = {
    getPage: page
};
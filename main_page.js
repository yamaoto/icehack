function page(bus, num)
{
    const templateVars = {
        bus: bus,
        num: num,
        fields: [
            [
                { id: 'id1', text: '1name1' },
                { id: 'id2', text: '1name2' },
                { id: 'id3', text: '1name3' },
                { id: 'id4', text: '1name4' }
            ],
            [
                { id: 'id1', text: '2name1' },
                { id: 'id2', text: '2name2' },
                { id: 'id3', text: '2name3' },
                { id: 'id4', text: '2name4' }
            ],
            [
                { id: 'id1', text: '3name1' },
                { id: 'id2', text: '3name2' },
                { id: 'id3', text: '3name3' },
                { id: 'id4', text: '3name4' }
            ],
            [
                { id: 'id1', text: '4name1' },
                { id: 'id2', text: '4name2' },
                { id: 'id3', text: '4name3' },
                { id: 'id4', text: '4name4' }
            ],
            [
                { id: 'id1', text: '5name1' },
                { id: 'id2', text: '5name2' },
                { id: 'id3', text: '5name3' },
                { id: 'id4', text: '5name4' }
            ]
        ]
    }
    var template = require('fs').readFileSync("./template/index.html","utf8");
    return new Function('return `' + template + '`;').call(templateVars);
}

module.exports = {
    getPage: (bus, num) => page(bus, num)
};
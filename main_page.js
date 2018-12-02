function page(bus, num)
{
    const templateVars = {
        bus: bus,
        num: num,
        fields: [
            [
                { id: 'id1', text: 'Манера вождения' },
                { id: 'id2', text: 'Грубость вождения' },
                { id: 'id3', text: 'Долгое ожидание' },
                { id: 'id4', text: 'Заполненность' },
                { id: 'id5', text: 'Климат' },
                { id: 'id6', text: 'Грязный салон' }
            ],
            [
                { id: 'id1', text: 'Манера вождения' },
                { id: 'id2', text: 'Грубость вождения' },
                { id: 'id3', text: 'Долгое ожидание' },
                { id: 'id4', text: 'Заполненность' },
                { id: 'id5', text: 'Климат' },
                { id: 'id6', text: 'Грязный салон' }
            ],
            [
                { id: 'id1', text: 'Манера вождения' },
                { id: 'id2', text: 'Грубость вождения' },
                { id: 'id3', text: 'Долгое ожидание' },
                { id: 'id4', text: 'Заполненность' },
                { id: 'id5', text: 'Климат' },
                { id: 'id6', text: 'Грязный салон' }
            ],
            [
                { id: 'id7', text: 'Мягкая поездка' },
                { id: 'id8', text: 'Вежливый водмтель' },
                { id: 'id9', text: 'Прекрасная атмосфера' },
                { id: 'id10', text: 'Уютно и чисто' }
            ],
            [
                { id: 'id7', text: 'Мягкая поездка' },
                { id: 'id8', text: 'Вежливый водмтель' },
                { id: 'id9', text: 'Прекрасная атмосфера' },
                { id: 'id10', text: 'Уютно и чисто' }
            ]
        ]
    }
    var template = require('fs').readFileSync("./template/index.html","utf8");
    return new Function('return `' + template + '`;').call(templateVars);
}

module.exports = {
    getPage: (bus, num) => page(bus, num)
};
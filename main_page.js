function page(bus, num)
{
    const templateVars = {
        bus: bus,
        num: num
    }
    var template = require('fs').readFileSync("./template/index.html","utf8");
    return new Function('return `' + template + '`;').call(templateVars);
}

module.exports = {
    getPage: (bus, num) => page(bus, num)
};
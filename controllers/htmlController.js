//we module.export an object, here we normally export functions that has things to do that, normally the functions we pass into get. anything that has to do with html stays in html, anything that has to do with functionality stays in controllers
const path = require('path');

module.exports = {
    getHome: (req, res) => {
        console.log(__dirname);
        res.sendFile(path.join(__dirname, '..', 'views', 'home.html'));
    },
    getReserve: (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'views', 'reserve.html'));
    },
    getTables: (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'views', 'tables.html'));
    }
};
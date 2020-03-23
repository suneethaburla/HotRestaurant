const waitlist = require ('./../models/Waitlist')

module.exports = {
    getWaitlist: (req, res) => {
        res.json(waitlist);
    }
}
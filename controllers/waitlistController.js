const waitlist = require ('./../models/Waitlist')

module.exports = {
    getWaitlist: (req, res) => {
        res.json(waitlist);
    },
    deleteWaitlist: (req, res) => {
        waitlist.length = 0;
        res.send("Deleted waitlists");
    }
}
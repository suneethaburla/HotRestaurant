//first thing we need is access to the reserve model (api)
//if i need access to the models, the below actually returns an object 
//i could access either one 
const db = require('./../models');
// const reserve = require('./../models/Reserve');

module.exports = {

    getReserve: (req, res) => {
        res.json(db.Reserve);
    },
    createReserve: (req, res) => {
        //we need to add some logic here so go back and change the reserve to db
        const newReservation = req.body
        if (db.Reserve.length === 5) {
            db.Waitlist.push(newReservation);
            return res.json({error: "Oops! you are waitlisted!"});
        }
        db.Reserve.push(newReservation);
        res.json({success: "You are booked!"})
        
    },
    deleteReserves: (req, res) => {
        db.Reserve.length = 0;
        res.send("Deleted reservations");
    }


}

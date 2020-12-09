const router = require('express').Router();
let MonthlyBudget = require('../models/monthlyBudget.model');

router.route('/').get((req, res) => {
    MonthlyBudget.find()
        .then(monthlybudgets => res.json(monthlybudgets))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res)=> {
    const username = req.body.username;
    const amount = Number(req.body.amount);
    const date = Date.parse(req.body.date)
    

    const newMonthlyBudget = new MonthlyBudget({
        username,
        amount,
        date,
    });

    newMonthlyBudget.save()
    .then(() => res.json('Budget added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
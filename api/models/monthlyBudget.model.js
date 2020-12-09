const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const monthlyBudgetSchema = new Schema({
    username: { type: String, required: true },
    item: {type: String, required: true},
    date: {type: Date, required: true},
    amount: {type: Number, required: true},
   
}, {
    timestamps: true,
});

const MonthlyBudget = mongoose.model('MonthlyBudget', monthlyBudgetSchema);

module.exports = MonthlyBudget;
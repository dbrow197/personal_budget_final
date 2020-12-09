const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const monthlyBudgetSchema = new Schema({
    username: { type: String, required: true },
    amount: {type: Number, required: true},
    date: {type: Date, required: true},
}, {
    timestamps: true,
});

const MonthlyBudget = mongoose.model('MonthlyBudget', monthlyBudgetSchema);

module.exports = MonthlyBudget;
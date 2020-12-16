const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true  }
    );
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log("MongoBD database connection established successfully");
    })

//will return _id: from users table to expenses and monthlybudgets.

//app.get('/budget', (request, response) => {
//    response.json(require('./budget.json'));
//});

const budgetRouter = require('./routes/expenses');
const userRouter = require('./routes/users');
const monthlyBudget = require('./routes/monthlyBudgets')

app.use('/expenses', budgetRouter);
app.use('/users', userRouter);
app.use('/monthlyBudgets', monthlyBudget)

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
});
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/users");
const budgetRouter = require('./routes/expenses');
const monthlyBudget = require('./routes/monthlyBudgets');
const app = express();

const port = process.env.PORT || 5000;

require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());


const uri = require("./config/keys").mongoURI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true  }
    );
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log("MongoBD database connection established successfully");
    })

//todo: will return _id: from users table to expenses and monthlybudgets.

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);


// Routes
app.use("/users", users);
app.use('/expenses', budgetRouter);
app.use('/monthlyBudgets', monthlyBudget)





app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
});
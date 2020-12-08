const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.get('/budget', (request, response) => {
    response.json(require('./budget.json'));
});

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
});
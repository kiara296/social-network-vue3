const express = require('express');
const bodyParser = require('body-parser')

const bookRoutesApi = require('./routes/mainRouter');

const app = express();

app.use(bodyParser.json())

app.use('/',bookRoutesApi);

app.listen(3001, () => {
    console.log("Server running on port 3001");
});


app.use(express.static('public'));
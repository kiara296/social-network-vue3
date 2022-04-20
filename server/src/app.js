const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

const bookRoutesApi = require('./routes/mainRouter');

const app = express();

app.use(cors())
app.use(express.json())

app.use('/',bookRoutesApi);

app.listen(3001, () => {
    console.log("Server running on port 3001");
});


app.use(express.static('public'));
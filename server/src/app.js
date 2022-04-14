const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())

app.post('/register', (req,res)=>{
    res.send({
     message: 'hello ${req.body.email}! '
    }) 
 })

app.get('/', (req,res)=>{
   res.send({
    message: 'hello'
   }) 
})



app.listen(3001, () => {
    console.log("Server running on port 3001");
});


app.use(express.static('public'));
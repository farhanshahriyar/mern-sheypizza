const express = require("express");
const req = require("express/lib/request");

const Pizza = require('./client/models/pizzaModel');
const app = express();
const db = require("./db")

const pizzasRoute = require('./routes/pizzasRoute')
const userRoute = require('./routes/userRoute')

app.use(express.json());
const path= require('path')
app.use('/api/pizzas/', pizzasRoute)
app.use('/api/users/' , userRoute)


if(process.env.NODE_ENV === 'production')
{
    app.use('/' , express.static('client/build'))
    app.get('*' , (req, res)=> {
        res.sendFile(path.resolve(__dirname , 'client/build/index.html'))
    })
}

const port = process.env.PORT || 8000; 

app.listen(port, () => `Server running on port :( )`);
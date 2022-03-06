const express = require("express");
const req = require("express/lib/request");

const Pizza = require('./client/models/pizzaModel');
const app = express();
const db = require("./db")

const pizzasRoute = require('./routes/pizzasRoute')

app.use(express.json());

app.use('/api/pizzas/', pizzasRoute)

app.get("/", (req , res) => {
    res.send("Server is working! :) 🔥 " + port);
});


const port = process.env.PORT || 5000; 

app.listen(port, () => `Server running on port :( )`);
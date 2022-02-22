const express = require("express");
const req = require("express/lib/request");

const app = express();

app.use(express.json());



app.get("/", (req , res) => {
    res.send("Server is working! :) ");
});

const port = process.env.PORT || 5000; 

app.listen(port, () => `Server running on port :( )`);
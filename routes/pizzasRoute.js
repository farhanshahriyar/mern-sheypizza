const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();
const Pizza = require('../client/models/pizzaModel');
const { model } = require("../db");

router.get("/getallpizzas", async(req, res) => {
    try {
        const pizzas = await Pizza.find({})
        res.send(pizzas)
    } catch (error) {
        return res.status(400).json({ message:error });
    }
});

module.exports = router; 
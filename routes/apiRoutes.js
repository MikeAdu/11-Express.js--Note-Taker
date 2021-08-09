const router = require("express").Router();
const fs = require('fs');
const path = require('path');

// get request should return notes from DB
router.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", function (err, data) {
        const parsedData = JSON.parse(data)
        res.json(parsedData)
    })
})

//post request should add notes to db 
router.post("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", function (err, data) {
        const parsedData = JSON.parse(data)
        const newData = req.body
        parsedData.push(newData)
        fs.writeFile("./db/db.json", JSON.stringify(parsedData), function (err) {
            res.json(parsedData)
        })
    })
})

module.exports = router
const path = require("path")
const router = require("express").Router();

// get request for notes to return html 
router.get("/notes", (req, res)=> {
    res.sendFile(path.join(__dirname,("../public/notes.html")))
})
// get request for index.html 
router.get("*", (req, res)=> {
    res.sendFile(path.join(__dirname,("../public/index.html")))
})

module.exports = router
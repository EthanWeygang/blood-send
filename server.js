const express = require("express")
const app = express()
const port = 9000
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.status(200).render("home-page")
})

app.listen(port)
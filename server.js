const express = require("express")
const connectDB = require("./db")

const app = express()
const port = 9000

connectDB()

app.set("view engine", "ejs")



app.get("/", (req, res) => {
    res.status(200).render("home-page")
})

app.get("/about", (req, res) => {
    res.status(200).render("about-page")
})

app.get("/sign-up", (req, res) => {
    res.status(200).render("sign-up")
})

app.get("/users/:id", (req, res) => {
    const userId = req.params.id

    res.status(200).render("users", {id: userId})
})

app.listen(port)
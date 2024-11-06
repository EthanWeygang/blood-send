const express = require("express")
const session = require("express-session")
const app = express()
const router = express.Router()
const users = require("../user")


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


router.get("/", (req, res) => {
    res.status(200).render("log-in")
})

router.post("/", async (req, res) => {
    const username = req.body.username
    const enteredPassword = req.body.password
    console.log("working")

    try{
        console.log(username)
        console.log(enteredPassword)

        const user = await users.findOne(username)
        if(!user){
            res.status(400).send("Invalid password or email")
            return
        }

        if (user.password != enteredPassword) {
            res.status(400).send("Invalid password or email")
            return
        }

        req.session.userId = user._id
        res.redirect("/")

    } catch (error){
        res.send("an error occured")
    }

    
})

module.exports = router



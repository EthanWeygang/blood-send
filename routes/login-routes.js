const express = require("express")
const session = require("express-session")
const app = express()
const router = express.Router()
const users = require("../user")


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
router.use(checkSession)


router.get("/", (req, res) => {

    res.status(200).render("log-in")
})

router.post("/", async (req, res) => {
    const { email: email, enteredPassword: enteredPassword } = req.body

    try{
        const user = await users.findOne({email: email})

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
        console.log(error)
    }

    
})

function checkSession(req, res, next){
    if (req.session.userId) {
        res.redirect("/")
    } else {
        next()
    }
}

module.exports = router



const express = require("express")
const session = require("express-session")
const app = express()
const router = express.Router()
const users = require("../user")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
router.use(checkSession)

router.get("/", async (req, res) => {
    try{
        res.status(200).render("sign-up")
    } catch(error){
        console.log(error)
    }
})

router.post("/", async(req, res) => {
    return
})

function checkSession(req, res, next){
    if (req.session.userId) {
        res.redirect("/")
    } else {
        next()
    }
}

module.exports = router
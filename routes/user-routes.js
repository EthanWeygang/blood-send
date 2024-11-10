const express = require("express")
const router = express.Router()
const users = require("../user")


router.use(checkSession); // this is middleware applied to every route

router.get('/', (req, res) => {

    try{
        res.status(200).send("search for user page")
        
    } catch(error){
        console.log(error)
        res.status(500).send("Error fetching user data")
    }

})

router.get('/:id', async (req, res) => {
    try{
        const userId = req.params.id
        const userData = await users.findById(userId)

        res.status(200).render('users', { userId: userId, userData: userData })
        
    } catch(error){
        console.log(error)
        res.status(500).send("Error fetching user data")
    }
    
});

function checkSession(req, res, next){ // idk how to export this from server.js so i c&p it
    if (req.session.userId) {
        next()
    } else {
        res.redirect("/log-in")
    }
}

module.exports = router
const express = require("express")
const router = express.Router()
const users = require("../user")


router.use(checkSession); // this is middleware applied to every route

router.get("/", (req, res) => {

    try{
        res.status(200).send("search for user page")
        
    } catch(error){
        console.log(error)
        res.status(500).send("Error fetching user data")
    }

})

router.get("/:id", async (req, res) => {
    try{
        const userId = req.params.id
        const sessionUserId = req.session.userId
        const userData = await users.findById(userId)

        if (userId == sessionUserId){
            res.status(200).render('own-users', { userId: userId, userData: userData })
            return
        }

        res.status(200).render('users', { userId: userId, userData: userData })
        
    } catch(error){
        console.log(error)
        res.status(500).send("Error fetching user data")
    }
    
}); 

router.delete("/:id", async (req, res) => {
    try{
        userId = req.params.id
        deletedUser = await users.findByIdAndDelete(userId)
        console.log(`deleting user ${userId}`)

        if (!deletedUser){
            res.status(404).send('User not found')
            return
        }

        res.status(200).send("account deleted") // this wont work
        
        req.session.destroy((err) => {
            if (err) {
                console.log('Error destroying session:', err);
                return res.status(500).send('Error logging out');
            }})

        

    } catch(error){
        console.log(error)
    }
})

router.post("/:id", async (req, res) => {
    try{
        req.session.destroy()
        res.redirect("/log-in")
        
    } catch(error){
        console.log(error)
    }
    
});

function checkSession(req, res, next){
    if (req.session.userId) {
        next()
    } else {
        res.redirect("/log-in")
    }
}

module.exports = router
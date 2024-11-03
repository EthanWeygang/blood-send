const express = require("express")
const router = express.Router()
const users = require("../user")

router.get('/', (req, res) => {
    res.status(200).send("search for user page")
})

router.get('/new', (req, res) => {
    res.status(200).send("new user page")
})

router.get('/:id', async (req, res) => {
    try {
        const userId = req.params.id
        const userData = await users.findById(userId)

        res.status(200).render('users', { userId: userId, userData: userData })

    } catch(error) {
        console.log(error)
        res.status(500).send("Error fetching user data")
    }
    
});

module.exports = router
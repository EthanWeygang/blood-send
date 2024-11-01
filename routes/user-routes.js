const express = require("express")
const router = express.Router()
const users = require("../user")

router.get('/', (req, res) => {
    res.status(200).send("search for user page")
})

router.get('/new', (req, res) => {
    res.status(200).send("new user page")
})

router.get('/:id', (req, res) => {
    const userId = req.params.id;
    res.status(200).render('users', { id: userId });
});

module.exports = router
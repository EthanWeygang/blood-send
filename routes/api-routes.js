const express = require("express")
const router = express.Router()
const users = require("../user")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

router.get("/users", async (req, res) => {
    try{
        const userslist = await users.find()
        res.json(userslist)

    } catch(error){
        console.log(error)
    }
    
})

router.get("/near-users", async (req, res) => {
    try{
        const userId = req.session.userId
        const currentUser = await users.findById(userId)

        if(!currentUser || !currentUser.location){
            res.status(400).json({error: "location not found"})
        }

        const userLocation = currentUser.location
        const maxDistance = parseInt(req.query.maxDistance) || 5000
        const nearUsers = await users.find({
            location: {
                $near: {
                    $geometry: userLocation,
                    $maxDistance: maxDistance
                }
            }})
        
        res.json(nearUsers)
    } catch(error){
        console.log(error)
    }
    
})

module.exports = router

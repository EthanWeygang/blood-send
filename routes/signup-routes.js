const axios = require("axios")
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
    
    try{
        const { firstname, lastname, email, password, phone, birthday, donor, postcode, bloodtype } = req.body
        coords = await getCordsFromPostcode(postcode)
        
        await users.insertMany({
            firstname: firstname,
            lastname: lastname,
            donor: donor,
            location: {type: "Point", coordinates: [coords.longitude, coords.latitude]},
            bloodtype: bloodtype,
            email: email,
            password: password,
            phonenumber: phone,
            dateOfBirth: new Date(birthday)
        })
                
        res.redirect("/")
        return

    } catch(error){
        console.log(error)
        res.send("details already linked to an existing account")
        return
    }

    
})

function checkSession(req, res, next){
    if (req.session.userId) {
        res.redirect("/")
    } else {
        next()
    }
}

async function getCordsFromPostcode(postcode){
    try{
        const url = `https://api.postcodes.io/postcodes/${encodeURIComponent(postcode)}`
        const response = await axios.get(url)
        //console.log(response)
        const data = response.data

        if (data.status == 200){
            const {longitude, latitude} = data.result

            return {longitude: longitude, latitude: latitude}

        }else{
            console.log("an error occured with the api")
        }
    } catch(error){
        console.log(error)
    }
}

module.exports = router
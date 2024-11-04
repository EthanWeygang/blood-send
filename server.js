const express = require("express")
const connectDB = require("./db")
connectDB()
const users = require("./user")

const app = express()
const port = 9000

app.set("view engine", "ejs")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {

    try{
        const data = await users.find()
        res.status(200).render("home-page", {data}) 
    } catch (error){
        console.log(error)
    }

})

app.get("/about", (req, res) => {
    res.status(200).render("about-page")
})

app.get("/sign-up", (req, res) => {
    res.status(200).render("sign-up")
})

const loginRouter = require("./routes/login-routes")
app.use("/log-in", loginRouter)

const userRouter = require("./routes/user-routes")
app.use("/users", userRouter)

function checkSession(req, res, next){
    if (req.session && req.session.userId) {
        next()
    } else {
        res.redirect("/log-in")
    }
}
app.listen(port)



























// function insertUserData() {
// users.insertMany([
//     {
//         firstname: "Ethan",
//         lastname: "Weygang",
//         donor: true,
//         location: {type: "Point", coordinates: [51.464634, 0.148388]},
//         bloodtype: "O+",
//         email: "ethan@example.com",
//         phonenumber: "123-456-7890",
//         dateOfBirth: new Date('2000-04-05')
//     },
//     {
//         firstname: "Jane",
//         lastname: "Doe",
//         donor: false,
//         location: {type: "Point", coordinates: [51.464624, 0.148388]},
//         bloodtype: "B+",
//         email: "jane@example.com",
//         phonenumber: "143-456-7890",
//         dateOfBirth: new Date('1990-01-01')
//     },
//     {
//         firstname: "John",
//         lastname: "Doe",
//         donor: true,
//         location: {type: "Point", coordinates: [51.464634, 30.148388]},
//         bloodtype: "A-",
//         email: "john@example.com",
//         phonenumber: "133-456-7890",
//         dateOfBirth: new Date('1950-02-01')
//     }
// ]).then(() => console.log("Users inserted successfully")).catch(err => console.error("Error inserting users:", err));
// }

// insertUserData()
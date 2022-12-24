const express = require("express")
const cors = require("cors")
const { connection } = require("./Config/db")
const { signupControl, loginControl } = require("./Controllers/user.controller")
const { raiseTicketController, getTicketsController } = require("./Controllers/tickets.controller")
require("dotenv").config()
const app = express()
const PORT = process.env.PORT || 8080
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("masai ticketing system")
})

app.post("/signup", signupControl)
app.post("/login", loginControl)

app.post("/raiseticket" , raiseTicketController )
app.get("/tickets" , getTicketsController)

app.listen(PORT,async()=>{
    try{
        await connection
        console.log("db connected successfully")
    }
    catch(err){
        console.log(err)
    }
    console.log(`listening at port-- ${PORT}`)
})
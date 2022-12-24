const { Ticket } = require("../Models/ticket.model")

const raiseTicketController = async(req,res)=>{
    const {category , title, message} = req.body
    const ticket = new Ticket({category , title, message})
    await ticket.save()
    res.send("ticket raised successfully")
} 

const getTicketsController = async(req,res)=>{
    const tickets = await Ticket.find()
    res.send(tickets)
}

module.exports = {raiseTicketController,getTicketsController}
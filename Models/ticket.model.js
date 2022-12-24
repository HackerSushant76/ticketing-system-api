const { default: mongoose } = require("mongoose");

const ticketSchema = mongoose.Schema(
  {
    category: String,
    title: String,
    message: String,
  },
  { timestamps: true }
);
const Ticket = mongoose.model("masaiticket", ticketSchema);

module.exports = { Ticket };

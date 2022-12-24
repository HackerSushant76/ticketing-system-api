const { default: mongoose } = require("mongoose");

const userSchema=  mongoose.Schema({
    name:String,
    email: String,
    password: String
})
const User = mongoose.model("masaiuser", userSchema)

module.exports = {User}
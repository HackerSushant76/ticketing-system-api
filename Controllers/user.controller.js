const { User } = require("../Models/user.model")
require("dotenv").config()
const jwt = require("jsonwebtoken")
const signupControl = async(req,res)=>{
    const {name,email,password} = req.body
    const user = new User({name,email,password})
    await user.save()
    res.send("signup successful");
}

const loginControl = async(req,res)=>{
    const {email,password} = req.body
    const user = await User.findOne({email})
    if(user.email=== email && user.password=== password){
        const token = jwt.sign({userId: user._id}, process.env.secret_key)
        res.send({msg: "Login Success" , token})
    }
}

module.exports = {signupControl,loginControl}
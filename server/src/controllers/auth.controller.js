const jwt = require("jsonwebtoken");
require("dotenv").config();

const newToken = (user) => {
    return jwt.sign( {user} , process.env.JWT_SECRET_KEY);
}


const User = require('../models/user.model')


const register =async (req,res) => {
    let user
    try {
        user =await User.findOne({ contact: req.body.contact });

        if (user) return res.status(400).send("User already exist")
        
        user = await User.create(req.body);

      let token=  newToken(user)

        return res.status(200).send({user,token})
    } catch (err) {
        return res.status(200).send(err.message);
    }
}

const Login = async(req,res) => {
    try {
        let user = await User.findOne({ contact: req.body.contact });
         
        if (!user) return res.status(400).send("User not found") 

           let match = user.checkPassword(req.body.password);

         
           if (!match)
             return res
               .status(400)
                .send({ message: "Please check your password" });
        
        let token = newToken(user)
        
        req.user=user
        
        return res.status(200).send({user,token})

    } catch (err) {
        return res.status(400).send(err.message)
    }
}

module.exports={register,Login}
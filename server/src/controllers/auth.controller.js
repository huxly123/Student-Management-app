const User=require('../models/user.model')
const register =async (req,res) => {
    let user
    try {
        user =await User.findOne({ contact: req.body.contact });

        if (user) return res.status(400).send("User already exist")
        
        user = await User.create(req.body);

        return res.status(200).send({user})
    } catch (err) {
        return res.status(200).send(err.message);
    }
}

const Login = async(req,res) => {
    try {
        let user = await User.findOne({ contact: req.body.contact });
         
        if (!user) return res.status(400).send("User not found") 
        
        return res.status(200).send(user)

    } catch (err) {
        return res.status(400).send(err.message)
    }
}

module.exports={register,Login}
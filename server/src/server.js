const express = require('express')
const connect=require("./configs/db")
const app = express();
app.use(express.json())
const {register,Login}=require("./controllers/auth.controller")
const userController = require("./controllers/user.controller");
app.use("/user", userController)


app.post("/register", register);
app.post("/login", Login);


app.listen(8080,async () => {
    await connect();
    console.log("connected to 8080");
})


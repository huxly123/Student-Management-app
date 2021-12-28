const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    age: { type: Number, required: true },
    education: { type: String, required: false },
    gender: { type: String, required: true },
    password:{type: String, required: true, minLength: 8, maxLength: 100},
    contact: { type: Number, required: true, unique: true },
    role:{type:String,required:true}
}, {
    versionKey: false,
    timestamps:true
})


userSchema.pre("save",  function (next) {
  if (!this.isModified("password")) return next();
  try {
      const hash = bcrypt.hashSync(this.password, 8)
      this.password=hash
    return next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.checkPassword =  function (password) {
    const match = bcrypt.compareSync(password, this.password);

    return match
}

const User = mongoose.model("user", userSchema);



module.exports=User
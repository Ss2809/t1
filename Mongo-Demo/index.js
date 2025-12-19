const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Mongo-Demo")
  .then(() => {
    console.log("Mongodb DataBase Connet Succfully!!!");
  })
  .catch((err) => {
    console.log("Error Occuer...", err);
  });

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, lowercase : true },
  phone: {type :Number},
  password: { type: String, required: true },
  hobbies : {type : [String]},
  isVerfied : {type : Boolean, default : false}
});

const User =  mongoose.model("User", userSchema);
async function CreatUser() {
const userSchema  = new User({
  name :"Sushil",
  email :"sushil@gmail.com",
  phone : 9034562312,
  password :"890890",
  hobbies : ["Coding", "Playing", "Tracking"]
});

const stroage  = await userSchema.save();
console.log(stroage);
}
// CreatUser();

async function getUser(params) {
  const users = await User.find({name : "Sushil"});
  console.log(users);
}
getUser();
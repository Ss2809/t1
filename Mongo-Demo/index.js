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
  email: { type: String, unique: true, lowercase: true },
  phone: { type: Number },
  password: { type: String, required: true },
  age: { type: Number },
  hobbies: { type: [String] },
  isVerfied: { type: Boolean, default: false },
});

const User = mongoose.model("User", userSchema);
async function CreatUser() {
  const userSchema = new User({
    name: "Tom",
    email: "Toms12@gmail.com",
    phone: 9034562312,
    password: "890890",
    age: 10,
    hobbies: ["Coding", "Playing", "Tracking"],
  });

  const stroage = await userSchema.save();
  console.log(stroage);
}
// CreatUser();

async function getUser(params) {
  //  const users = await User.find({age : {$lt:30}});
  // const users = await User.find({age :{$not : {$eq:30}}});
  // const users = await User.find({$or : [{name : "Tom"}, {age : 28}]});
  // const users = await User.find({$and : [{name : "Tom", age : 30}]});
  // const users = await User.find({name : "Tom", age : 30});

  // const users = await User.find({ name: /^T/ });
  // const users = await User.find({ email: /gmail\.com$/ });
  const users = await User.find({ name: /^t/i });
  console.log(users);
}
// getUser();

async function updateData() {
  const updateinfo = await User.updateOne(
    { name: "Jerry" },
    { $set: { email: "update@email.com" }},{ new : true, runValidators : true} 
  );
  console.log(updateinfo);
}
// updateData();

async function updateData1() {
  const updateinfo = await User.findOneAndUpdate(
    { _id: "6945fbf5478a263c75aa14f2" },
    { $set: { email: "xyz@email.com" }},{ new : true, runValidators : true} 
  );
  console.log(updateinfo);
}
// updateData1();

async function updateData2() {
  const updateinfo = await User.findByIdAndUpdate(
   "6945fbf5478a263c75aa14f2",
    { $set: { name: "xyz" }},{ new : true, runValidators : true} 
  );
  console.log(updateinfo);
}
// updateData2();

async function deleteData() {
  // const result = await User.deleteOne({_id : "6945fbf5478a263c75aa14f2"});
  // const result = await User.findOneAndDelete({_id : "6945fbf5478a263c75aa14f2"});
  //const result = await User.findByIdAndDelete("6945fbf5478a263c75aa14f2");
  const result = await User.findOneAndDelete({age : {$lt : 15}})
  console.log(result);
}
// deleteData();
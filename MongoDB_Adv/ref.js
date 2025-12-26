const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/mongo-relationship")
  .then(() => console.log("connet______!"))
  .catch((err) => console.log(err.message));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const postSchema = new mongoose.Schema({
  content: String,
  date: { type: Date, default: Date.now },
  user : {type : mongoose.Schema.Types.ObjectId,
    ref : "User"
  }
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

async function createUser(name, email, age) {
  const newUser = new User({
    name,
    email,
    age,
  });

  await newUser.save();
  console.log(newUser);
}
// createUser("Sushil","abc@gmail.com",21);
async function createPost(content, user) {
  const newPost = new Post({
    content,
    user,
  });
  await newPost.save();
  console.log(newPost);
}
// createPost("Post 3" , "694d0512949aec7bfb681100");
async function getPost() {
 const result =  await Post.find().populate("user", "-age");
 console.log(result);
}
getPost();


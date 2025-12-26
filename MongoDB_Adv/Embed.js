const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/mongo-relationship")
  .then(() => console.log("MongoDB connected Successfully!!"))
  .catch((err) => console.log("MongoDB Connection Failed", err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const postSchema = new mongoose.Schema({
  content: String,
  date: { type: Date, default: Date.now },
  user : userSchema
});


const Post = mongoose.model("Post", postSchema);



async function createPost(content, user) {
  const newPost = new Post({
    content: content,
    user: user,
  });

  await newPost.save();
  console.log(newPost);
}

async function getPosts() {
  const posts = await Post.find();
  console.log(posts);
}



createPost("Content 4", {
  name  : "Tom",email :"Tom@gmail.com",age : 27
});

// getPosts();

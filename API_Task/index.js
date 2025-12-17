require('dotenv').config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require('helmet');
const todos = require('./Router/todos');
app.use(helmet());
app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("TaskTreak Project!");
// });



// app.use((req,res,next)=>{
//   console.log(`${req.method} ${req.url}`);
//   next();
// })

app.use(express.urlencoded({extended:true}));

app.use("/profile",express.static("public"));
if(app.get("env") === "development"){
  console.log("Morgan middleware added");
app.use(morgan("dev"));
}




app.use('/api', todos);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
  console.log(`server running ${PORT}!!!`);
});

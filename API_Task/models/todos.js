const mongoose = require("mongoose");


const todoshema = new mongoose.Schema(
  {
  task : {type : String ,required : true},
  status : { type : String, enum : ["todo", "doing", "done"], default : "todo"},
  tags : ["String"]

  }
  )


  const todos = mongoose.model("Todo",todoshema );

module.exports = todos;
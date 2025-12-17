const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("TaskTreak Project!");
});

const todoArr = [
  {
    id: 1,
    task: "Create all api for project 01",
    tags: ["Nodejs", "JavaScrpits"],
    status: "todo",
  },
  {
    id: 2,
    task: "Create all api for project 01",
    tags: ["Nodejs", "JavaScrpits"],
    status: "todo",
  },
  {
    id: 3,
    task: "Create all api for project 01",
    tags: ["Nodejs"],
    status: "todo",
  },
  {
    id: 4,
    task: "Create all api for project 01",
    tags: ["JavaScrpits"],
    status: "todo",
  },
];

app.get("/todos", (req, res) => {
  res.send(todoArr);
});

app.get("/todos/:id", (req, res) => {
  const todoID = parseInt(req.params.id);
  const todo = todoArr.find((t) => t.id === todoID);
  res.send(todo);
});

app.post("/todos", (req, res) => {
  const todo = req.body;
  if (!todo.task) {
    return res.status(400).send("task is required!");
  }
  if (!todo.Status) {
    return res.status(400).send("staus is required!");
  }
  if (!todo.tags) {
    return res.status(400).send("tages is required!");
  }
  const newtodo = {
    id: todoArr.length + 1,
    task: todo.task,
    status: todo.Status,
  };

  todoArr.push(newtodo);
  res.send(newtodo);
  console.log(newtodo);
});

app.put('/todos/:id',(req,res)=>{
  const id = parseInt(req.params.id);
   const {task,tags,status} = req.body;
  const todoindex = todoArr.findIndex((t)=> t.id === id)

  if(todoindex === -1){
  return res.status(400).json({message : "todo not found!"})
}

if(task){
  todoArr[todoindex].task = task;
}

if(tags){
  todoArr[todoindex].tags = tags;
}
if(status){
  todoArr[todoindex].status = status;
}
 res.json(todoArr[todoindex]);
})

app.delete("/todos/:id",(req,res)=>{
  const id = parseInt(req.params.id);
  const todoIndex = todoArr.findIndex((t)=>t.id === id);

  if(todoIndex === -1){
    return res.status(400).json({message : "task not found!"});
  }
  todoArr.splice(todoIndex,1);
  res.json({message :"todo delete successfully!"});
});




const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
  console.log(`server running ${PORT}!!!`);
});

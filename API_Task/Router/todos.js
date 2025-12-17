const express = require('express');
const router = express.Router();

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

// Test root for this router
router.get("/", (req, res) => {
  res.send("Todos router is up. Try GET /api/todos");
});

router.get("/todos", (req, res) => {
  res.send(todoArr);
});

router.get("/todos/:id", (req, res) => {
  const todoID = parseInt(req.params.id);
  const todo = todoArr.find((t) => t.id === todoID);
  res.send(todo);
});

router.post("/todos", (req, res) => {
  const todo = req.body;
 
  const newtodo = {
    id: todoArr.length + 1,
    task: todo.task,
    tags : todo.tags,
    status: todo.status,
  };

  todoArr.push(newtodo);
  res.send(newtodo);
  console.log(newtodo);
});

router.put('/todos/:id',(req,res)=>{
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

router.delete("/todos/:id",(req,res)=>{
  const id = parseInt(req.params.id);
  const todoIndex = todoArr.findIndex((t)=>t.id === id);

  if(todoIndex === -1){
    return res.status(400).json({message : "task not found!"});
  }
  todoArr.splice(todoIndex,1);
  res.json({message :"todo delete successfully!"});
});

module.exports = router;
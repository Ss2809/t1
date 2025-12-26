const express = require("express");
const router = express.Router();
const Todo = require("../models/todos");

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

router.get("/todos", async (req, res) => {
  // res.send(todoArr);

  //const data = await Todo.find();
  // const data = await Todo.find({tags : "HTML", status : "todo"});

  // const data = await Todo.countDocuments({status : "done"});
  const data = await Todo.find({ task: /\b Create\b/i }); //import aahe visurn jatee ,, so IMP
  res.send(data);
  // console.log(data);
});

router.get("/todos/:id", (req, res) => {
  const todoID = parseInt(req.params.id);
  const todo = todoArr.find((t) => t.id === todoID);
  res.send(todo);
});

router.post("/todos", async (req, res) => {
  const todo = req.body;

  // const newtodo = {
  //   id: todoArr.length + 1,
  //   task: todo.task,
  //   tags : todo.tags,
  //   status: todo.status,
  // };

  // todoArr.push(newtodo);

  const newtodo = new Todo({
    task: todo.task,
    status: todo.status,
    tags: todo.tags,
  });

  const storetodo = await newtodo.save();

  res.status(201).send(storetodo);
  console.log(storetodo);
});

router.put("/todos/", async (req, res) => {
  // const id = parseInt(req.params.id);
  const id = req.params.id;
  const { task,tags,status } = req.body;

  // const todoindex = await Todo.findByIdAndUpdate(
  //   id,
  //   { $set: { task: task } },
  //   { new: true, runValidators: true }
  // );
  const todostaus = await Todo.updateMany(
    {status : "doing"},
    { $set: { status: "done" } }
    
  );
  // const todoindex = todoArr.findIndex((t) => t.id === id);

  // if (todoindex === -1) {
  //   return res.status(400).json({ message: "todo not found!" });
  // }

  // if (task) {
  //   todoArr[todoindex].task = task;
  // }

  // if (tags) {
  //   todoArr[todoindex].tags = tags;
  // }
  // if (status) {
  //   todoArr[todoindex].status = status;
  // }
  res.json(todostaus);
});

router.delete("/todos/:id", async(req, res) => {
  const id = req.params.id;

  const result = await Todo.deleteOne({_id : id});
  // const todoIndex = todoArr.findIndex((t) => t.id === id);

  // if (todoIndex === -1) {
  //   return res.status(400).json({ message: "task not found!" });
  // }
  // todoArr.splice(todoIndex, 1);
  res.json({ result, message: "todo delete successfully!" });
});

module.exports = router;

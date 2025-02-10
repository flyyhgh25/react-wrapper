import express from "express";
import cors from "cors";
import { nanoid } from "nanoid";
const app = express();
import morgan from "morgan";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

let taskList = [
  { id: nanoid(), title: "Wash Dishes", isDone: false },
  { id: nanoid(), title: "Boil Water", isDone: false },
  { id: nanoid(), title: "Drink Coffee", isDone: false },
  { id: nanoid(), title: "Cooking", isDone: false },
  { id: nanoid(), title: "Have breakfast", isDone: false },
];
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1> Hello I am from the server </h1>");
});

app.get("/api/tasks", (req, res) => {
  res.json({ taskList });
});

app.post("/api/create", (req, res) => {
  const { title } = req.body;
  if (!title) {
    res.status(400).json({ msg: "Please provide a title" });
    return;
  }
  const newTask = { id: nanoid(), title: title, isDone: false };
  taskList = [...taskList, newTask];
  res.json({ task: newTask });
});

app.patch("/api/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { isDone } = req.body;
  taskList = taskList.map((task) => {
    if (task.id === id) {
      return { ...task, isDone };
    }
    return task;
  });
  res.json({ msg: "task updated" });
});

app.delete("/api/tasks/:id", (req, res) => {
  const { id } = req.params;
  taskList = taskList.filter((task) => task.id !== id);

  res.json({ msg: "Task removed" });
});

app.use((req, res) => res.status(404).send("Route does not exist"));
const port = process.env.POST || 5000;

const startApp = () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

startApp();

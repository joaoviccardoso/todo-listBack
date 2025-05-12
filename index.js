import express from "express";
import mongoose from "mongoose";
import tarefa from "./models/tarefas.js";
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://jackwood:Skate1303@todolist.r37dsob.mongodb.net/?retryWrites=true&w=majority&appName=todoList")
.then(() => console.log("Banco de dados conectado"))
.catch(() => console.log("deu ruim"));

app.get("/", (req, res) =>{
    req.send("conectado")
})

app.get("/tarefas", (req, res) => {
    return res.json(tarefas)
})

app.post("/tarefas", async (req, res) =>{
    const requisicao = req.body;

    const newTarefa = await tarefa.create(requisicao);

    return res.json(newTarefa);
})

app.listen(3000)
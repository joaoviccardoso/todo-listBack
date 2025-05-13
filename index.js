import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import tarefa from "./models/tarefas.js";
const app = express();
dotenv.config()
app.use(express.json());

mongoose.connect(process.env.URL_MONGO)
.then(() => console.log("Banco de dados conectado"))
.catch(() => console.log("deu ruim"));

app.get("/tarefas", async (req, res) => {
    try {
        const tarefas = await tarefa.find();
        return res.json(tarefas)
    } catch (error) {
        return res.send(500).json({ erro: "Erro ao buscar tarefas" })
    }
    
})

app.post("/tarefas", async (req, res) =>{
    try {
        const requisicao = req.body;
        const newTarefa = await tarefa.create(requisicao);
        return res.json(newTarefa);
    } catch (error) {
        return res.send(500).json({erro: "erro ao cadastrar tarefa"})
    }
    
})

app.listen(3000)
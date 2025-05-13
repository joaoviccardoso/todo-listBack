import express from "express";
import db from "./config/connectDb.js";
import tarefa from "./models/tarefas.js";
const app = express();

app.use(express.json());

db.on("erro", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log('conexão com o banco feita com sucesso')
});

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

app.put("/tarefas/:id", async (req, res) =>{
    try {
        const id = req.params.id;
        const atualizarTarefa = await tarefa.findByIdAndUpdate(id, {$set: req.body}, { new: true });

        if(atualizarTarefa !== null){
            res.status(200).send({message: "Tarefa atualizado com sucesso"});
        } else {
            res.status(404).send({message: "id do Tarefa nao localizado"})
        }
    } catch (error) {
        return res.send(500).json({erro: "erro ao atualizar tarefa"})
    }
})

app.listen(3000)
import express from "express";
import TarefasController from "../controller/tarefasController.js";

let router = express.Router();

router.get("/tarefas", TarefasController.listarTarefas)
    .post("/tarefas", TarefasController.postTarefas)
    .put("/tarefas/:id", TarefasController.atualizarTarefa)
    .delete("/tarefas/:id", TarefasController.deletarTarefa)

export default router

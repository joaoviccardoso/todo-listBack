import express from "express";
import MensagemController from "../controller/mensagemController.js";

let router = express.Router();

router.get("/mensagem", MensagemController.listarMensagem)
    .post("/mensagem", MensagemController.postMensagem)
    .put("/mensagem/:id", MensagemController.atualizarMensagem)
    .delete("/mensagem/:id", MensagemController.deletarMensagem)

export default router

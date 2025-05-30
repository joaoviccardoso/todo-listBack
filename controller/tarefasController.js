
import ErroNaoEcontrado from "../erro/erroNaoEcontrado.js";
import tarefa from "../models/tarefas.js";

export class TarefasController{
    async listarTarefas(req, res, next){

        try {
            const tarefas = await tarefa.find();
            return res.status(200).json(tarefas)
        } catch (error) {
            next(error)
        }
    }

    async postTarefas(req, res, next){
        try{
            const requisicao = req.body;
            const newTarefa = await tarefa.create(requisicao);
            return res.json(newTarefa);
        }catch (error) {
            next(error)
        }
    }

    async atualizarTarefa(req, res, next){
        try {
            const id = req.params.id;
            const atualizarTarefa = await tarefa.findByIdAndUpdate(id, {$set: req.body}, { new: true });
        
            if(atualizarTarefa !== null){
                res.status(200).send({message: "Tarefa atualizado com sucesso"});
            } else {
                next(new ErroNaoEcontrado("id do Tarefa nao localizado"));
            }
            } catch (error) {
                next(error)
            }
    }

    async deletarTarefa(req, res, next){
        try {
            const id = req.params.id;
            const deletarTarefa = await tarefa.findByIdAndDelete(id);
        
            if(deletarTarefa !== null){
                    res.status(200).send({message: "Tarefa deletada com sucesso"});
            } else {
                    next(new ErroNaoEcontrado("id da Tarefa para deletar nao localizado"));
            }
        } catch (error) {
            next(error)
        }
    }
}

export default  new TarefasController();
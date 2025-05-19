import tarefa from "../models/tarefas.js";

export class TarefasController{
    async listarTarefas(req, res){
        try {
            const tarefas = await tarefa.find();
            return res.json(tarefas)
        } catch (error) {
            return res.send(500).json({ erro: "Erro ao buscar tarefas" })
        }
    }

    async postTarefas(req, res){
        try{
            const requisicao = req.body;
            const newTarefa = await tarefa.create(requisicao);
            return res.json(newTarefa);
        }catch (error) {
            return res.send(500).json({erro: "erro ao cadastrar tarefa"})
        }
    }

    async atualizarTarefa(req, res){
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
    }

    async deletarTarefa(req, res){
        try {
            const id = req.params.id;
            const deletarTarefa = await tarefa.findByIdAndDelete(id);
        
            if(deletarTarefa !== null){
                    res.status(200).send({message: "Tarefa deletada com sucesso"});
            } else {
                    res.status(404).send({message: "id da Tarefa nao localizado"})
            }
        } catch (error) {
                return res.status(500).json({erro: "erro ao deletar tarefa"})
        }
    }
     
}

export default  new TarefasController();
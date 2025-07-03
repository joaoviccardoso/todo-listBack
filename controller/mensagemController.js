
import ErroNaoEcontrado from "../erro/erroNaoEcontrado.js";
import mensagem from "../models/mensagem.js";

export class TarefasController{
    async listarMensagem(req, res, next){

        try {
            const mensagens = await mensagem.find();
            return res.status(200).json(mensagens)
        } catch (error) {
            next(error)
        }
    }

    async buscarMensagemPorId(req, res, next){
        try {
            const id = req.params.id;
            const mensagemId = await mensagem.findById(id)
            return res.status(200).json(mensagemId)
        } catch (error) {
            next (error)
        }
    }

    async postMensagem(req, res, next){
        try{
            const requisicao = req.body;
            const newMensagem = await mensagem.create(requisicao);
            return res.json(newMensagem);
        }catch (error) {
            next(error)
        }
    }

    async atualizarMensagem(req, res, next){
        try {
            const id = req.params.id;
            const atualizarMensagem = await mensagem.findByIdAndUpdate(id, {$set: req.body}, { new: true });
        
            if(atualizarMensagem !== null){
                res.status(200).send({message: "Mensagem atualizado com sucesso"});
            } else {
                next(new ErroNaoEcontrado("id da Mensagem nao localizado"));
            }
            } catch (error) {
                next(error)
            }
    }

    async deletarMensagem(req, res, next){
        try {
            const id = req.params.id;
            const deletarMensagem = await mensagem.findByIdAndDelete(id);
        
            if(deletarMensagem !== null){
                    res.status(200).send({message: "Mensagem deletada com sucesso"});
            } else {
                    next(new ErroNaoEcontrado("id da Mensagem para deletar nao localizado"));
            }
        } catch (error) {
            next(error)
        }
    }
}

export default  new TarefasController();
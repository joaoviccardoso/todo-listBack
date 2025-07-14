
import ErroNaoEcontrado from "../erro/erroNaoEcontrado.js";
import Mensagem from "../models/mensagem.js";

export class TarefasController{
    async listarMensagem(req, res, next){

        try {
            const mensagens = await Mensagem.find();
            return res.status(200).json(mensagens)
        } catch (error) {
            next(error)
        }
    }

    async buscarMensagemPorId(req, res, next){
        try {
            const id = req.params.id;
            const mensagemId = await Mensagem.findById(id)
            return res.status(200).json(mensagemId)
        } catch (error) {
            next (error)
        }
    }

    async postMensagem(req, res, next){
        try{
            const requisicao = req.body;
            const newMensagem = await Mensagem.create(requisicao);
            return res.json(newMensagem);
        }catch (error) {
            next(error)
        }
    }

    async atualizarMensagem(req, res, next){
        try {
            const id = req.params.id;
            const atualizarMensagem = await Mensagem.findByIdAndUpdate(id, {$set: req.body}, { new: true });
        
            if(atualizarMensagem !== null){
                res.status(200).send({message: "Mensagem atualizado com sucesso"});
            } else {
                next(new ErroNaoEcontrado("id da Mensagem nao localizado"));
            }
            } catch (error) {
                next(error)
            }
    }

    async atualizarLikes(req, res, next){
        const { id } = req.params;
        const { liked } = req.body;

        try {
            const mensagem = await Mensagem.findById(id); // aqui está o uso correto

            if (!mensagem) {
                return res.status(404).json({ message: "Mensagem não encontrada" });
            }

        if (liked) {
            mensagem.likes += 1;
        } else {
            mensagem.likes = Math.max(0, mensagem.likes - 1);
        }

        await mensagem.save();

            res.json({ likes: mensagem.likes });
        } catch (error){
            next(error)
        }
    }

    async deletarMensagem(req, res, next){
        try {
            const id = req.params.id;
            const deletarMensagem = await Mensagem.findByIdAndDelete(id);
        
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
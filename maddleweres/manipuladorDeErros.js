import mongoose from "mongoose"

function manipuladorDeErro(erro, req, res, next){
    if(erro instanceof mongoose.Error.CastError){
        res.status(400).send({mensagem: "Um ou mais dados fornecidos estao errados"})
    } else{
        res.status(500).send({mensagem: "Erro interno do servidor"})
    }    
}

export default manipuladorDeErro
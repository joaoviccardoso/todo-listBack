import mongoose from "mongoose"
import erroBase from "../erro/erroBase.js"
import requisicaoIncorreta from "../erro/erroRequisicaoIncorreta.js"
import ErroValidacao from "../erro/erroValidacao.js"
import ErroNaoEcontrado from "../erro/erroNaoEcontrado.js"


// Middleware responsável por tratar erros lançados durante as requisições
function manipuladorDeErro(erro, req, res, next){

    // Trata erro de conversão de tipos no MongoDB (ex: id mal formatado)
    if(erro instanceof mongoose.Error.CastError){
        new requisicaoIncorreta().enviarResposta(res)

    // Trata erro de validação dos dados definidos no schema do Mongoose
    }else if(erro instanceof mongoose.Error.ValidationError){
        new ErroValidacao(erro).enviarResposta(res)

    
    }else if(erro instanceof ErroNaoEcontrado){
        erro.enviarResposta(res)
    // Qualquer outro erro é tratado como erro interno do servidor   
    } else{
        new erroBase().enviarResposta(res)
    }    
}

export default manipuladorDeErro
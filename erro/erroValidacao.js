import ErroBase from "./erroBase.js";

class ErroValidacao extends ErroBase{
    constructor(erro){
        const mensagemErro = Object.values(erro.errors)
        .map(erro => erro.message)
        .join("; ")

        super(`Houve um erro de validação de dados erros encotrados: ${mensagemErro}`, 400)
    }
}

export default ErroValidacao;
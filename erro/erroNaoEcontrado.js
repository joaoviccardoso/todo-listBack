import ErroBase from "./erroBase.js";

class ErroNaoEcontrado extends ErroBase{
    constructor(mensagem = "Pagina nao encontrada"){
        super(mensagem, 404)
    }
}

export default ErroNaoEcontrado
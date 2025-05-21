import ErroBase from "./erroBase.js";

class requisicaoIncorreta extends ErroBase{
    constructor(){
        super("Um ou mais dados fornecidos estao errados", 400)
    }
}

export default requisicaoIncorreta;
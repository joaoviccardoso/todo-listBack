import ErroNaoEcontrado from "../erro/erroNaoEcontrado.js"

function manipulador404(req, res, next){
    const erro404 = new ErroNaoEcontrado();
    next(erro404);
}

export default manipulador404
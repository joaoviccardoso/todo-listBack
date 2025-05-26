import express from "express";
import db from "./config/connectDb.js";
import router from "./routes/routesTarefas.js";
import manipuladorDeErro from "./maddleweres/manipuladorDeErros.js";
import manipulador404 from "./maddleweres/manipulador404.js";

const app = express();

app.use(express.json());

db.on("erro", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log('conexão com o banco feita com sucesso')
});

app.use("/", router);
app.use(manipulador404)
app.use(manipuladorDeErro)


app.listen(3000)
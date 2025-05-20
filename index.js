import express from "express";
import db from "./config/connectDb.js";
import router from "./routes/routesTarefas.js";
import manipuladorDeErro from "./maddleweres/manipuladorDeErros.js";

const app = express();

app.use(express.json());

db.on("erro", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log('conexão com o banco feita com sucesso')
});

app.use("/", router);

app.use(manipuladorDeErro)


app.listen(3000)
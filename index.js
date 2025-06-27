import express from "express";
import cors from "cors";
import db from "./config/connectDb.js";
import router from "./routes/routesMensagem.js";
import manipuladorDeErro from "./maddleweres/manipuladorDeErros.js";
import manipulador404 from "./maddleweres/manipulador404.js";


const app = express(); // <=== DEVE vir antes do uso de app.use

// Configurações
app.use(cors({
  origin: 'http://127.0.0.1:5500'
}));
app.use(express.json());

db.on("erro", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log('conexão com o banco feita com sucesso')
});

app.use("/", router);
app.use(manipulador404)
app.use(manipuladorDeErro)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
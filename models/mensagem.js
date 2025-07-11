import mongoose from "mongoose";

const mensagemSchema = new mongoose.Schema({
    autor: {
        type: String,
        required: [true, "O autor e um campo obrigadorio"]
    },
    mensagem: { 
        type: String, 
        required: [true, "A mensagem e um campo obrigadorio."] 
    },
    senha: {
        type: String,
        required: [true, "A senha e um campo obrigadorio."]
    },
    createdAt: { type: Date, default: Date.now },
    likes: {type: String}
})

export default mongoose.model("mensagem", mensagemSchema);
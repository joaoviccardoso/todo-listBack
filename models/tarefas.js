import mongoose from "mongoose";

const tarefaSchema = new mongoose.Schema({
    title: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    completed: { type: Boolean, default: false },
})

export default mongoose.model("tarefa", tarefaSchema);
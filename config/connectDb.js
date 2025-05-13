import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

mongoose.connect(process.env.URL_MONGO);

let db = mongoose.connection;

export default db
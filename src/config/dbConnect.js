import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const {DB_USER,DB_PASSWORD} = process.env

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.y7tu4.mongodb.net/?retryWrites=true&w=majority`)
let db = mongoose.connection;

export default db;
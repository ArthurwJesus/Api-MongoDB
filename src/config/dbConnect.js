import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const {DB_USER,DB_PASSWORD} = process.env

mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@10.0.237.41/?authSource=183120&ssl=false`) //banco da upf
// mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.y7tu4.mongodb.net/?retryWrites=true&w=majority`) => Nuvem
let db = mongoose.connection;

export default db;
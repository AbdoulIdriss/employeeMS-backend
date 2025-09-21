import express from "express";
import mongoose from "mongoose";
import router from "./routes/employeeRoutes";
import dotenv from "dotenv";
dotenv.config();


const app = express();
app.use(express.json());




const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
    throw new Error("MONGO_URL environment variable is not defined.");
}

mongoose.connect(MONGO_URL, {
    dbName: "employee",
}).then(() => {
    console.log("database connection established");   
}).catch((error) => console.log(error));

app.use("/", router)

export default app;


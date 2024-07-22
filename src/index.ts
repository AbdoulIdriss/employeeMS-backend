import express from "express";
import mongoose from "mongoose";
import router from "./routes/employeeRoutes";

const app = express();
app.use(express.json());

const MONGO_URL = 'mongodb://localhost:27017';
mongoose.connect(MONGO_URL, {
    dbName: "employee",
}).then(() => {
    console.log("database connection established");   
}).catch((error) => console.log(error));

app.use("/", router)

app.listen(4000, ()=> {
    console.log(`server running on http://localhost:4000`);
    
})

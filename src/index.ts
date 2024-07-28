import express from "express";
import mongoose from "mongoose";
import router from "./routes/employeeRoutes";
import cors from "cors";

const app = express();
app.use(express.json());

const corsOptions ={
    origin:'http://localhost:4200', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

const MONGO_URL = 'mongodb://localhost:27017/employee';
mongoose.connect(MONGO_URL, {
    dbName: "employee",
}).then(() => {
    console.log("database connection established");   
}).catch((error) => console.log(error));

app.use("/", router)

app.listen(4000, ()=> {
    console.log(`server running on http://localhost:4000`);    
});

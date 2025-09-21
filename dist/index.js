"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const employeeRoutes_1 = __importDefault(require("./routes/employeeRoutes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const corsOptions = {
    // origin:'http://localhost:4200',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200
};
app.use((0, cors_1.default)(corsOptions));
const MONGO_URL = 'mongodb://localhost:27017/employee';
mongoose_1.default.connect(MONGO_URL, {
    dbName: "employee",
}).then(() => {
    console.log("database connection established");
}).catch((error) => console.log(error));
app.use("/", employeeRoutes_1.default);
app.listen(4000, () => {
    console.log(`server running on http://localhost:4000`);
});
//# sourceMappingURL=index.js.map
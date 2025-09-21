"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Employee_1 = require("../Models/Employee");
class EmployeeController {
    constructor() {
        this.getAllEmployees = (request, response) => __awaiter(this, void 0, void 0, function* () {
            try {
                const employees = yield Employee_1.EmployeeModel.find();
                return response.status(200).json({ data: employees });
            }
            catch (error) {
                return response.status(404).json({ message: 'Employees not found' });
            }
        });
        this.getEmployee = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const employee = yield Employee_1.EmployeeModel.findById(id);
                return express_1.response.status(200).json({ data: employee });
            }
            catch (error) {
                return express_1.response.status(404).json({ message: 'Employee not found' });
            }
        });
        this.createEmployee = (request, response) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, mobile, dob, doj } = request.body;
                const employee = new Employee_1.EmployeeModel({
                    name,
                    email,
                    mobile,
                    dob,
                    doj
                });
                yield employee.save();
                return response.sendStatus(201).json({ message: "Employee created successfully", data: employee });
            }
            catch (error) {
                console.log(error);
                return response.sendStatus(404).json({ message: 'error' });
            }
        });
        this.updateEmployee = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { name, email, mobile, dob, doj } = req.body;
                const employee = yield Employee_1.EmployeeModel.findById(id);
                if (employee) {
                    employee.name = name;
                    employee.email = email;
                    employee.mobile = mobile;
                    employee.dob = dob;
                    employee.doj = doj;
                    yield employee.save();
                    return express_1.response.sendStatus(200).json({ message: "Employee updated successfully", data: employee });
                }
                return express_1.response.sendStatus(400);
            }
            catch (error) {
                return express_1.response.sendStatus(404);
            }
        });
        this.deleteEmployee = (request, response) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = request.params;
                yield Employee_1.EmployeeModel.findByIdAndDelete({ _id: id });
                return response.sendStatus(200).json({ message: "Employee deleted successfully" });
            }
            catch (error) {
                return response.sendStatus(404);
            }
        });
    }
}
exports.default = new EmployeeController();
//# sourceMappingURL=EmployeeController.js.map
import express, { response } from "express"
import { EmployeeModel } from "../Models/Employee";

class EmployeeController {
    getAllEmployees = async(req: express.Request, res: express.Response) => {
        try {
            const employees = await EmployeeModel.find();
            return response.sendStatus(200).json({data: employees})
        } catch (error) {
            return response.sendStatus(404);
        }
    }

    getEmployee = async(req: express.Request, res: express.Response) => {
        try {
            const {id} = req.params
            const employee = await EmployeeModel.findById(id);
            return response.sendStatus(200).json({data: employee})
        } catch (error) {
            return response.sendStatus(404);
        }
    }

    createEmployee = async(req: express.Request, res: express.Response) => {
        try {
            const {name, email, mobile, dob, doj } = req.body
            const employee = new EmployeeModel({
                name, 
                email, 
                mobile, 
                dob, 
                doj
            })
            
            await employee.save()
            return response.sendStatus(201).json({message: "Employee created successfully", data: employee})
            
        } catch (error) {
            return response.sendStatus(404);
        }
    }


    updateEmployee = async(req: express.Request, res: express.Response) => {
        try {
            const {id} = req.params
            const {name, email, mobile, dob, doj } = req.body
            const employee = await EmployeeModel.findById(id);
            
            if (employee){
                employee.name = name;
                employee.email = email;
                employee.mobile = mobile;
                employee.dob = dob;
                employee.doj = doj;
                
                await employee.save()
                return response.sendStatus(200).json({message: "Employee updated successfully", data: employee})
            }
            
            
        } catch (error) {
            return response.sendStatus(404);
        }
    }

    deleteEmployee = async(req: express.Request, res: express.Response) => {
        try {
            const {id} = req.params
            await EmployeeModel.findByIdAndDelete({_id: id});
            return response.sendStatus(200).json({message: "Employee deleted successfully"})
        } catch (error) {
            return response.sendStatus(404);
        }
    }

}

export default new EmployeeController();
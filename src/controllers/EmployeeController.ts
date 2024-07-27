import express, { response } from "express"
import { EmployeeModel } from "../Models/Employee";

class EmployeeController {
    getAllEmployees = async(request: express.Request, response: express.Response) => {
        try {
            const employees = await EmployeeModel.find();
            return response.status(200).json({data: employees})
        } catch (error) {
            return response.status(404).json({message: 'Employees not found'});
        }
    }

    getEmployee = async(req: express.Request, res: express.Response) => {
        try {
            const {id} = req.params
            const employee = await EmployeeModel.findById(id);
            return response.status(200).json({data: employee})
        } catch (error) {
            return response.status(404).json({message: 'Employee not found'});
            
        }
    }

    createEmployee = async(request: express.Request, response: express.Response) => {
        try {
            const {name, email, mobile, dob, doj } = request.body      
            const employee = new EmployeeModel({
                name, 
                email, 
                mobile, 
                dob, 
                doj
            })
                   
            await employee.save();
            return response.sendStatus(201).json({message: "Employee created successfully", data: employee})
            
        } catch (error) {
            console.log(error);
            return response.sendStatus(404).json({message: 'error'});
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
            return response.sendStatus(400);          
        } catch (error) {
            return response.sendStatus(404);
        }
    }

    deleteEmployee = async(request: express.Request, response: express.Response) => {
        try {
            const {id} = request.params
            await EmployeeModel.findByIdAndDelete({_id: id});
            return response.sendStatus(200).json({message: "Employee deleted successfully"})
        } catch (error) {
            return response.sendStatus(404);
        }
    }

}

export default new EmployeeController();
const EmployeeController = require("../controller/employee.controller")
const employee = (app) => {
    // app.get('/employee', (req, res) => {
    //     res.json({
    //         data: [
    //             { id: 1, name: 'John Doe', department: 'IT' },
    //             { id: 2, name: 'Jane Smith', department: 'HR' },
    //             { id: 3, name: 'Mike Johnson', department: 'Finance' }
    //         ]
    //     })
    // })
    // app.post('/employee', (req, res) => {
    //     res.json({
    //         message: 'Employee added successfully' 
    //     })
    // });
    
    // We need to seperate the process from route to controller
    // However, in route we just only declare route path name no need to declare handler any more
    app.get('/employee', EmployeeController.get_all);
    app.post('/employee', EmployeeController.create);
    app.put('/employee', EmployeeController.update);
    app.delete('/employee', EmployeeController.remove);
}

module.exports = employee; // export for index using
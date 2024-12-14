const CustomerController = require('../controller/customer.controller');

const customer = (app) => {
    // app.get('/api/customer', (req, res) => {
    //     res.json(
    //         {
    //             name: 'John Doe',
    //             email: 'john.doe@example.com',
    //             address: {
    //                 street: '123 Main St',
    //                 city: 'Anytown',
    //                 state: 'CA',
    //                 zip: '12345'
    //             }
    //         }
    //     )
    // })
    // app.post('/api/customer', (req, res) => {
    //     res.json({
    //         message : 'Customer added successfully'
    //     })
    // })


     // We need to seperate the process from route to controller
    // However, in route we just only declare route path name no need to declare handler any more
    app.get('/api/customer', CustomerController.get_all);
    app.post('/api/customer', CustomerController.create);
    app.put('/api/customer', CustomerController.update);
    app.delete('/api/customer',CustomerController.remove);

}

module.exports = customer;
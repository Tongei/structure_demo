const express = require("express");

const app = express();

app.use(express.json()); // for body 

const emloyee = require("./src/route/employee.route"); // import to route employee

const customer = require("./src/route/customer.route"); // import to route customer
// Call route
emloyee(app);
customer(app);

// Start server on port 8080
const port = 8080;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
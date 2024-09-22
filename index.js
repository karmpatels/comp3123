var http = require("http");

// Import Employee module
const Employee = require('./Employee'); 

console.log("Lab 03 - NodeJs");

// Define Server Port
const port = process.env.PORT || 8081;

// Create Web Server
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json'); 

    if (req.method !== 'GET') {
        res.writeHead(405); 
        return res.end(JSON.stringify({ error: http.STATUS_CODES[405] }));
    }

    if (req.url === '/') {
        // Display welcome message
        res.writeHead(200);
        return res.end(JSON.stringify({ message: "<h1>Welcome to Lab Exercise 03</h1>" }));
    }

    if (req.url === '/employee') {
        // Display all employee details
        const employees = Employee.getAllEmployees(); // Assuming this function returns employee data
        res.writeHead(200);
        return res.end(JSON.stringify(employees));
    }

    if (req.url === '/employee/names') {
        // Display only all employees' names in ascending order
        const employeeNames = Employee.getEmployeeNames(); // Assuming this returns sorted names
        res.writeHead(200);
        return res.end(JSON.stringify(employeeNames));
    }

    if (req.url === '/employee/totalsalary') {
        // Display total salary of all employees
        const totalSalary = Employee.getTotalSalary(); // Assuming this function returns total salary
        res.writeHead(200);
        return res.end(JSON.stringify({ total_salary: totalSalary }));
    }


    res.writeHead(404);
    res.end(JSON.stringify({ error: http.STATUS_CODES[404] }));
});

// Start the server
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

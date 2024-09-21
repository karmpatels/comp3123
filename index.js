var http = require("http");
var Employee = require("./Employee"); // Ensure the path is correct

console.log("Lab 03 - NodeJs");

// Define Server Port
var port = process.env.PORT || 8081;

// Create Web Server using CORE API
var server = http.createServer(function(req, res) {
    res.setHeader("Content-Type", "application/json");

    if (req.method !== 'GET') {
        res.statusCode = 405; // Method Not Allowed
        res.end(JSON.stringify({ error: http.STATUS_CODES[405] }));
        return;
    }

    if (req.url === '/') {
        res.statusCode = 200;
        res.end('<h1>Welcome to Lab Exercise 03</h1>');
    } else if (req.url === '/employee') {
        var employees = Employee.getAll();
        res.statusCode = 200;
        res.end(JSON.stringify(employees));
    } else if (req.url === '/employee/names') {
        var names = Employee.getNames();
        res.statusCode = 200;
        res.end(JSON.stringify(names));
    } else if (req.url === '/employee/totalsalary') {
        var totalSalary = Employee.getTotalSalary();
        res.statusCode = 200;
        res.end(JSON.stringify(totalSalary));
    } else {
        res.statusCode = 404; // Not Found
        res.end(JSON.stringify({ error: http.STATUS_CODES[404] }));
    }
});

server.listen(port, function() {
    console.log(`Server listening on port ${port}`);
});

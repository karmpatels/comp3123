let employees = [
    { id: 1, firstName: "Karm", lastName: "Patel", email: "karm.patel@gmail.com", Salary: 50000 },
    { id: 2, firstName: "Milan", lastName: "Patel", email: "milan.patel@gmail.com", Salary: 4000 },
    { id: 3, firstName: "Soham", lastName: "Chaudhari", email: "soham.chaudhari@gmail.com", Salary: 5500 },
    { id: 4, firstName: "Dev", lastName: "Gandhi", email: "dev.gandhi@gmail.com", Salary: 900 }
];

// Function to get all employees
function getAllEmployees() {
    return employees;
}

// Function to get sorted names
function getEmployeeNames() {
    return employees
        .map(emp => `${emp.firstName} ${emp.lastName}`)
        .sort();
}

// Function to calculate total salary
function getTotalSalary() {
    return employees.reduce((total, emp) => total + (emp.Salary || 0), 0); // Change emp.salary to emp.Salary
}

module.exports = {
    getAllEmployees,
    getEmployeeNames,
    getTotalSalary
};

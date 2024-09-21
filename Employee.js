//Created an employee module and exported it to index.js file

var employees = [
    { id: 1, firstName: "Karm", lastName: "Patel", email: "karm.patel@gmail.com", Salary: 10000 },
    { id: 2, firstName: "Milan", lastName: "Patel", email: "milan.patel@gmail.com", Salary: 4000 },
    { id: 3, firstName: "Soham", lastName: "Chaudhari", email: "soham.chaudhari@gmail.com", Salary: 5500 },
    { id: 4, firstName: "Dev", lastName: "Gandhi", email: "dev.gandhi@gmail.com", Salary: 1000 }
];

module.exports = {
    getAll: function() {
        return employees;
    },
    getNames: function() {
        return employees.map(function(emp) {
            return emp.firstName + " " + emp.lastName;
        }).sort();
    },
    getTotalSalary: function() {
        let totalSalary = employees.reduce(function(sum, emp) {
            return sum + emp.Salary;
        }, 0);
        return { total_salary: totalSalary };
    }
};
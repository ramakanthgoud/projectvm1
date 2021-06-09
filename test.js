var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.empName = name;
        this.empAge = age;
    }
    Employee.prototype.getEmployeeInfo = function () {
        return 'EmployeeName:$(this.empName} and EmployeeAge:$(this.empAge)';
    };
    return Employee;
}());
var emp1 = new Employee('suresh kumar', 25);
var emp2 = new Employee('Swetha', 23);
console.log(emp1.empName, emp2.empAge);
console.log(emp1.empName, emp2.empAge);
console.log(emp1.getEmployeeInfo());
console.log(emp2.getEmployeeInfo());

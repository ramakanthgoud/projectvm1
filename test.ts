class Employee{
    empName:string;
    empAge:number;
    constructor(name:string,age:number){
        this.empName=name;
        this.empAge=age;

    }
    getEmployeeInfo(){
        return 'EmployeeName:$(this.empName} and EmployeeAge:$(this.empAge)'

    }
}
let emp1=new Employee('suresh kumar',25)
let emp2=new Employee('Swetha',23)
console.log(emp1.empName,emp2.empAge)
console.log(emp1.empName,emp2.empAge)

console.log(emp1.getEmployeeInfo())
console.log(emp2.getEmployeeInfo())



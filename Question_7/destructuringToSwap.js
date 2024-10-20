let destructuringToSwap = (employees) => {

    let [firstEmployee] = employees;
    let [lastEmployee] = [employees[employees.length - 1]];

    employees[0] = lastEmployee;
    employees[employees.length - 1] = firstEmployee;

    return employees;

}

const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];


console.log(destructuringToSwap(employees));

// Output -
//     [
//         { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 },
//         { name: 'Jane Smith', age: 28, department: 'Finance', salary: 60000 },
//         { name: 'John Doe', age: 30, department: 'HR', salary: 50000 }
//     ]
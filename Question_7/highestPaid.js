let highestPaid = (employees) => {

    if (employees.length === 0) {
        return null;
    }

    let ans = employees.reduce((highest, current) => {
        let { salary: highestSalary } = highest;
        let { salary: currentSalary } = current;

        if (currentSalary > highestSalary) {
            highest = current;
        }

        return highest;

    });
    return ans;
}



const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(highestPaid(employees));

// Output - { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }

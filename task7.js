function getAverageSalary(salariesObj) {
    let sum = 0;
    let count = 0;

    for (let key in salariesObj) {
        sum += salariesObj[key];
        count++;
    }

    return count === 0 ? 0 : sum / count;
}

let salaries1 = {
    John: 100,
    Bill: 300,
    Mike: 250
};

let salaries2 = {
    Cris: 150,
    Brain: 600,
    John: 300,
    Steve: 400,
    Bill: 50
};

console.log("Середня зарплата (1):", getAverageSalary(salaries1));
console.log("Середня зарплата (2):", getAverageSalary(salaries2));

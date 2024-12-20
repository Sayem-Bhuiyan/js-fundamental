const numbers = [23, 43, 52, 89];

const student = {
    name: "Sayem Bhuiyan",
    age: 22,
    certificate: ["SSC", "Diploma", "PH-Web Development"],
}

const about = `My name is${student.name}.`

// Arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x%2 === 0;
const addThree = (x, y, z) => x + y + z;

const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}


// Spread operator
const newNumbers = [...numbers]
console.log(newNumbers)
numbers.push(99)
console.log(numbers)

// Create a new array from an old array and add a element
const curentNumbers = [...newNumbers, 41, 80];
console.log(curentNumbers)
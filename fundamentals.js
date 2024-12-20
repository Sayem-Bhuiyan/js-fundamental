// 1.  How to declar a variable using let and const

const fatherName = "Anju Bhuiyan";
let season = "rainy";
season = "winter"

// 2. How to write a condition ( 6 basic condition)
// 6 basic condition: >, <, ===, !==, <=, >=
// multiple conditions: &&, ||

if(fatherName === 'Anju Bhuiyan' || season === 'rainy'){
    // statement
}
else if(fatherName != 'Anju Bhuiyan' || season === "winter"){
    // statement
}
else{
    // statement
}

// 3. Array declar
const numbers = [23, 43, 52, 89];
let sum = 0;

// 4. for loop
for ( let i = 0; i < numbers.length; i++){
    sum = sum + numbers[i]
}

// 5. Function
// function multiply(num1, num2){
//     const result = num1 * num2;
//     return result;
// }

// const output = multiply(5, 5);
// console.log(output)

const summation = (num1, num2) => {
    const result = num1 + num2;
    return result;
}
const output = summation(5, 5);
console.log(output)

// 6. object
const student = {
    name: "Sayem Bhuiyan",
    age: 22,
    certificate: ["SSC", "Diploma", "PH-Web Development"],
}

// 3 ways to access a property of object
console.log(student.name); 
console.log(student["name"])
const myName = "name";
console.log(student[myName])


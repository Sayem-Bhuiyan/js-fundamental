// Truthy: 'a', 5, true, {}, []
// Falsy: '', flase, null, undefined

let myVar = 5;

if(myVar){
    myVar = myVar * 100;
}
else {
    myVar = 0;
};

const money = 800;
let food;

if(money > 100){
    food = "Biryani";
}else{
    food = "Tea or Snacks"
};

// Ternary
let food1;
food1 = (money > 100)? "Tehari" : "Chips";

console.log(food1)

// Number to string conversion
const num1 = 52;
console.log(num1);
const numStr = num1 + " ";
console.log(numStr);


// String to number
const input = '550';
const inputNum = +input;
console.log(input, inputNum);



let isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');

isActive && showUser();


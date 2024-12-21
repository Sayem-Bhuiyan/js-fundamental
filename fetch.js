// 1.  JSON ( Javascript Object Notation)

const student = {
    name: "Sayem Bhuiyan",
    age: 22,
    certificate: ["SSC", "Diploma", "PH-Web Development"],
}


const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);


const studentObject = JSON.parse(studentJSON);
// console.log(studentObject);


// 2. fetch

// fetch('url')
// .then(res => res.json())
// .then( data => console.log(data));


// keys, values

const keys = Object.keys(student);
console.log(keys)

const values = Object.values(student);
console.log(values)


// add or remove form an arry
const products = [
    {name: "laptop", price: 32000, brand: "lenovo", color: 'black'},

    {name: "Watch", price: 3500, brand: "casio", color: 'off-white'},

    {name: "phone", price: 22000, brand: "mi", color: 'black'},

    {name: "sunglass", price: 300, brand: "ribon", color: 'silver'},

    {name: "laptop", price: 60000, brand: "hp", color: 'white'}
];

const airpod = { name: 'airpod', price: 1500, brand: 'xiaomi', color: 'white'}

// copy products array and then add new product to the array.

const newProducts = [...products, airpod];
console.log(newProducts);


// remove the phone item form the products list.

const modifyProducts = products.filter(product => product.name !== 'phone');
console.log(modifyProducts);




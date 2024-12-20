const products = [
    {name: "laptop", price: 32000, brand: "lenovo", color: 'black'},

    {name: "Watch", price: 3500, brand: "casio", color: 'off-white'},

    {name: "phone", price: 22000, brand: "mi", color: 'black'},

    {name: "sunglass", price: 300, brand: "ribon", color: 'silver'},

    {name: "laptop", price: 60000, brand: "hp", color: 'white'}
];

const brands = products.map(product => product.name)
// console.log(brands);

const prices = products.map(product => product.price);
// console.log(prices);

// products.forEach(product => console.log(product.color))

// filter

const cheap = products.filter(product => product.price < 5000);
console.log(cheap);


const findN = products.filter(product => product.name.includes('n'));
console.log(findN)

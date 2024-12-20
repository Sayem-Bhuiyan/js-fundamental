const numbers = [12, 34, 53, 23, 21];
const [num1, num2, num3, num4, num5] = numbers;
// console.log(num5)

const [x, y] = [23, 24];
console.log(x, y)


const employee = {
    id: "17050",
    name: 'Sayem Bhuiyan',
    designation: 'Web Developer',
    machine: "Mac",
    language: ['javascript'],
    specification: {
        height: 5.8,
        weight: 64,
        address: `Siraj Nogor(Nayachor), Raipura, Narsingdi`,
        drink: 'water',
        education: ['JSC', 'SSC', 'Diploma'],
        mobile: {
            brand: 'mi',
            price: 22000,
            color: "black"
        }
    }
};

const {id, name} = employee;

const [cert1, cert2, cert3] = employee.specification.education;
console.log(cert1, cert2, cert3)

const {brand} = employee.specification.mobile;
console.log(brand)
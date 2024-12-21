localStorage.setItem('userId', 17050);


const AddItem = () => {

    const nameInput = document.getElementById('productName');
    const name = nameInput.value;

    const priceInput = document.getElementById('productPrice');
    const price = priceInput.value;

    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    // console.log(productName, productPrice);

    // setItem to localStorage
    if(name && price){
        localStorage.setItem(name, price)
    }
    nameInput.value = "";
    priceInput.value = "";
}
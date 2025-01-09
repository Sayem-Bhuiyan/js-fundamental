localStorage.setItem('userId', 17050);


const AddItem = () => {

    const nameInput = document.getElementById('productName');
    const name = nameInput.value;

    const priceInput = document.getElementById('productPrice');
    const price = priceInput.value;

    // setItem to localStorage
    if(name && price){
        localStorage.setItem(name, price)
    }
    nameInput.value = "";
    priceInput.value = "";
}
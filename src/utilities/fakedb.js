//use local storage to manage cart data

const addToDb = (id) => {
    const quantity = localStorage.getItem(id);
    if (quantity) {
        console.log('already Exists');
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(id, newQuantity);
    }
    else {
        console.log('save item');
        localStorage.setItem(id, 1);
    }

}

export { addToDb };
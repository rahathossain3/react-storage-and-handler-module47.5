//use local storage to manage cart data

const addToDb = (id) => {
    //declare empty object  ---empty object ullek korle o cole na korle o cole

    let shoppingCart = {};

    //get the shopping cart from local storage 
    const storedCart = localStorage.getItem('shopping-cart');
    // jodi paoya jay
    if (storedCart) {
        // console.log(storedCart);
        shoppingCart = JSON.parse(storedCart);
    }
    // else {
    //     shoppingCart = {};
    // }

    //set item from shopping cart in array
    const quantity = shoppingCart[id];
    //set item if it exists
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
        // localStorage.setItem(id, newQuantity);
    }
    else {
        // new item added when item is not exists
        shoppingCart[id] = 1;
        // localStorage.setItem(id, 1);
    }


    //set object in local storage 
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}


const removeFromDb = id => {
    // local storage item
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            // delete selected item
            delete shoppingCart[id];
            // console.log('exists in card');

            //set object in local storage 
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}


export {
    addToDb,
    removeFromDb,
    deleteShoppingCart
};
const add = (first, second) => {
    return first + second;
}

const multiply = (first, second) => {
    return first * second;
}

// for array--------------
// const numbers = [20, 24, 225, 65, 89];
// const sumReducer = (previous, current) => previous + current;
// const total = numbers.reduce(sumReducer, 0)

// for object-------------
/* const items = [
    { id: 1, name: 'alta', price: 100 },
    { id: 2, name: 'alta', price: 100 },
    { id: 3, name: 'alta', price: 100 },
    { id: 4, name: 'alta', price: 100 },
    { id: 5, name: 'alta', price: 100 }
]

const itemSumReducer = (previous, current) => previous + current.price;
const itemTotal = items.reduce(itemSumReducer, 0) */

const getTotalPrice = products => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reducer(reducer, 0)
    return total;
}


//2n option

export {
    add,
    multiply,
    getTotalPrice as getTotal
};
// kno function er nam change korte hole
// getTotalPrice as getTotal


//1st option

// export default add--;
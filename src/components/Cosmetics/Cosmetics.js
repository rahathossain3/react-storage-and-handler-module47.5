import React from 'react';

const Cosmetics = () => {
    const cosmetics = [
        { id: 1, name: 'Alta', price: 100 },
        { id: 2, name: 'Alta', price: 200 },
        { id: 3, name: 'Alta', price: 300 },
        { id: 4, name: 'Alta', price: 400 },
        { id: 5, name: 'Alta', price: 500 }
    ]
    return (
        <div>
            <h1>Welcome to my Cosmetics store</h1>
            {
                cosmetics.map(cosmetic => console.log(cosmetic))
            }
        </div>
    );
};

export default Cosmetics;
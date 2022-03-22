import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const cosmetics = [
        { id: 1, name: 'Alta', price: 100 }, //cosmetic single element
        { id: 2, name: 'palis', price: 200 },
        { id: 3, name: 'malis', price: 300 },
        { id: 4, name: 'balta', price: 400 },
        { id: 5, name: 'nalta', price: 500 }
    ]
    return (
        <div>
            <h1>Welcome to my Cosmetics store</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic.id}
                    cosmetic={cosmetic}
                > </Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;
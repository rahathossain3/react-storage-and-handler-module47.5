import React from 'react';
// import add from '../../utilities/calculate';
import { add } from '../../utilities/calculate';

const Cosmetics = () => {
    const first = 55;
    const second = 66;
    // const t = add
    const total = add(first, second);
    return (
        <div>
            <h1>Welcome to my Cosmetics store</h1>
            <p>Total is: {total}</p>
        </div>
    );
};

export default Cosmetics;
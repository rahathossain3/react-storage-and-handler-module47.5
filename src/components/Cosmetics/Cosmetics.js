import React, { useEffect, useState } from 'react';
import { getTotal } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    //data generate
    //3rd way {my own json & using fetch--------------------------------------
    const [cosmetics, setCosmetics] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])

    const total = getTotal(cosmetics);
    return (
        <div>
            <h1>Welcome to my Cosmetics store</h1>
            <p>Money needed; {total} </p>
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
import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    //data generate
    //1st way {make own hand--------------------------------------
    /*   const cosmetics = [
          { id: 1, name: 'Alta', price: 100 }, //cosmetic single element
          { id: 2, name: 'palis', price: 200 },
          { id: 3, name: 'malis', price: 300 },
          { id: 4, name: 'balta', price: 400 },
          { id: 5, name: 'nalta', price: 500 }
      ] */

    // 2nd way  {using Json generator-----------------------
    const cosmetics = [
        {
            "id": "623a6b0775270aa070d8105f",
            "age": 485,
            "name": "Terra Lara"
        },
        {
            "id": "623a6b071ffddd2e6cff9b08",
            "age": 331,
            "name": "Lorena Terrell"
        },
        {
            "id": "623a6b07a8ceacf2b0875414",
            "age": 202,
            "name": "Mays Rosales"
        },
        {
            "id": "623a6b074666a8bf5f7d9e6c",
            "age": 288,
            "name": "Lynn Aguilar"
        },
        {
            "id": "623a6b07fda74167c4f2a46a",
            "age": 550,
            "name": "Kerr Nash"
        },
        {
            "id": "623a6b07adc7c77eaf5205de",
            "age": 182,
            "name": "Bernadette Hammond"
        }
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
import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    //destructuring from object
    const { name, price, id } = props.cosmetic;

    // event handler 
    const addToCart = (id) => {
        addToDb(id)
    };

    //
    const removeFromCart = id => {
        removeFromDb(id);
        // console.log('removing id', id);
    }

    /* // event handler call by using another function
    const addToCartWithParam = () => addToCart(id); */

    return (
        <div className='product'>
            <h2>Buy this : {name} </h2>
            <p>only for: ${price}</p>
            <p><small>it has id : {id}</small></p>

            {/*----------- 1st way */}
            {/* <button onClick={addToCartWithParam}>Add to cart</button> */}

            {/* -------------- 2nd way -- when add parameter*/}
            <button onClick={() => addToCart(id)}>Add to cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;

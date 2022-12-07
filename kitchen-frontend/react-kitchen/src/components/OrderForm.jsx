import React from 'react';

export const OrderForm = () => {
    return(
        <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="Items" />
            <button>Submit Order</button>
        </form>
    );
};
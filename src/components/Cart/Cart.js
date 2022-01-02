import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }


    let shipping = 12.99;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99
    }

    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);


    const formetNumber = num =>{
        const precition = num.toFixed(2);
        return Number (precition);
    }
    

    return (
        <div>
            <h4>Order summery</h4>
            <p>Items Orderd : {cart.length}</p>

            <p>Product Price: {formetNumber(total)}</p>

            <p><small style={{color: 'gray', fontWeight: 'bold'}}>Shipping Cost: {shipping}</small></p>

            <p><small style={{color: 'gray', fontWeight: 'bold'}}>Tax + Vat: {tax}</small></p>

            <p style={{color: 'gray', fontWeight: 'bold'}}>Total Price: {total}</p>

            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;











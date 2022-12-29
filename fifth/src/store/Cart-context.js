
import React from 'react'

const CartContext = React.createContext({
    items : [],
    totltAmount : 0,
    addItem : (item) =>{},
    removItem : (id)=>{}
});

export default CartContext; 
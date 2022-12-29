
import React, { useState }  from 'react';

import  Header from "./Component/Layout/Header"

import CartProvider from './store/CartProvider';
import Meals from './Component/Meals/Meals';
import Cart from './Component/Cart/Cart';
function App() {
  
  const[cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = ()=>{
    setCartIsShown(true);
  }

  const hideCartHandler=()=>{
    setCartIsShown(false);

  }
  return (
    <CartProvider>
      {cartIsShown &&<Cart onClose={hideCartHandler}/> }
      <Header onShowCart={showCartHandler} />
      <main>
       <Meals/> 
      </main>
    </CartProvider>
  );
}

export default App;

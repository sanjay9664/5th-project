
import React, { useState }  from 'react';

import  Header from "./Component/Layout/Header"
import { Fragment } from "react";
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
    <Fragment>
      {cartIsShown &&<Cart onClose={hideCartHandler}/> }
      <Header onShowCart={showCartHandler} />
      <main>
       <Meals/> 
      </main>
    </Fragment>
  );
}

export default App;

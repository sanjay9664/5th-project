
import React  from 'react';

import  Header from "./Component/Layout/Header"
import { Fragment } from "react";
import Meals from './Component/Meals/Meals';
import Cart from './Component/Cart/Cart';
function App() {
  return (
    <Fragment>
      <Cart/>
      <Header/>
      <main>
       <Meals/> 
      </main>
    </Fragment>
  );
}

export default App;

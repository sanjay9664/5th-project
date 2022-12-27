
import React  from 'react';

import  Header from "./Component/Layout/Header"
import { Fragment } from "react";
import Meals from './Component/Meals/Meals';
function App() {
  return (
    <Fragment>
      <h2>Let's get started!</h2>
      <Header/>
      <main>
       <Meals/> 
      </main>
    </Fragment>
  );
}

export default App;

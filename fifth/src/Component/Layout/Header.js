
import React, { Fragment } from 'react';
import HeaderCartButton from "./HeaderCartButton"
import classes from  "./Header.module.css"
import  Mealsimg from "../../assets/img.jpg.jpg"

const Header = (props)=>{
    
    return (
        <Fragment>
            <header className={classes.header}>
            <h1>React-Meals</h1>
            <HeaderCartButton  onClick={props.onShowCart}  />
            {/* <button>Cart</button> */}
            </header>
            <div className={classes['main-image']}>
                <img src={Mealsimg} alt="no-img" />
            </div>
        </Fragment>
    )
}

export default Header;
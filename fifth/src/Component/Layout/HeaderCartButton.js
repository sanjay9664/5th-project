import { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/Cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  // console.log(cartCtx);

  let numberOfCartItems = 0
  if(cartCtx.items )
  {
     numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
      return curNumber + item.amount;
    }, 0);
  }
 
    

  // console.log(numberOfCartItems)
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
      {/* <span className={classes.badge}>4</span> */}
    
    </button>
  );
};

export default HeaderCartButton;


import { useContext } from "react";
import MealsItemForm from "./MealsItemForm";
import classes from "./MealsItem.module.css";
import CartContext from "../../../store/Cart-context";
const MealsItem = (props) => {

    const cartCtx = useContext(CartContext);
    const price =`$${props.price.toFixed(2)}`;
    
    const addToCartHandler = amount =>{
      cartCtx.addItem({
        id:props.id,
        name : props.name,
        amount : amount,
        price : props.price
      })
    }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.discription}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div> <MealsItemForm onAddToCart={addToCartHandler}/></div>
    </li>
  );
};

export default MealsItem;

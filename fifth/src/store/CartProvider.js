import { useReducer } from "react";
import CartContext from "./Cart-context";

const defaultCartState = {
  itmes: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.itmes.concat(action.item);
    const updatedTotalAmount =state.totalAmount + action.item.price * action.item.amount;
    
    console.log(updatedItems,updatedTotalAmount)
    return {
      itmes: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCarthandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFormCarthandler = (id) => {
    dispatchCartAction({ type: "Remove", id: "id" });
  };

  const cartContex = {
    itmes: cartState.itmes,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCarthandler,
    removeItem: removeItemFormCarthandler,
  };
  return (
    <CartContext.Provider value={cartContex}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

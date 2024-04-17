import CartIcon from "../CartIcon";
import { useState } from "react";
import "./CartWidget.css";
function CartWidget() {
  const [cartItems, setCartItems] = useState(5);

  return (
    <div className="cartwidget__wrapper">
      <CartIcon ancho={40} alto={40} />
      <span>{cartItems}</span>
    </div>
  );
}

export default CartWidget;
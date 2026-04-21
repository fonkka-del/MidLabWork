
import {useCart} from "../context/CartContext";
import CartItem from "../components/CartItem";
import {Link} from "react-router-dom";

export default function Cart(){
  const {cart}=useCart();
  const total=cart.reduce((a,c)=>a+c.price*c.qty,0);

  return(
    <div className="container">
      <h1>Cart</h1>
      {cart.map(i=><CartItem key={i.id} item={i}/>)}
      <h2>Total: ${total}</h2>
      <Link to="/checkout">Checkout</Link>
    </div>
  )
}

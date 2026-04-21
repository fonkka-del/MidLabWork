
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({product}){
  const {addToCart}=useCart();
  return(
    <div className="card">
      <h3><Link to={`/product/${product.id}`}>{product.name}</Link></h3>
      <p>${product.price}</p>
      <p>{product.category}</p>
      <button onClick={()=>addToCart(product)}>Add</button>
    </div>
  )
}

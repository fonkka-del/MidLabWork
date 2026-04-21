
//import {useParams} from "react-router-dom";
import products from "../data/products";
import {useCart} from "../context/CartContext";

export default function ProductDetails(){
  const {id}=useParams();
  const {addToCart}=useCart();
  const p=products.find(x=>x.id==id);

  return(
    <div className="container">
      <h1>{p.name}</h1>
      <p>{p.description}</p>
      <p>${p.price}</p>
      <p>Stock: {p.stock}</p>
      <button onClick={()=>addToCart(p)}>Add</button>
    </div>
  )
}

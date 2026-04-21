
import { useCart } from "../context/CartContext";

export default function CartItem({item}){
  const {removeFromCart,updateQty}=useCart();
  return(
    <div>
      {item.name}
      <input type="number" value={item.qty}
        onChange={e=>updateQty(item.id,Number(e.target.value))}/>
      <button onClick={()=>removeFromCart(item.id)}>Remove</button>
    </div>
  )
}

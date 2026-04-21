
import { Link } from "react-router-dom";

export default function Navbar(){
  return(
    <nav>
      <strong>🛒 ShopLite</strong>
      <span style={{float:"right"}}>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/orders">Orders</Link>
      </span>
    </nav>
  )
}

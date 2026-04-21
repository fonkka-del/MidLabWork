
import {useCart} from "../context/CartContext";
import {useState} from "react";

export default function Checkout(){
  const {cart}=useCart();
  const [f,setF]=useState({name:"",email:"",address:""});
  const [msg,setMsg]=useState("");
  const total=cart.reduce((a,c)=>a+c.price*c.qty,0);

  const submit=()=>{
    if(!f.name||!f.email||!f.address) return alert("All required");
    const orders=JSON.parse(localStorage.getItem("orders"))||[];
    orders.push({date:new Date().toLocaleString(),items:cart,total});
    localStorage.setItem("orders",JSON.stringify(orders));
    localStorage.removeItem("cart");
    setMsg("Order placed!");
  }

  return(
    <div className="container">
      <h1>Checkout</h1>
      <input placeholder="Name" onChange={e=>setF({...f,name:e.target.value})}/>
      <input placeholder="Email" onChange={e=>setF({...f,email:e.target.value})}/>
      <input placeholder="Address" onChange={e=>setF({...f,address:e.target.value})}/>
      <h3>Total: ${total}</h3>
      <button onClick={submit}>Submit</button>
      <p>{msg}</p>
    </div>
  )
}


import {createContext,useContext,useState,useEffect} from "react";
const C=createContext();

export function CartProvider({children}){
  const [cart,setCart]=useState(()=>JSON.parse(localStorage.getItem("cart"))||[]);
  useEffect(()=>localStorage.setItem("cart",JSON.stringify(cart)),[cart]);

  const addToCart=p=>{
    setCart(prev=>{
      const e=prev.find(i=>i.id===p.id);
      if(e) return prev.map(i=>i.id===p.id?{...i,qty:i.qty+1}:i);
      return [...prev,{...p,qty:1}]
    })
  };
  const removeFromCart=id=>setCart(cart.filter(i=>i.id!==id));
  const updateQty=(id,qty)=>setCart(cart.map(i=>i.id===id?{...i,qty}:i));

  return <C.Provider value={{cart,addToCart,removeFromCart,updateQty}}>{children}</C.Provider>
}
export const useCart=()=>useContext(C);

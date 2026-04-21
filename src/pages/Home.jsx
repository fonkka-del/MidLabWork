
import {useEffect,useState} from "react";
import data from "../data/products";
import ProductCard from "../components/ProductCard";
import {getCache,setCache} from "../utils/cache";

export default function Home(){
  const [products,setProducts]=useState([]);
  const [search,setSearch]=useState("");
  const [cat,setCat]=useState("");

  useEffect(()=>{
    const c=getCache();
    if(c) setProducts(c);
    else setTimeout(()=>{setProducts(data);setCache(data)},500);
  },[]);

  const f=products.filter(p=>
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (cat===""||p.category===cat)
  );

  return(
    <div className="container">
      <input placeholder="Search" onChange={e=>setSearch(e.target.value)}/>
      <select onChange={e=>setCat(e.target.value)}>
        <option value="">All</option>
        <option>Electronics</option>
        <option>Fashion</option>
        <option>Books</option>
      </select>

      <div className="grid">
        {f.map(p=><ProductCard key={p.id} product={p}/>)}
      </div>
    </div>
  )
}

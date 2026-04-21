
export default function Orders(){
  const orders=JSON.parse(localStorage.getItem("orders"))||[];
  return(
    <div className="container">
      <h1>Orders</h1>
      {orders.map((o,i)=>(
        <div key={i}>
          <p>{o.date}</p>
          <p>Total: ${o.total}</p>
        </div>
      ))}
    </div>
  )
}


export function getCache(){
  const c=JSON.parse(localStorage.getItem("productsCache"));
  if(!c) return null;
  if(Date.now()-c.time<300000) return c.data;
  return null;
}
export function setCache(data){
  localStorage.setItem("productsCache",JSON.stringify({data,time:Date.now()}));
}

import React, { useEffect, useState } from 'react'
import Autosuggestion from './Autosuggestion'

const FetchApi=()=>{
    const [items, setItems]=useState([]);
    const apiItems =async () =>{
        const data=await fetch('https://jsonplaceholder.typicode.com/posts');
        const items=await data.json();
        console.log(items);
     
        setItems(items);
      }
    useEffect(() =>{
         apiItems();
      },[]);
   
    
  return (
    <div style={{display:"flex",justifyContent: 'center',alignItems: 'center',flexDirection:'column'}}>
    <h1>Autosuggestion list</h1>
    <Autosuggestion items={items}/>
    </div>
  )
}

export default FetchApi;

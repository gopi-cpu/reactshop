import { useState } from "react";
export default function Hellojohn(){
    const[mars,setmars]=useState()
    function handle(e){
        setmars(e.target.value);
    }
    return(
       <div>
        <input type="text" onChange={handle}/>
        <h2>Hello {mars}</h2>
       </div>
    )
}
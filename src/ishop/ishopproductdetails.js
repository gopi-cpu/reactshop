import { useState,useEffect } from "react"
import {  Link, Outlet, useParams } from "react-router-dom";
import axios from "axios";


export default function Ishopproductdetails(){
    
    var id=useParams()
    const[user,setuser]=useState()
    const[product,setproducts]=useState([])
    useEffect(()=>{
       setuser(id.id);
       axios.get("http://localhost:4000/getproducts")
       .then(response =>{
        setproducts(response.data)
       })
    },[])
    return(
        <div className="container-fluid">
            <nav className="col-8">
            <h1>kj {user}</h1>
            <ol>
                {
                    product.filter(item => item.id==user).map(pro =>
                      <li key={pro.id}>      
                      
                      <div> {pro.title}</div>
                      <div>Rating :{pro.rating.rate}</div>
                      <div>Price :{pro.price}$</div>
                      <button className="mt-2 mb-2"> <Link >Buy now</Link></button>
                      </li>
                        )
                        
                }
            </ol>
            </nav>
          
        </div>
    )
}
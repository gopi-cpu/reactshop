import { useState,useEffect } from "react"
import {  Link, Outlet, useParams } from "react-router-dom";
import axios from "axios";


export default function Ishopproducts(){
    var id=useParams()
    const[user,setuser]=useState()
    const[product,setproducts]=useState([])
    useEffect(()=>{
       setuser(id.product);
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
                    product.filter(item => item.category==user).map(pro =>
                      <li key={pro.id}>      
                      <img src={pro.image} height={100} width={100}/>
                      <div><Link to={"/details/:" + pro.id}>{pro.title}</Link></div>
                      <div>Rating :{pro.rating.rate}</div>
                      <div>Price :{pro.price}$</div>
                      <button className="mt-2 mb-2"> <Link to={"/buynow"}>Buy now</Link></button>
                      </li>
                        )
                        
                }
            </ol>
            </nav>
          
        </div>
    )
}
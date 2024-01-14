import { useEffect,useState } from "react"
import {  useNavigate,Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
export default function Dashboad(){
    const[cookies,setcookie,removecookie]=useCookies();
    const[userid,setuserId]=useState()
    const[user2,setuser2]=useState([])
    let navigate = useNavigate();
         function handlcategories(){
            axios.get("http://localhost:4000/getcategories")
            .then(response =>{
                setuser2(response.data)
             } )
          }
    useEffect(() =>{
        if(cookies["userid"]==undefined){
          navigate("/Login");
        }
        else{
          setuserId(cookies["userid"]);
          handlcategories()
        }
      })
    
    function handleclick(){
        removecookie("userid");
        navigate("/Login")
    }
    return(
        <div className="container-fluid">
            <h1>Hello {cookies.userid}</h1>
                <ol>
                    {
                        user2.map(product =>
                            <li key={product.category}><Link to={"/products/" + product.category}>{product.category.toUpperCase()}</Link></li>
                        )
                    }
                </ol>

            <button className="btn btn-link" onClick={handleclick}>Sinout</button>
        </div>
    )
}
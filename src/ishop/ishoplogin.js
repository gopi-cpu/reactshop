import { useState,useEffect } from "react"
import axios from "axios"
import Formik from "../components/formik"
import { useFormik } from "formik"
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
export default function Login(){
    const[users,setuser]=useState([])
    const[cookies,setcookie,removecookie]=useCookies()
    let navigate=useNavigate()
    var formik=useFormik({
        initialValues:{
            UserId:'',
            Password:''
        },
        onSubmit:values =>{
            for( var user of users){
                  if(user.UserId==values.UserId && user.Password==values.Password){
                    setcookie("userid",user.UserId);
                      navigate("/dashboad");
                      break;
                  }
                  else{
                    navigator("/error")
                  }
            }
        }
    })
    useEffect(() =>{
        axios.get("http://localhost:4000/getusers")
        .then(response =>{
          setuser(response.data);
        })
 },[])
    return(
        <div className="container-fluid">
        <h1>User login</h1>
        <form onSubmit={formik.handleSubmit}>
            <dl>
                <dt>UserId</dt>
                <dd ><input  type="text" onChange={formik.handleChange} value={formik.values.UserId} name="UserId"/></dd>
                <dt>Password</dt>
                <dd><input type="password" onChange={formik.handleChange} value={formik.values.Password} name="Password"/></dd>
            </dl>
            <button>Login</button>
            
        </form>
        </div>
    )
}
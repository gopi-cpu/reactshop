import { useState,useEffect } from "react"
import $, { get } from "jquery"
import Formik from "./formik"
import { useFormik } from "formik"
export default function JAjaxDemo(){
    const[users,setusers] = useState([])
    const[errormsg,seterrormsg]=useState()
    useEffect(()=>{
        $.ajax({
            method:"Get",
            url:"http://localhost:4000/getusers",
            success:function(respone){
                setusers(respone)
            }
        })
    })
      function verifyuserid(e){
        for(var user of users){
            if(users.UserId==e.target.value){
                seterrormsg("User id Already taken")
            }
            else{
                seterrormsg("Userid Available")
            }
        }
      }
    var formik= useFormik({
        initialValues:{
            UserId:'',
            Username:'',
            Password:'',
            Age:0,
            mobile:'',
            subscribe:true
        },
        onSubmit: values =>{
            $.ajax({
                method:"POST",
                url:"http://localhost:4000/registerusers",
                data:values
            })
            alert('Registered')
        }
    })
    
    return(
        <div className="container-fluid">
           <h1>Registration Form</h1>
           <form onSubmit={formik.handleSubmit}>
           <dl>
            <dt>UserId</dt>
            <dd><input type="text" name="UserId" onKeyUp={verifyuserid} value={formik.values.UserId} onChange={formik.handleChange}/></dd>
            <dd>{errormsg}</dd>
            <dt>Username</dt>
            <dd><input type="text" onChange={formik.handleChange} name="Username" value={formik.values.Username}/></dd>
            <dt>Password</dt>
            <dd><input type="Password" onChange={formik.handleChange} name="Password" value={formik.values.Password}/></dd>
            <dt>Age</dt>
            <dd><input type="number" onChange={formik.handleChange} value={formik.values.Age} name="Age"/></dd>
            <dt>mobile</dt>
            <dd><input type="text" onChange={formik.handleChange} checked={formik.values.subscribe} name="mobile"/></dd>
            <dt>subscribe</dt>
            <dd className="form-switch" > <input className="form-check-input" type="checkbox" onChange={formik.handleChange} name="subscribe" value={formik.values.subscribe}/>Yes</dd>
           </dl>
           <button>Register</button>
           </form>
        </div>
    )
}
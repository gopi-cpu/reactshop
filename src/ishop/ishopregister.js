import { useState } from "react"
import Formik from "../components/formik"
import { useFormik } from "formik"
import axios from "axios"
import { Link } from "react-router-dom"

export default function Register(){

    var formik=useFormik({
        initialValues:{
            UserId:'',
            Username:'',
            Password:'',
            Age:0,
            mobile:'',
            subscribe:true
        },
        onSubmit:values =>{
            axios.post("http://localhost:4000/registerusers", values);
            alert('Login success');
        }
    })
    return(
        <div className="container-fluid">
          <form onSubmit={formik.handleSubmit}>
              <dl>
                <dt>UserId</dt>
                <dd><input onChange={formik.handleChange} value={formik.values.UserId} type="text" name="UserId"/></dd>
                <dt>Username</dt>
                <dd><input type="text" onChange={formik.handleChange} value={formik.values.Username} name="Username"/></dd>
                <dt>Password</dt>
                <dd><input type="password" onChange={formik.handleChange} value={formik.values.Password} name="Password"/></dd>
                <dt>Age</dt>
                <dd><input type="number" onChange={formik.handleChange} value={formik.values.Age} name="Age"/></dd>
                <dt>mobile</dt>
                <dd><input type="text" onChange={formik.handleChange} value={formik.values.mobile} name="mobile"/></dd>
                <dt>subscribe</dt>
                <dd className="form-switch"><input className="form-check-input" type="checkbox" onChange={formik.handleChange} value={formik.values.subscribe} name="subscribe"/></dd>
              </dl>
              <button>Register</button>
              <Link to='/Login'>Already have an account</Link>
          </form>
        </div>
    )
}
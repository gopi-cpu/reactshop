import { useState,useEffect } from "react"
import Formik from "../components/formik"
import { useFormik } from "formik"
import axios from "axios"


export default function Buynow(){
  var formik=useFormik({
    initialValues:{
      Fullname:'',
      Mobilenumber:'',
      Housedetails:'',
      Area:'',
      Landmark:'',
      Pincode:'',
      Towncity:'',
      State:''
    },
    onSubmit:values =>{
      axios.post("http://localhost:4000/buynow", values);
      alert('Order Succes')
    }
  })
    return(
        <div className="container-fluid">
          <h1>Shipping Details</h1>
          <form onSubmit={formik.handleSubmit}>
            <dl>
                <dt>Full name</dt>
                <dd><input type="text" onChange={formik.handleChange} name="Fullname" value={formik.values.Fullname}/></dd>
                <dt>Mobile number</dt>
                <dd><input type="number" onChange={formik.handleChange} name="Mobilenumber" value={formik.values.Mobilenumber}/></dd>
                <dt>Flat,Houseno,Building,Appartment</dt>
                <dd><input type="text" onChange={formik.handleChange} name="Housedetails" value={formik.values.Housedetails}/></dd>
                <dt>Area Street</dt>
                <dd><input type="text" onChange={formik.handleChange} name="Area" value={formik.values.Area}/></dd>
                <dt>Landmark</dt>
                <dd><input type="text" onChange={formik.handleChange} value={formik.values.Landmark} name="Landmark"/></dd>
                <dt>Pincode</dt>
                <dd><input type="number" name="Pincode" onChange={formik.handleChange} value={formik.values.Pincode}/></dd>
                <dt>Town/City</dt>
                <dd><input name="Towncity" onChange={formik.handleChange} value={formik.values.Towncity}/></dd>
                <dt >State</dt>
                <dd>
                <select onChange={formik.handleChange} name="State" value={formik.values.State}>
                    <option>Andhrapradesh</option>
                    <option>Hyderabad</option>
                </select>
                </dd>
            </dl>
            <button>Submit</button>
          </form>

        </div>
    )
}
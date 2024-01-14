import { useFormik, validateYupSchema } from "formik"
import { json } from "react-router-dom"
import * as yup from "yup"
export default function Formyup(){

    const formik = useFormik({
       initialValues:{
        Username:'',
        Age:0,
        Email:'',
        Phonenumber:''
       },
       validationSchema:yup.object({
        Username:yup.string().required('Required Username').min(4,'username too short').max(10,'username too long'),
        Age:yup.number().required('Age Required'),
        Email:yup.string().email().required('Email Required')
       }),onSubmit:values =>{
        alert(JSON.stringify(values))
       }
    }
    
    )

    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
            <dl>
                <dt>Username</dt>
                <dd><input {...formik.getFieldProps("Username")} type="text" /></dd>
                <dd className="text-danger">{formik.errors.Username}</dd>
                <dt>Age</dt>
                <dd> <input {...formik.getFieldProps("Age")}/> </dd>
                <dd className="text-danger">{formik.errors.Age}</dd>
                <dt>Email</dt>
                <dd> <input {...formik.getFieldProps("Email")} /> </dd>
                <dd className="text-danger">{formik.errors.Email}</dd>
                <dt>Phonenumber</dt>
                <dd><input /></dd>
            </dl>
            <button>Register</button>
            </form>
        </div>
    )
}
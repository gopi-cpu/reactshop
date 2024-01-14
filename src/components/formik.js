import { formik, useFormik } from "formik";
export default function Formik(){

    const formik=useFormik({
        initialValues:{
            userName:'',
            password:'',
            city:''
        }
     
    })

    return(
        <div className="container-fluid">
           <dl>
            <dt>UserName</dt>
            <dd><input type="text" name="userName" onChange={formik.handleChange} value={formik.values.userName}/></dd>
            <dt>Password</dt>
            <dd><input type="password" name="password"onChange={formik.handleChange} value={formik.values.password}/></dd>
            <dt>City</dt>
            <dd>
                <select name="city" onChange={formik.handleChange} value={formik.values.city}>
                    <option>Select a city</option>
                    <option>Andhra</option>
                    <option>Hyderabad</option>
                </select>
            </dd>
           </dl>
           <button>Register</button>
           <h2>Details</h2>
           <dd>{formik.values.userName}</dd>
           <dd>{formik.values.password}</dd>
           <dd>{formik.values.city}</dd>
        </div>
    )
}
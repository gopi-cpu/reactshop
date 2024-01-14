import { useFormik } from "formik"


export default function Formikformvalidation(){
    
    function verifyuser(userdetails){
        const errors={}
        if(userdetails.Username==""){
            errors.Username="Username Requiured"
        }
        else if(userdetails.Username.length<4){
            errors.Username="Poor username"
        }
        else if(userdetails.Username.length>10){
            errors.Username="username is long"
        }
        if(userdetails.Age==""){
            errors.Age="Reuired Age"
        }
        else if(isNaN(userdetails.Age)){
            errors.Age="Age must be a number"
        }
        if(userdetails.Email==""){
            errors.Email="Required Email"
        }
        else if(userdetails.Email.indexOf("@")<=2){
            errors.Email="not a valid Email";
        }
        if(userdetails.number.match(/\+91\d{10}/)){
            errors.number=""
        }
        else{
            errors.number="enter a valid number"
        }
        return errors;
  }

    const formik=useFormik({
        initialValues:{
            Username:'',
            Age:'',
            Email:'',
            number:'',
        },
       validate:verifyuser,
    
    })


    return(
         <div className="container-fluid">
            <dl>
                <dt>UserName</dt>
                <dd><input type="text" name="Username" onChange={formik.handleChange} value={formik.values.Username}/></dd>
                <dd className="text-danger">{formik.errors.Username}</dd>
                <dt>Age</dt>
                <dd><input name="Age" onChange={formik.handleChange} value={formik.values.Age}/></dd>
                <dd className="text-danger">{formik.errors.Age}</dd>
                <dt>Email</dt>
                <dd><input  name="Email" onChange={formik.handleChange} value={formik.values.Email}/></dd>
                <dd className="text-danger">{formik.errors.Email}</dd>
                <dt>Phone number</dt>
                <dd><input name="number" value={formik.values.number} onChange={formik.handleChange}/></dd>
                <dd className="text-danger">{formik.errors.number}</dd>
            </dl>
            <button>Register</button>
        </div>
    )
}
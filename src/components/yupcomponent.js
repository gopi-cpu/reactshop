import {useFormik, Formik, Form, Field, ErrorMessage} from "formik"
import * as yup from "yup"

export default function Yupcomponent(){
    return(
        <Formik initialValues={{
            Username:'',
            Email:'',
            Age:0,
            City:''
        }}
        validationSchema={
            yup.object({
                Username:yup.string().min(4,'short username').max(10,'long username').required(),
                Email:yup.string().email().required(),
                Age:yup.number().required(),
                City:yup.string()
            })
        }
        onSubmit={
            values =>{
                alert(JSON.stringify(values))
            }
        }
        >
            <Form>
                {
                    <div>
                        <dl>
                            <dt>Username</dt>
                            <dd><Field type="text" name="Username"></Field></dd>
                            <dd><ErrorMessage name="Username"></ErrorMessage></dd>
                            <dt>Email</dt>
                            <dd><Field type="text" name="Email"></Field></dd>
                            <dd><ErrorMessage name="Email"></ErrorMessage></dd>
                            <dt>Age</dt>
                            <dd><Field type="number" name="age"></Field></dd>
                            <dd><ErrorMessage name="Age"></ErrorMessage></dd>
                            <dt>City</dt>
                            <dd><Field as="select" name="Coty">
                                <option>Hyderabad</option>
                                <option>Andhra</option>
                                </Field></dd>
                                <dd><ErrorMessage name="City"></ErrorMessage></dd>
                        </dl>
                        <button>Register</button>
                    </div>
                }
            </Form>
        </Formik>
    )
}
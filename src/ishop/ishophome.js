import {  useNavigate } from "react-router-dom"

export default function Home(){
    let navigate = useNavigate();
      function handlenewuser(){
        navigate("/Login")
      }
      function handleuser(){
        navigate("/register")
      }
    return(
        <div className="container-fluid">
               <button onClick={handleuser}>New User</button>
               <button onClick={handlenewuser}>Existing User</button>
        </div>
    )
}
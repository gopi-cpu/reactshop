import { Link, Outlet } from "react-router-dom";


export default function PersonalHome(){
    return(
        <div>
            <h1>personal Home</h1>
        <Link to="personallogin">  <h1>Personal Login</h1></Link>  
        <Link to="personalregister">   <h1>Personal Register</h1>  </Link> 
        <hr></hr>
        <Outlet />
        </div>
    )
}
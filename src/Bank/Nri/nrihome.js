import { Link, Outlet } from "react-router-dom";


export default function Nrihome(){
    return(
        <div>
            <h1>Nri home</h1>
          <Link to={"nrilogin"}>  <h1>Nri Login</h1>  </Link>
         <Link to={"nriregister"}>  <h1>Nri Register</h1>  </Link> 
         <hr />
         <Outlet />
        </div>
    )
}
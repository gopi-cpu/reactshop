import { Link, Outlet } from "react-router-dom"
export default function Bankapp(){
    return(
        <div>
            <h1>Bank App</h1>
        <Link to={"personalhome"}>  <h1>Personal Home</h1>  </Link>
        <Link to={"nrihome"}>  <h1>Nri Home</h1></Link>  
             <hr></hr>
             <Outlet />
        </div>
    )
}
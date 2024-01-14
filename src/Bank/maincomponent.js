import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
import Bankapp from "./bankapp"
import Personalogin from "./personal/personallogin"
import Nrilogin from "./Nri/nrilogin"
import PersonalHome from "./personal/personalhome"
import Nrihome from "./Nri/nrihome"
import Personalregister from "./personal/personalregister"
import Nriregister from "./Nri/nriregister"

export default function Maincomponent(){
    return(
        <div className="container-fluid">
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Bankapp />}>
          <Route path="personalhome" element={<PersonalHome />}>
            <Route path="personallogin" element={<Personalogin />}></Route>
            <Route  path="personalregister" element={<Personalregister />}></Route>
          </Route>
          <Route path="nrihome" element={<Nrihome />}>
            <Route  path="nrilogin" element={<Nrilogin />}/>
            <Route path="nriregister" element={<Nriregister />}/>
          </Route>
        </Route>
       </Routes>
       </BrowserRouter>
        </div>
    )
}
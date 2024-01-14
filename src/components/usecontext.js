import React,{useState,useContext} from "react"

var ContextDetails = React.createContext(null)

export default function Usecontext(){
    const [UserDetails] = useState({
        Username:'JOhn',
        Email:'John123@gmail.com'
    })
    return(
           <ContextDetails.Provider value={UserDetails}>
            <div>
            <h1>user</h1>
            <HeaderComponent />
            </div>
           </ContextDetails.Provider>
    )
}

function HeaderComponent(){
var useref=useContext(ContextDetails)
    return(
        <div className="bg-info text-white" style={{height:'150px', padding:'10px'}}>
            <h1>User {useref.Username}</h1>
            <NavbarComponent />
        </div>
    )
}


function NavbarComponent(){
    var ref2= useContext(ContextDetails)
        
    return(
       <div className="btn-toolbar bg-dark text-white justify-content-between">
          <div className="btn-group">
             <button className="btn btn-dark">Amazon</button>
          </div>
          <div className="btn-group">
              <button className="btn btn-dark">jk {ref2.Email}</button>
          </div>
       </div>
    )
}
export default function netflixheadercomponent(){
    return(
        <>
        <div className="d-flex justify-content-between m-3 p-3 ">
        <div>
            <h2 className="text-danger">Netfilx</h2>
        </div>
        <div className="input-group w-25 m-25">
        <select className="form-select">
            <option>Languages</option>
             <option>Telugu</option>
             <option>English</option>
             <option>Hindi</option>
        </select>
        <button className="btn btn-danger">sign in</button>
        </div>
        </div>
        
        </>

       
    )
}
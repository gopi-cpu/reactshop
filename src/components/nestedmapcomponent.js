import { useState,useEffect } from "react";
export default function Nasaonewaybinding(){
const [mars,setMars] = useState([]);
useEffect(()=>{
fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
.then(response=> response.json())
.then(data=> {
    setMars(data);
})
},[])
       return(
        <div className="container">
            <h2>MarsPhotos</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>photoid</th>
                        <th>camera name</th>
                        <th>roverName</th>
                        <th>preview</th>
                    </tr>
                </thead>
                <tbody>
                  <tr>
                    {
                        mars.photos.map(photo =>
                          <td>{photo.id}</td>  
                            )
                    }
                  </tr>
                </tbody>
            </table>
            
        </div>
       )
}
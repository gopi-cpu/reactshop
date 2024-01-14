import { useState,useReducer } from "react"
import { useFetch } from "../hooks/useFetch"
var initialValues={Like:0 , Dislike : 0}

function reducer(state,action){
      switch(action.type){
        case 'Like':
            return {Like : state.Like + 1, Dislike:state.Dislike}

            case 'Dislike':
                return{Dislike:state.Dislike+1, Like:state.Like}
      }
}
export default function  Usereducer2(){
     const data = useFetch("https://fakestoreapi.com/products/2")
    const [state, dispatcher]=useReducer(reducer,initialValues)
    
      
    function handleLike(){
        dispatcher({
            type:'Like'
        })
    }

    function handledislike(){
        dispatcher({
            type:'Dislike'
        })
    }
    return(
        <div className="container-fluid">
            <h1>Producr Details</h1>
                <div className="card p-2" style={{width:'200px'}}>
                <img src={data.data.image} className="card-img-ton" height="160px"/>
                    <div className="card-header">
                         <p>{data.data.title}</p>
                    </div>
                    <div className="card-footer">
                   <button onClick={handleLike}> {state.Like}Like</button>
                   <button onClick={handledislike}>{state.Dislike}Dislike</button>
                    </div>
                </div>
        </div>
    )
}
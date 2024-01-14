import { useReducer,useState } from "react"

var initialValues={count:0}

function reducer(state, action){
    switch(action.type){
      case 'Like':
      return {count : state.count++};

      case 'Dislike':
          return {count: state.count--}
    }
}
export default function ReducerDemo(){
     const [state, dispatcher] = useReducer(reducer, initialValues)
    function handlelike(){
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
        <div>
            <h1>Likes {state.count}</h1>
            <button onClick={handlelike}>Like</button>
            <button onClick={handledislike}>Dislike</button>
        </div>
    )
}
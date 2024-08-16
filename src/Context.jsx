import React , {useReducer} from 'react';

const initialState= {
    count : 0 
}

const countReducer = (state,action) =>{
    switch (action.type) {
        case 'INCREMENT':
            return{
                count : state.count + 1
            }
         case 'DECREMENT' :
            return{
                count : state.count - 1
            }   
        default:
            return state;
            
    }
}

const Counter = () =>{
    const[state,dispatch] = useReducer(countReducer,initialState);


return(
    <div>
        <p>count : {state.count}</p>
        <button onClick={() => dispatch({type : 'INCREMENT'})}>
         Increment
        </button>
        <button onClick={() => dispatch({type : 'DECREMENT'})}>
            Decrement
        </button>


    </div>
)
}
export default Counter;
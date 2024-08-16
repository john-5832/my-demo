import { useState } from "react";

const Increment=()=>{
    const [count,setcount]=useState(0);
    return(
        <div>
            <p>increment the value {count}</p>
            <button type="button" onClick={()=>setcount(count+1)}>increment</button>
            <button type="button" onClick={()=>setcount(count-1)}>decrement</button>
        </div>
    )
}

export default Increment;

// import { useState } from 'react';

import { useReducer } from "react"

// const Form = () => {
//   // useState hook for managing form inputs as an object
//   const [inputs, setInputs] = useState({
//     input1: '',
//     input2: '',
//     input3: '',
//     input4: ''
//   });

//     // Function to handle input changes
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setInputs((inputs)=>({
//           ...inputs,
//           [name]: value
//         }));
//       };

//   // Function for form submission
//   const handleSubmit = () => {
//     // Prevent Page Reload
//     // e.preventDefault();;
//     console.log(inputs);
//   };


  
//   return (
//     <div>
//       <form>
//         <div>
//           <h3>Form Validation</h3>
//           <label>
//             Name:
//             <input type="text" name="input1" value={inputs.input1} onChange={handleInputChange} />
//           </label>
//         </div>
//         <div>
//           <label>
//             Age:
//             <input type="number"  name="input2" value={inputs.input2} onChange={handleInputChange} />
//           </label>
//         </div>
//         <div>
//           <label>
//             Email id:
//             <input type="text" name="input3" value={inputs.input3} onChange={handleInputChange} />
//           </label>
//         </div>
//         <div>
//           <label>
//             Contact:
//             <input type="text" name="input4" value={inputs.input4} onChange={handleInputChange} />
//           </label>
//         </div>
//         <button type="submit" onSubmit={handleSubmit}>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Form;

const countreducer=(state,action)=>{
  switch(action.type){
    case'increment':
    return{
      count:state.count+1
    }
    case'decrement':
    return{
      count:state.count-1
    }
    default:
      return state;
  }
}

const count=()=>{
  const [state,dispatch]=useReducer(countreducer,{count:0});
}

return(
  <div>
    <h1>count:{state.count}</h1>
    <button onClick={()=>dispatch({type:'Increment'})}>Increment</button>
    <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
  </div>
)
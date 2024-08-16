import React, { useState, useEffect } from "react";

const Getmethod = () => {
    const [value, setValue] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getdata = async () => {
        try {
            const response = await fetch("https://reqres.in/api/users?delay=3");
            const jsonData = await response.json();
            setValue(jsonData.data); // set the data array directly
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false); // stop loading after the fetch is done
        }
    };

    useEffect(() => {
        getdata();
    }, []); // Empty dependency array means it runs only once after the initial render

    return (
        <div>
            {error ? <h1>Error: {error}</h1> : null}
            <h1>User Data:</h1>
            {loading ? <h1>Loading...</h1> : null}
            {data.map((user) => (
                <div>
                    <p>ID: {user.id}</p>
                    <p>firstname: {user.first_name}</p>
                    <p>lastname: {user.last_name}</p>
                    <p>email: {user.email}</p>
                    <p>img:<img src={user.avatar} alt="photo" /></p>
                </div>
            ))}
        </div>
    );
};


export default Getmethod;

// const Runmethod =()=>{
//     const[value,setValue]=useState([]);
//     const[loading,setLoading]=usestate(false);
//     const[error,setError]=useState(null);

//     const getdata=async()=>{
//         setLoading(true)
//         try{
//             const responce=await fetch('https://reqres.in/api/users?page=2');
//             const jsonData=await responce.json();
//             setValue(jsonData.data);
//         }
//         catch(error){
//             setError(error.message);
//         }
//         finally{
//             setLoading(false);
//         }
//     };

//     useEffect(()=>{
//         getdata();
//     })
//     if(loading){
//         return <h1>Loading...</h1>;
//     }
//     else if(error){
//         return <h1>Error:{error}</h1>
//     }
//     else{
//         return(
//             <div>
//                 <h1>user data</h1>
//                 <button onClick={getdata}>ClickMe</button>
//                 {loading? <h1>loading...</h1>:null}
//                 {error?<h1>error:{error}</h1>:null}
//                 {value.map(user)=>(
//                     <div>
//                         <p>Id:{user.id}</p>
//                         <p>first_name:{user.first_name}</p>
//                         <p>last_name:{user.last_name}</p>
//                         <p>email:{user.email}</p>
//                         <p>Photo:{user.avatar}</p>
//                     </div>
//                 )}
//             </div>
//         )
//     }

// }
import React ,{useState} from 'react';

const Signin = () =>{
    const [form,setform] = useState({
      name : '',
      email : '',
      phone : '',
      age : ''

    })

    const formFunction = (event) =>{
        const {name,value} = event.target;
        setform((form) => ({...form,[name]:value}))
    }
    const handlesubmit = () =>{
        console.log(form);

    }
    return(
        <div>
            <form onClick={handlesubmit}>
                <label>
                    Name:
                    <input type = 'text' name='name' value={form.name} onChange={formFunction}/>
                </label>
                <label>
                    Email:
                    <input type = 'email' name='email' value={form.email} onChange={formFunction}/>
                </label>
                <label>
                    Phone:
                    <input type= 'tel' name='phone' value={form.phone} onChange={formFunction}/>
                </label>
                <label>
                    Age:
                    <input type='number' name='age' value={form.age} onChange={formFunction}/>
                </label>
                <button type='button'>Submit</button>
            </form>
        </div>
    )
}
export default Signin;
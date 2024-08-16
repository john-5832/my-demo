import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Apps from './Saample';
// import Getmethod from './Url';
import PostDataComponent from './Inputurl';
import FormRegistration from './Inputurl';
import Postmethod from './Inputurl';


function App(){
  return (
    <div className="App">
      <header className="App-header">
        {/* <Apps/> */}
        {/* <Getmethod/> */}
        {/* <FormRegistration/> */}
        <Postmethod/>
      </header>
    </div>
  );
}

export default App;

// using the prop to show the output on the screen
// function App() {
//   const handleFormData = (data) => {
//     console.log('Received form data:', data);
//     const formDataElement = document.getElementById('form-data');
//     formDataElement.innerHTML = `
//       <h2>Form Data:</h2>
//       <p>Name: ${data.name}</p>
//       <p>Username: ${data.username}</p>
//       <p>Email: ${data.email}</p>
//       <p>Phone Number: ${data.number}</p>
//       <p>Password: ${data.password}</p>
//       <p>Confirm Password: ${data.cpassword}</p>
//       <p>Gender: ${data.gender}</p>
//       <p>Terms and Conditions: ${data.terms}</p>
//     `;
//   };

//   return (
//     <div>
//       <RegisterForm onSubmit={handleFormData} />
//       <div id="form-data"style={{color:"red"}}></div>
//     </div>
//   );
// }

// export default App;
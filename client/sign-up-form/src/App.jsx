import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'


// function App() {
//   const [name, setName] = useState()
//   const [email, setEmail] = useState()
//   const [password, setPassword] = useState()
//   const handleSubmit = (e) => {
//     e.preventDefault(); //It is used to cancel the default 
//     //action that belongs to an event if it is cancelable.This means that 
//     //the default behavior that the browser would normally execute 
//     //in response to the event will not occur.
//     axios.post('http://127.0.0.1:3001/register', {name, email, password})
//     .then((result) => {
//       console.log(result);
      
//     }).catch((err) => {
//       console.log(err);
      
//     });
    
    
//   }
  
  

//   return (
//     <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
//       <div className='bg-white p-3 rounded w-25'>
//         <h2>Register</h2>
//         <form onSubmit={handleSubmit}>
//           <div className='mb-3'>
//             <label htmlFor="email">
//               <strong>Name</strong>
//             </label>
//             <input 
//             type="text"
//             placeholder='Enter Name'
//             autoComplete='off'
//             name='email'
//             className='form-control rounded-0'
//             onChange={(e) => setName(e.target.value)}
//              />
//           </div>
//           <div className='mb-3'>
//             <label htmlFor="email">
//               <strong>Email</strong>
//             </label>
//             <input 
//             type="email"
//             placeholder='Enter Email'
//             autoComplete='off'
//             name='email'
//             className='form-control rounded-0'
//             onChange={(e) => setEmail(e.target.value)}
//              />
//           </div>
//           <div className='mb-3'>
//             <label htmlFor="email">
//               <strong>Password</strong>
//             </label>
//             <input 
//             type="password"
//             placeholder='Enter Password'
//             autoComplete='off'
//             name='email'
//             className='form-control rounded-0'
//             onChange={(e) => setPassword(e.target.value)}
//              />
//           </div>
//           <button type='submit' className='btn btn-success w-100 rounded-0'>
//             Register
//           </button>
//           <p>Already have an account ?</p>
//           <button className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
//             Login
//           </button>
//         </form>
        
//       </div>
//     </div>
//   )
// }

// export default App

/************************************** */



function App() {
  const [isRegistering, setIsRegistering] = useState(true); // Toggle between Register and Login
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle Register Submission
  const handleRegisterSubmit = (e) => {
    // e.preventDefault();
    axios.post('http://127.0.0.1:3001/register', { name, email, password })
      .then((result) => {
        console.log(result.data);
        alert(result.data); // Show response message
      })
      .catch((err) => {
        console.error(err);
        alert('Registration failed');
      });
  };

  // Handle Login Submission
  const handleLoginSubmit = (e) => {
    // e.preventDefault();
    axios.post('http://127.0.0.1:3001/login', { email, password })
      .then((result) => {
        console.log(result.data);
        alert(result.data); // Show response message
      })
      .catch((err) => {
        console.error(err);
        alert('Login failed');
      });
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>{isRegistering ? 'Register' : 'Login'}</h2>
        <form onSubmit={isRegistering ? handleRegisterSubmit : handleLoginSubmit}>
          {isRegistering && (
            <div className='mb-3'>
              <label htmlFor="name">
                <strong>Name</strong>
              </label>
              <input
                type="text"
                placeholder='Enter Name'
                autoComplete='off'
                className='form-control rounded-0'
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          <div className='mb-3'>
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder='Enter Email'
              autoComplete='off'
              className='form-control rounded-0'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder='Enter Password'
              autoComplete='off'
              className='form-control rounded-0'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'>
            {isRegistering ? 'Register' : 'Login'}
          </button>
          <p>
            {isRegistering ? 'Already have an account?' : "Don't have an account?"}
          </p>
          <button
            type='button'
            className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'
            onClick={() => setIsRegistering(!isRegistering)}
          >
            {isRegistering ? 'Login' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;


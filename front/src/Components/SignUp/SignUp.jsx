

import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../Firebase/FirebaseAuth';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message,setMessage] = useState('')
  const [users, setUsers] = useState('')
  const [createUserWithEmailAndPassword, user, error, loading] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
  // console.log(user)
  const handleSignUp = () => {
    if (!email || !password || !users || !message) {
      showMessage('Please enter both email and password  userName and  text.');
      return;
    }

    showMessage('Loading...');

    createUserWithEmailAndPassword(email, password,message,users)
      .then((userCredential) => {
        // Handle successful signup
        const user = userCredential.user;
        showMessage('Login successful');
      })
      .catch((error) => {
        // Handle signup error
        showMessage(error.message);
      });
  };

  const showMessage = (message) => {
    const messageDiv = document.querySelector('#messageDiv');
    if (messageDiv) {
      messageDiv.innerHTML = message;
    }
  };
  
  const handleReset = () => {
    setEmail('');
    setPassword('');
    setMessage('');
    setUsers('');
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center mt-12 md:h-screen md:mt-12">
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
        <form>
      
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">
              UserName
             </label>
              <input
               value={users}
               onChange={(e) => setUsers(e.target.value)}
              type="name"
              id="username"
              name="username"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
             value={password}
             onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>

          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
            Your message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your message..."
          ></textarea>

        <NavLink to={'/login'}>
        <div className="mt-6 text-blue-500">
           <a href="#" className="hover:underline">
             Login Here
          </a>
         </div>
        </NavLink>

       
          <div id='messageDiv'></div>
          <div className="flex gap-5 mt-5">
            <button onClick={handleSignUp} type="button" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">
              Sign Up
            </button>
            <button onClick={handleReset} type="reset" className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md py-2 px-4 w-full">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

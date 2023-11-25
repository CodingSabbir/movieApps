



import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../Firebase/FirebaseAuth';
 import { AiFillFacebook } from 'react-icons/ai';
import Facebook from '../Facebook/Facebook';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const handleSignIn = () => {
    if (!email || !password) {
      showMessage('Please enter both email and password.');
      return;
    }

    showMessage('Loading...');

    signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Handle successful login
        const user = userCredential.user;
        showMessage('Login successful');
      })
      .catch((error) => {
        // Handle login error
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
   
  };

  return (
    <div className=" bg-black min-h-screen flex flex-col items-center justify-center px-3 md:mx-0 py-4 md:py-0">
      <div className="mt-20 border-2 flex flex-col  shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
        <div className="font-medium self-center text-xl sm:text-2xl uppercase text-white">
          Login To Your Account
        </div>

       

        <Facebook/>
       
        <div className="relative mt-10 h-px bg-gray-300">
          <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
            <span className=" px-4 bg-white text-xs text-black uppercase rounded-full">
              Or Login With Email
            </span>
          </div>
        </div>
        <div className="mt-10">
          <form>
            <div className="flex flex-col mb-6">
              <label
                htmlFor="email"
                className="mb-1 text-xs sm:text-sm tracking-wide text-white"
              >
                E-Mail Address:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  type="email"
                  name="email"
                  className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="E-Mail Address"
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <label
                htmlFor="password"
                className="mb-1 text-xs sm:text-sm tracking-wide text-white"
              >
                Password:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </div>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  type="password"
                  name="password"
                  className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Password"
                />
              </div>
            </div>

            <div id="messageDiv"></div>

            <div className="flex w-full gap-5">
              <button
                onClick={handleSignIn}
                type="button"
                className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
              >
                <span className="mr-2 uppercase">Login</span>
                <span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </button>
              <button
              onClick={handleReset}
                type="reset"
                className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-red-600 hover:bg-red-700 rounded py-2 w-full transition duration-150 ease-in"
              >
                <span className="mr-2 uppercase">RESET</span>
              </button>
            </div>
          </form>
        </div>
        <div className="text-center mt-3">
          <span className="text-xs text-gray-400 font-semibold">
            Don't have an account?
          </span>
          <NavLink to="/signUp" className="text-xs font-semibold text-purple-700">
            Sign up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;













// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import auth from '../Firebase/FirebaseAuth'; // Make sure this import is properly set up

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
//   const [message, setMessage] = useState('');

//   const handleSignIn = () => {
//     if (!email || !password) {
//       setMessage('Please enter both email and password.');
//       return;
//     }

//     setMessage('Loading...');

//     signInWithEmailAndPassword(email, password)
//       .then(() => {
//         // Handle successful login
//         setMessage('Sign in successful');
//       })
//       .catch((error) => {
//         // Handle login error
//         setMessage(error.message);
//       });
//   };

//   return (
//     <div>
//       <link rel="stylesheet" href="https://kit-pro.fontawesome.com/releases/v5.15.1/css/pro.min.css" />

//       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
//         <div className="mt-20 border-2 flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
//           <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">Login To Your Account</div>
//           <button className="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
//             <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500"><i className="fab fa-facebook-f"></i></span>
//             <span>Login with Facebook</span>
//           </button>
//           <div className="relative mt-10 h-px bg-gray-300">
//             <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
//               <span className="bg-white px-4 text-xs text-gray-500 uppercase">Or Login With Email</span>
//             </div>
//           </div>
//           <div className="mt-10">
//             <form>
//               <div className="flex flex-col mb-6">
//                 <label htmlFor="email" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">E-Mail Address:</label>
//                 <div className="relative">
//                   <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
//                     <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
//                       <path d="M12 15v2m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
//                     </svg>
//                   </div>
//                   <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="email" name="email" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="E-Mail Address" />
//                 </div>
//               </div>
//               <div className="flex flex-col mb-6">
//                 <label htmlFor="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password:</label>
//                 <div className="relative">
//                   <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
//                     <span>
//                       <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
//                         <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
//                       </svg>
//                     </span>
//                   </div>
//                   <input value={password} onChange={(e) => setPassword(e.target.value)} id="password" type="password" name="password" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Password" />
//                 </div>
//               </div>
//               <div className={`messageDiv ${message.includes('error') ? 'text-red-500' : 'text-green-500'} text-sm`}>{message}</div>
//               <div className="flex w-full gap-5">
//                 <button onClick={handleSignIn} type="button" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
//                   <span className="mr-2 uppercase">Login</span>
//                   <span>
//                     <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
//                       <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                   </span>
//                 </button>
//                 <button type="reset" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-red-600 hover:bg-red-700 rounded py-2 w-full transition duration-150 ease-in">
//                   <span className="mr-2 uppercase">RESET</span>
//                 </button>
//               </div>
//             </form>
//           </div>
//           <div className="text-center mt-3">
//             <span className="text-xs text-gray-400 font-semibold">Don't have an account?</span>
//             <NavLink to="/signUp" className="text-xs font-semibold text-purple-700">
//               Sign up
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

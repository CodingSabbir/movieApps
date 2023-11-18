import React from 'react';
import { ImFacebook2 } from "react-icons/im";
import { useSignInWithFacebook  } from 'react-firebase-hooks/auth';
import auth from '../Firebase/FirebaseAuth';


const Facebook = () => {
    const [signInWithFacebook, user, loading, error] = useSignInWithFacebook(auth);
    console.log(user)
    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }
      if (user) {
        return (
          <div className='text-center my-2 font-mono'>
            <p>User Login in success</p>
          </div>
        );
      }
    return (
        <div className='mt-10'>
            <div className=' border-2 p-1 rounded-md text-center flex justify-center items-center gap-10 border-black'>
            <div><ImFacebook2/></div>
            <button onClick={()=>signInWithFacebook()} type='submit'> Continue With Facebook  </button>
            </div>
        </div>
    );
};

export default Facebook;
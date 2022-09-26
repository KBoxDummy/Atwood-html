import React from 'react'
import { auth, provider} from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import{ useNavigate } from 'react-router-dom';

const Login = () => {



  const navigate = useNavigate();

  
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate('/landingpage');
  }

  return (
    <div className='navbar'>
      <p>Sign In With Google</p>
      <button className='button-1' onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  )
 

}

export default Login



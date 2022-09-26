import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css'

const Home = () => {

  let navigate = useNavigate();
  return (
    <>
        <div className='navbar'>
          <h2 className='title'>Atwood Outdoors</h2>
          <button className="button-1" onClick={() => {
            navigate("/login")
          }}>
          Log In
          </button>
        </div>
        
    </>
  )
}

export default Home
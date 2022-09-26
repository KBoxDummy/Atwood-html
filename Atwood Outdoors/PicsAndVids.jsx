import React from 'react'
import { useNavigate } from 'react-router-dom';
import './PicsAndVids.css'

const PicsAndVids = () => {

  let navigate = useNavigate();
  return (
    <>
      <div className='navbar'>
       <h2 className='title'>Atwood Outdoors</h2>
       <h4 className='title-1'>Pics And Vids</h4>
              <div className='dropdown'>
                <h2
                className='links'></h2>
                <div className='dropdown-content'>
                <div className='button-1'>

                <button onClick={() => {
                          navigate("/landingpage")
                        }}>
                        Home
                        </button>

                        <div><a href='/CoolStuff'>Cool Stuff</a></div>
                        
                          <div><a href='/Skills'>Skills</a></div>
                        
                          <div><a href='/InYourBag'>In Your Bag</a></div>

                          <div><a href='/YouTube'>My You Tube</a></div>

                          <div><a href='/Contact'>Contact</a></div>
                        
                   </div>      
                </div>  
              </div>
              </div>
  </>
  )
}

export default PicsAndVids
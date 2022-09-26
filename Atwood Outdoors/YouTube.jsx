import React from 'react'
import './YouTube.css'
import { useNavigate } from 'react-router-dom';



const YouTube = () => {

  let navigate = useNavigate();

  return (

    <>
    <div className='navbar'>
    <h2 className='title'>Atwood Outdoors</h2>
    <h4 className='title-1'>You Tube</h4>
           <div className='dropdown'>
             <h2
             className='links'></h2>
             <div className='dropdown-content'>
             <div div className='button-1'>

             <button onClick={() => {
                          navigate("/landingpage")
                        }}>
                        Home
                        </button>

                        <div><a href='/CoolStuff'>Cool Stuff</a></div>
                        
                          <div><a href='/Skills'>Skills</a></div>
                        
                          <div><a href='/PicsAndVids'>Pics And Vids</a></div>

                          <div className='youtube'><a href=' https://www.youtube.com/channel/UCqP0SgjHnloAAZBQ571bk3A'>My You Tube</a></div>

                          <div><a href='/Contact'>Contact</a></div>
                      
                  </div>   
                </div>      
             </div>  
           </div>
           
    </>
    
    
  )
}

export default YouTube



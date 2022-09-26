import React from 'react'
import { useNavigate } from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {
  



  let navigate = useNavigate();
  return (
    
      <div className='main'>
        <div className='navbar'>
              <h2 className='title'>Atwood Outdoors</h2>
              <h4 className='title-1'>Home</h4>
          <div className='dropdown'>
                  <h2
                  className='links'>
                  </h2>
            <div className='dropdown-content'>
              <div className='button-1'>
                          <div><a href='/CoolStuff'>Cool Stuff</a></div>
                        
                          <div><a href='/Skills'>Skills</a></div>
                        
                          <div><a href='/InYourBag'>In Your Bag</a></div>
                        
                          <div><a href='/PicsAndVids'>Pics And Vids</a></div>

                          <div><a href='/YouTube'>My You Tube</a></div>

                          <div><a href='/Contact'>Contact</a></div>

              </div>  
            </div>      
          </div>
          <div className='img-1'>
          <img src='pic1.jpg'
          />
        </div>   
        </div>
      </div>
        

           
    
  )
}

export default NavBar




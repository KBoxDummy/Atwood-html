import React from 'react'
import{ useNavigate } from 'react-router-dom';
import './References.css'

const References = () => {

    let navigate = useNavigate();
  return (
    <div className='navbar'>
    <h2 className='title'>Atwood Outdoors</h2>
    <h4 className='title-1'>References</h4>
           <div className='dropdown'>
             <h4
             className='links'></h4>
             <div className='dropdown-content'>
             <div className='button-1'>

                       <button 
                       className='button-style'
                       onClick={() => {
                         navigate("/landingpage")
                       }}>
                       Home
                       </button>

                       <button 
                       className='button-style'
                       onClick={() => {
                         navigate("/coolstuff")
                       }}>
                       Cool Stuff
                       </button>
                     
                       <button 
                       className='button-style'
                       onClick={() => {
                         navigate("/skills")
                       }}>
                       Skills
                       </button>
                     
                       <button 
                       className='button-style'
                       onClick={() => {
                       navigate("/inyourbag")
                       }}>
                       In Your Bag
                       </button>
                     
                       <button 
                       className='button-style'
                       onClick={() => {
                         navigate("/picsandvids")
                       }}>
                       Pics And Vids
                       </button>
                     
                       <button 
                       className='button-style'
                       onClick={() => {
                         navigate('/youtube')
                       }}>
                         You Tube
                       </button>
                     
                </div>      
             </div>  
           </div>
           </div>
  )
}

export default References
import React from 'react'
import './Tools.css'
import { useNavigate } from 'react-router-dom';


const Tools = () => {

    let navigate = useNavigate();
  return (
    <div>
        <div className='navbar'>
    <h1 className='title'>Atwood Outdoors</h1>
    <h4 className='title-1'>Tools</h4>
           <div className='dropdown'>
             <h2
             className='links'></h2>
             <div className='dropdown-content'>


                <div><a href="/Knives">Knives</a></div>

                <div><a href="/Firestarters">FireStarters</a></div>
                
                <div><a href="StuffYoullNeed">Stuff You'll Nedd</a></div>

                <div><a href="/CoolStuff">Cool Stuff</a></div>

                  </div>
                </div>
        </div>
    </div>
  )
}

export default Tools
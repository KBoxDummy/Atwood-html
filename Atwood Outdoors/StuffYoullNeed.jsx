import React from 'react'
import './StuffYoullNeed.css'
import { useNavigate } from 'react-router-dom';


const StuffYoullNeed = () => {

    let navigate = useNavigate();
  return (
    <div>
        <div className='navbar'>
    <h1 className='title'>Atwood Outdoors</h1>
    <h4 className='title-1'>Stuff you'll need</h4>
           <div className='dropdown'>
             <h2
             className='links'></h2>
             <div className='dropdown-content'>


                <div><a href="/Shelter">Shelter</a></div>

                <div><a href="/Tools">Tools</a></div>

                <div><a href='/Cookware'>Cookware</a></div>

                <div><a href='/Cordage'>Cordage</a></div>

                <div><a href="/Hydration">Hydration</a></div>

                <div><a href="/Gear">Gear</a></div>

                <div><a href="/MedKit">Med Kit</a></div>

                <div><a href="/CoolStuff">Cool Stuff</a></div>


              </div>
            </div>
        </div>
    </div>
  )
}

export default StuffYoullNeed
import React from 'react';
import "./PortFolio.css";
const PortFolio = () => {
  return (
    <div className="Maindiv">
      <div className='Navbar'>
        <div className='button'>
      <button className='btn'>About</button> 
      <button className='btn'>Projects</button> 
      <button className='btn'>contact</button> 
      <button className='btn'>Links</button>
      </div>
      </div>
      
      <div className='Contact'>
        <div><div className='Name'>Hey, I'm Haroon<p className='para'>A Computer Engineer creating mobile apps and static websites.</p></div>
        </div>
        <div></div>
        <div className='Picture'></div>
      </div>
    
    </div>
  )
}

export default PortFolio;
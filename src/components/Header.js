import React from 'react'
import {Link}from 'react-router-dom'

function Header(){
    return(
    <header className="style">
    <nav>
        <ul> <li><Link to='/'>Home</Link></li></ul>
    </nav>
    <div>
     <p>PETS</p>
    </div>
    <div>
      <p>HOW TO HELP</p>
    </div>
    <div>
      <p>OUR SERVICES</p>
    </div>
    <div>
      <p>ABOUT</p>
    </div>
    <div>
      <p> OUR SERVICES</p>
    </div>
    {/* <div className="password"> */}
    {/* <input type="password" placeholder="Donate"/> */}
    {/* </div> */}
    
   </header>
   
            
        
    )
}

export default Header;
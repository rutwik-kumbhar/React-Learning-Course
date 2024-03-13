import React from 'react'

const Navbar = () => {
  return (
   <div>
        <nav className='container'>
            <div>
                <img src="/public/images/brand_logo.png" alt="logo" />
            </div>

            <ul>
                <li>MENU</li>
                <li>LOCATION</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
            <button>Login</button>
        </nav>

    </div>

    
  )
}

export default Navbar;
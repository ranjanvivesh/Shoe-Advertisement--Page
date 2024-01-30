import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav className='navigation-container'>
            <div className='logo'>
                <img src='./public/images/brand_logo.png' alt='logo'></img>
            </div>

            <ul>
                <li href = "#">MENU</li>
                <li href = "#">LOCATION</li>
                <li href = "#">ABOUT</li>
                <li href = "#">CONTACT</li>
            </ul>
            <button className='login-btn'>LOG IN</button>
 
        </nav>
    </div>
  )
}

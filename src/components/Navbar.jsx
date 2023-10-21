import React from 'react'
import logo from './assets/img/Logo.png'

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='navbar-content'>
                    <a href="#">
                        <img src={logo} />
                    </a>
                    <ul className='navbar-menu'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><button className='navbar-btn'>Contact us</button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

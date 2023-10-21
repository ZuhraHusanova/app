import React from 'react';
import hero from './assets/img/Illustration.svg';
import right from './assets/img/Arrow 1.png'

export default function Header() {
    return (
        <div className='header'>
            <div className='container'>
                <div className='header-row'>
                    <div className='header-col'>
                        <h2 className='header-title'>Building stellar websites for early startups</h2>
                        <p className='header-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <div className='header-mel'>
                            <button className='header-btn'>View our work</button>
                            <span className='header-link'>View Pricing</span>
                            <img src={right} alt="" />
                        </div>
                    </div>
                    <div className='header-right'>
                        <img src={hero} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

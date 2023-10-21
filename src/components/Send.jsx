import React from 'react'
import tak from './assets/img/Arrow 1.png'

export default function Send() {
    return (
        <div className='container'>
            <div className='send'>
                <div className='send-left'>
                    <div className='send-back'>
                        <h2 className='send-title'>Building stellar websites for early startups</h2>
                        <p className='send-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                    </div>
                </div>
                <div className='send-right'>
                    <h4 className='send-subtitle'>Send inquiry</h4>
                    <p className='send-subtext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <input type="text" placeholder='Your Name' />
                    <input type="text" placeholder='Email' />
                    <input type="text" placeholder='Paste your Figma design URL' />
                    <button className='send-btn'>Send an Inquiry</button>
                    <div className='send-link'>
                        <a href="#" >
                            <span>Get in touch with us</span>
                            <img src={tak} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

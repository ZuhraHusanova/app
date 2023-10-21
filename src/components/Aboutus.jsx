import React from 'react'
import photo from './assets/img/woman.png'
import btn from './assets/img/right-btn.png'

export default function Aboutus() {
    return (
        <div className='about'>
            <div className='container'>
                <div className='about-row'>
                    <div>
                        <h5 className='about-title'>What our clients say about us</h5>
                        <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>

                    </div>
                    <div className='about-side'>
                        <h4 className='about-item'>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h4>
                        <div className='about-front'>
                            <div className='about-info'>
                                <img src={photo} alt="" />
                                <div>
                                    <p className='about-name'>Jenny Wilson</p>
                                    <p className='about-job'>Vice President</p>
                                </div>
                            </div>
                            <div>
                                <img src={btn} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

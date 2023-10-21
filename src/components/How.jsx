import React from 'react'
import right from './assets/img/Arrow 2.png'
import one from './assets/img/pointer 1.svg'
import two from './assets/img/pointer 2.png'
import three from './assets/img/pointer 3.png'
import four from './assets/img/pointer 4.png'

export default function How() {
    return (
        <div className='how'>
            <div className='container'>
                <div className='how-row'>
                    <div>
                        <h1 className='how-title'>How we work</h1>
                        <p className='how-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <a href="" className='how-in'>
                            <p>Get in touch with us</p>
                            <img src={right} />
                        </a>
                    </div>
                    <div>
                        <div className='work'>
                            <div className='work-col'>
                                <img src={one} alt="" />
                                <h3 className='work-title'>Strategy</h3>
                                <p className='work-text'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </div>
                            <div className='work-col'>
                                <img src={two} alt="" />
                                <h3 className='work-title'>Wireframing</h3>
                                <p className='work-text'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </div>
                        </div>
                        <div className='work-row'>
                            <div className='work-col'>
                                <img src={three} alt="" />
                                <h3 className='work-title'>Design</h3>
                                <p className='work-text'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </div>
                            <div className='work-col'>
                                <img src={four} alt="" />
                                <h3 className='work-title'>Development</h3>
                                <p className='work-text'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

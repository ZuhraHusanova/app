import React from 'react'

import bir from './assets/img/Icon1.png'
import ikki from './assets/img/Icon2.png'
import uch from './assets/img/Icon3.png'
import turt from './assets/img/Icon4.png'
import besh from './assets/img/Icon5.png'
import olti from './assets/img/Icon6.png'

export default function Design() {
    return (
        <div className='design'>
            <div className='container'>
                <p className='design-item'>Features</p>
                <h1 className='design-title'>Design that solves problems, one product at a time</h1>
                <div>
                    <div className='design-col'>
                        <div className='design-card'>
                            <img src={bir} alt="" />
                            <h6 className='card-title'>Uses Client First</h6>
                            <p className='card-text'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                        <div className='design-card'>
                            <img src={ikki} alt="" />
                            <h6 className='card-title'>Two Free Revision Round</h6>
                            <p className='card-text'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                        <div className='design-card'>
                            <img src={uch} alt="" />
                            <h6 className='card-title'>Template Customization</h6>
                            <p className='card-text'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                    </div>
                    <div className='design-col'>
                        <div className='design-card'>
                            <img src={turt} alt="" />
                            <h6 className='card-title'>24/7 Support</h6>
                            <p className='card-text'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                        <div className='design-card'>
                            <img src={besh} alt="" />
                            <h6 className='card-title'>Quick Delivery</h6>
                            <p className='card-text'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                        <div className='design-card'>
                            <img src={olti} alt="" />
                            <h6 className='card-title'>Hands-on approach</h6>
                            <p className='card-text'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

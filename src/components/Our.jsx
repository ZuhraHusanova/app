import React from 'react'
import nayza from './assets/img/Arrow 3.png'
import first from './assets/img/img1.png'
import second from './assets/img/img2.png'
import third from './assets/img/img3.png'



export default function Our() {
    return (
        <div className='our'>
            <div className='container'>
                <h1 className='our-title'>Our blog</h1>
                <div className='our-row'>
                    <div className='our-card'>
                        <img src={first} />
                        <p className='our-date'>19 Jan 2022</p>
                        <p className='our-text'>How one Webflow user grew his single person consultancy from $0-100K in 14 months</p>
                        <p className='our-news'>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                        <a href="#" className='our-link'>
                            <span>Read More</span>
                            <img src={nayza} alt="" />
                        </a>
                    </div>
                    <div className='our-card'>
                        <img src={second} />
                        <p className='our-date'>19 Jan 2022</p>
                        <p className='our-text'>How one Webflow user grew his single person consultancy from $0-100K in 14 months</p>
                        <p className='our-news'>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                        <a href="#" className='our-link'>
                            <span>Read More</span>
                            <img src={nayza} alt="" />
                        </a>
                    </div>
                    <div className='our-card'>
                        <img src={third} />
                        <p className='our-date'>19 Jan 2022</p>
                        <p className='our-text'>How one Webflow user grew his single person consultancy from $0-100K in 14 months</p>
                        <p className='our-news'>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                        <a href="#" className='our-link'>
                            <span>Read More</span>
                            <img src={nayza} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

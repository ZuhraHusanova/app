import React from 'react'
import logo from './assets/img/Logo2.png'
import twit from './assets/img/twit.png'
import insta from './assets/img/inst.png'
import face from './assets/img/face.png'
import ln from './assets/img/ln.png'

export default function Belov() {
  return (
    <div className='belov'>
      <div className='container'>
        <div className='belov-row'>
          <div className='belov-left'>
            <a href="#">
              <img src={logo} alt="" />
            </a>
            <p className='belov-text'>We are always open to discuss your project and improve your online presence.</p>
          </div>
          <div className='belov-right'>
            <h2 className='belov-title'>Lets Talk!</h2>
            <p className='belov-info'>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
            <div className='massengers'>
              <img src={face} />
              <img src={twit} />
              <img src={insta} />
              <img src={ln} />
            </div>
          </div>
        </div>

        <div className='sariq'>
          <div>
            <h6 className='sariq-nom'>Email me at</h6>
            <p className='sariq-xat'>contact@website.com</p>
          </div>
          <div>
            <h6 className='sariq-nom'>Call us</h6>
            <p className='sariq-xat'>0927 6277 28525</p>
          </div>
        </div>
      </div>
    </div>
  )
}


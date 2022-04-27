import React from "react";
import './Footer.css'
import imgUrl from './webring.png'

function Footer() {
  return (
    <div className='footer'>
      © 2022 Damian Reiter | contact: damian.reiter@gmail.com | FBFA 1209 6A29 481C <a href='https://se-webring.xyz/' target='_blank'><img src={imgUrl} /></a>
    </div>
  )
}

export default Footer;

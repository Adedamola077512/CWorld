// import React from 'react'
import './Header.css'
import yellow from '../assets/yellow.png'
import { FaHeart } from "react-icons/fa";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
    useEffect(() => {
        AOS.init({
          duration: 2000,
          once: true, 
        });
      }, []);
  return (
    <div className='py-3 into'>
        <div className='container d-flex justify-content-between mt-3 py-5 Digital'>
            <div>
                <h3 className='launch' data-aos="fade-right">Launch Into Digital <br />Excellence</h3>
                <p className='team' data-aos="fade-up">With a team of skilled professionals, we combine creativity, <br />strategy, and technology to help your business thrive in a <br />dynamic digital world </p>
                <button className='Get-start'>Get Started</button>
                <div className='social'>
                    <h5><b>4.234</b> <FaHeart /></h5>
                    <p><b>Project View <br />Last Year</b></p>
                </div>
            </div>
            <div data-aos="fade-left">
                <div className='div1' >
                   <div className='man'></div>
                   <img src={yellow} alt="" className='img1' />
                </div>
                <div className='div2'>
                    <p className='ms-1 mt-2'><b>27/7 </b><br /><span className='we-are-in'><b>We are in <br /> touch</b></span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
import React from 'react'
import './Clients.css'
import { BiSolidQuoteLeft } from "react-icons/bi";

// Import local images
import man4 from "../assets/man4.png";
import man5 from "../assets/man5.png";
import man6 from "../assets/man6.png";
const Clients = () => {
  return (
    <div className='Clients'>
      <div className="container">
        <div>
          <h1 className='clients-h1'>Hear from Our Clients</h1>
          <p className='client-per'>At Cworld, Our strength lies in the passion and expertise of our team. We’re a <br /> group of innovative thinkers, design enthusiasts, and problem.</p>
        </div>
        <div className='card-clients'>
          <div className='card-clients-1'>
            <span className='BiSolidQuoteLeft'><BiSolidQuoteLeft /></span>
            <p className='clients-text'>Cworld transformed our <br />website into modern, user- <br />friendly platform. Their <br />attention to detail <br /> and creative approach exceeded <br />our expectations</p>
            <div className='clients-flex'>
              <img src={man4} alt="" className='img4'/>
              <h6>
                <b>Sophia Martin</b> <br />
                <p>Managinig Director</p>
              </h6>
            </div>
          </div>
          <div className='card-clients-1'>
            <span className='BiSolidQuoteLeft'><BiSolidQuoteLeft /></span>
            <p>Cworld transformed our <br /> website into modern, user- <br />friendly platform. Their <br />attention to detail <br />and creative approach exceeded <br />our expectations</p>
            <div className='clients-flex'>
              <img src={man5} alt="" className='img4'/>
              <h6>
                <b>Micheal Lee</b> <br />
                <span>Managinig Director</span>
              </h6>
            </div>
          </div>
          <div className='card-clients-1'>
            <span className='BiSolidQuoteLeft'><BiSolidQuoteLeft /></span>
            <p  className='clients-text'>Cworld transformed our <br />website into modern, user- <br />friendly platform. Their <br />attention to detail <br />and creative approach exceeded <br />our expectations</p>
            <div className='clients-flex'>
              <img src={man6} alt="" className='img4' />
              <h6>
                <b>Emily johnson</b> <br />
                <span> Managinig Director</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clients
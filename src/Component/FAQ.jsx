import React from 'react'
import './FAQ.css';
import { FaArrowCircleDown } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";
const FAQ = () => {
  return (
    <div className='container mt-5'>
        <div className='FAQ-flex'>
            <div>
                <h1 className='FAQ'>FAQ</h1>
                <p className='FAQ-content'>At Cworld, Our strength lies in the <br /> passion and expertise of our team. <br />We’re a group of innovative thinkers, <br />design enthusiasts, and problem.</p>
                <button className='FAQ-bnt'><b>Ask a Question</b></button>
            </div>
            <div>
                <div className='FAQ-service'>
                    <h6>What service does CWorld offer?</h6>
                    <span><FaArrowCircleDown className='down' /></span>
                </div><br />
                <div className='FAQ-work'>
                  <div>
                    <h6>Do you work with international clients?</h6>
                    <p className='Absolutly'>Absolutly! CWorld collaborations with clients globally, providing digital design solution regardless of location</p>
                  </div>
                  <span><FaArrowCircleUp className='FaArrowCircleUp'/></span>
                </div><br />
                <div className='FAQ-service'>
                    <h6>What is the typical project timeline?</h6>
                    <span><FaArrowCircleDown className='down' /></span>
                </div><br />
                <div className='FAQ-service'>
                    <h6>How do i start a project with CWorld?</h6>
                    <span><FaArrowCircleDown className='down' /></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FAQ
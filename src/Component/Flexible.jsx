import React from 'react'
import './Flexible.css'
import { FaArrowCircleRight } from "react-icons/fa";
const Flexible = () => {
  return (
    <div className='flexible-color'>
        <div className='container mt-5'>
            <div className='text-center'>
                <h1 className='flexible'>Flexible Pricing for Every Need</h1>
                <p className='flexible-per'>At Cworld, Our strength lies in the passion and expertise of our team. We’re a group <br />of innovative thinkers, design enthusiasts, and problem.</p>
            </div>
            <div className='flexible-flex mt-5'>
                <div className="flexible-own">
                    <div className='text-center'>
                      <h5><b>For Own</b></h5>
                      <h1><b>$999</b></h1>
                    </div>
                    <p><FaArrowCircleRight /> <b>UI/UX Design for up to 3 pages</b></p>
                    <p><FaArrowCircleRight /> <b>Basic Website Designs</b></p>
                    <p><FaArrowCircleRight /> <b>1 Revision</b></p>
                    <p><FaArrowCircleRight /> <b>Feedback Loop Notification</b></p>
                    <p><FaArrowCircleRight /> <b>Essential Dev Loops</b></p>
                    <button className='flexible-bnt'><b>Purchase Now</b></button>
                </div>
                <div className='flexible-own'>
                    <div className='text-center'>
                      <h5><b>For Team</b></h5>
                      <h1><b>$2999</b></h1> 
                    </div>
                    <p><FaArrowCircleRight /> <b>UI/UX Design for up to 3 pages</b></p>
                    <p><FaArrowCircleRight /> <b>Basic Website Designs</b></p>
                    <p><FaArrowCircleRight /> <b>1 Revision</b></p>
                    <p><FaArrowCircleRight /> <b>Feedback Loop Notification</b></p>
                    <p><FaArrowCircleRight /> <b>Essential Dev Loops</b></p>
                    <button className='flexible-bnt'><b>Purchase Now</b></button>
                </div>
                <div className='flexible-own'>
                    <div className='text-center'>
                      <h5><b>For Company</b></h5>
                      <h1><b>$3999</b></h1>
                    </div>
                    <p><FaArrowCircleRight /> <b>UI/UX Design for up to 3 pages</b></p>
                    <p><FaArrowCircleRight /> <b>Basic Website Designs</b></p>
                    <p><FaArrowCircleRight /> <b>1 Revision</b></p>
                    <p><FaArrowCircleRight /> <b>Feedback Loop Notification</b></p>
                    <p><FaArrowCircleRight /> <b>Essential Dev Loops</b></p>
                    <button className='flexible-bnt'><b>Purchase Now</b></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Flexible
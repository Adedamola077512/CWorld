import React from 'react'
import clients from '../assets/clients.png'
import './Creativity.css'
const Creativity = () => {
  return (
    <div className="container bg-white py-5 mt-5 ">
        <div className="d-flex justify-content-between mt-5 Meets">
            <div>
                <h1 className='creativity'>Where Creativity Meets</h1>
                <p className='lorem'>Lorem Ipsum is simply dummy text of the printing and <br />typesetting industry. Lorem Ipsum has been the industry's <br />standard dummy text ever since the 1500s, when an unknown <br />printer took a galley of type and scrambled it to make a type <br /> specimen book. It has survived not only five centuries, but also <br />the leap into electronic typesetting, remaining essentially <br />
                unchanged. It was popularised in the 1960s with the release of <br />Letraset sheets containing Lorem Ipsum passages,</p>
                <button className='view'><b>View More</b></button>
            </div>
            <div>
                <div className='Happy'>
                    <h2>Happy Clients</h2>
                    <img src={clients} alt="clients" className='img2'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Creativity
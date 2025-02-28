import React from 'react'
import './Ideas.css'

import vector1 from '../assets/Vector1.png';
import vector2 from '../assets/Vector2.png';
import vector3 from '../assets/Vector3.png';
import vector4 from '../assets/Vector4.png';

const Ideas = () => {
  return (
    <div className='idea-card'>
        <div className='text-center'>
            <h1 className='bring'><b>Bringing Ideas To Life</b></h1>
            <p className='craft'>At Cworld’s we craft designs that inspire, engage, and deliver exceptional <br /> user experiences. Our services are tailored to meet</p>
        </div>
        <div className='container card-ui mt-5'>
            <div className='UIUX'>
                <div> <img src={ vector1} alt="vector1" /> </div>
                <h5><b>UI/UX Design</b></h5>
                <p className='create'>We create intuitive, user- <br />friendly interfaces that <b> enhance user....</b></p>
                <button className='read-more'><b>Read More</b></button>
            </div>
            <div className='UIUX'>
                <div> <img src={ vector2} alt="vector2" /> </div>
                <h5><b>Development</b></h5>
                <p className='create'>We develop high-quality, <br /> cross-platform applications that <b> deliver....</b></p>
                <button className='read-more'><b>Read More</b></button>
            </div>
            <div className='UIUX'>
                <div> <img src={ vector3} alt="vector3" /> </div>
                <h5><b>Graphics Design</b></h5>
                <p className='create'>We create visually stunning, <br /> engaging graphics that <b> inspire....</b></p>
                <button className='read-more'><b>Read More</b></button>
            </div>
            <div className='UIUX'>
                <div> <img src={ vector4} alt="vector4" /> </div>
                <h5><b>Moblie App</b></h5>
                <p className='create'>We create innovative, <br /> cross-platform mobile apps that <b> deliver....</b></p>
                <button className='read-more'><b>Read More</b></button>
            </div>
        </div>
    </div>
  )
}

export default Ideas
import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='Footer-color'>
      <div className='container footer-flex1'>
        <div>
          <h2 className='footer-book'>Book a free consultation now <br />
          to discuss how we can help to <br />
          discover your business idea?</h2>
          <button className='footer-btn'><b>Get Started Today</b></button>
        </div>
        <div>
          <p><b>Address</b></p>
          <span><b>123, Creative Street, Design City, Dc 45678</b></span><br />
          <span><b>Email: info@yourdomain.com</b></span><br />
          <span><b>contact: @cWorlddesigns.com</b> </span>
        </div>
      </div>
      <div className='container footer-flex2'>
        <div>
          <h4 className='footer-cworld'><b><span style={{color: "yellow"}}>C</span>World</b></h4>
          <p className='footer-per'>Designing experience that inspire, <br />engage, and elevate brands</p>
          <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div>
          <h5 className='footer-quick'><b>Quick Links</b></h5>
          <span className='line'><b>Home</b></span><br />
          <span className='line'><b>About Us</b></span><br />
          <span className='line'><b>Service</b></span><br />
          <span className='line'><b>Portfolio</b></span><br />
          <span className='line'><b>Testimonials</b></span>
        </div>
        <div>
          <h5 className='footer-quick'><b>Quick Links</b></h5>
          <span className='line'><b>Policy Update</b></span><br />
          <span className='line'><b>Party Sharing</b></span><br />
          <span className='line'><b>Our Rights</b></span><br />
          <span className='line'><b>Data Protection</b></span><br />
          <span className='line'><b>Information</b></span>
        </div>
        <div>
          <h5>Sign Up Our Newsletter</h5>
          <input type="email" placeholder="Enter your email address" /><br />
          <button className='footer-sub'><b>Subscribe</b></button>
        </div>
        <hr />
      </div>
      <hr />
      <div className='text-center mt-3'>
        <span>© 2025 CWorld. All Rights Reserved</span>
      </div>
    </div>
  )
}

export default Footer
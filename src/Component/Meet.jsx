// src/components/Meet.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Meet.css'; // Custom CSS for styling
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

// Import local images
import man1 from "../assets/man1.png";
import man2 from "../assets/man2.png";
import man3 from "../assets/man3.png";

// Team Members Data
const teamMembers = [
  {
    name: 'Liam Scott',
    title: 'UI/UX Designer',
    image: man1,
    social: {
      facebook: '#',
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Emma Reads',
    title: 'Developer',
    image: man2,
    social: {
      facebook: '#',
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Ava Carlina',
    title: 'Graphics Designer',
    image: man3,
    social: {
      facebook: '#',
      linkedin: '#',
      twitter: '#',
    },
  },
];

const Meet = () => {
  return (
    <div className="Meet-carousel container mt-5 meet-card">
      <div className="text-center strength ">
        <h2 className='minds'>Meet Our Creative Minds</h2>
        <p className='lies'>
          At Cworld, Our strength lies in the passion and expertise of our team. We're <br />
          a group of innovative thinkers, design enthusiasts, and problem solvers.
        </p>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{ 
          delay: 2500,
          disableOnInteraction: true,
          // disableOnInteraction:  
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="card team-member-card text-center mt-5">
              <img
                src={member.image}
                alt={member.name}
                className="card-img-top team-member-image"
              />
              <div className="card-body d-flex justify-content-around">
                <div>
                  <h6 className="card-title"><b>{member.name}</b></h6>
                  <p className="card-text"><b>{member.title}</b></p>
                </div>
                <div className="social-icons d-flex">
                  <a href={member.social.facebook} className="social-icon mx-2">
                    <FaFacebook />
                  </a>
                  <a href={member.social.linkedin} className="social-icon mx-2">
                    <FaLinkedin />
                  </a>
                  <a href={member.social.twitter} className="social-icon mx-2">
                    <FaSquareXTwitter />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev custom-navigation-button"></div>
        <div className="swiper-button-next custom-navigation-button"></div>
      </Swiper>
    </div>
  );
};

export default Meet;

import React from 'react';
import '../styles/OurSuccess.css';
import secondImg from'../assets/segundaIlustracion.svg';
import AOS from 'aos'
import 'aos/dist/aos.css';


function OurSuccess() {
  AOS.init();
  return (
    <div className="container" id="success">
      <section className="questions contenedor">
        <section className="textos-questions">
          <h1>Our creativity is your success</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, est!</p>
          <a href="{}">Learn more</a>
        </section>
        <img src={secondImg} alt="success" data-aos="zoom-out-up" data-aos-duration="2000" />
    </section>
    </div>   
  );
};

export default OurSuccess;

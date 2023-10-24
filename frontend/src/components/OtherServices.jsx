import React from 'react';
// import { CheckCircle } from 'react-bootstrap-icons';
import thirdImg from'../assets/terceraIlustracion.svg';
import '../styles/OtherServices.css';


function OtherServices() {
  
  return (
    <div id="our-services">
      <section className="contenedor1 services" id="services">
        <img src={thirdImg} alt="Other Services" />
        <div className="box-skills">
          <h4><i class="bi bi-check-circle"></i> Web development</h4>
          <h4><i class="bi bi-check-circle"></i> SEO</h4>
          <h4><i class="bi bi-check-circle"></i> MKT digital</h4>
          <h4><i class="bi bi-check-circle"></i> Web design</h4>
          <h4><i class="bi bi-check-circle"></i> Free suport</h4>
        </div>
      </section>
    </div>
      
  );
};

export default OtherServices;

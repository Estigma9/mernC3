import React from 'react';
import '../styles/OurHistory.css';
import history from'../assets/history.png'

function OurHistory() {
    return (
      <div className="contenedor">
        <section className="contenido-header">
          <img src={history} alt="history"/>
          <section className="textos-header">
            <h1>Our History Since 1842</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, est!</p>
            <a href="{}">Learn more</a>
            </section>
        </section>
      </div>
        
    );
};

export default OurHistory;



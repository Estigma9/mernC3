import React from 'react';
import '../styles/OurResults.css';
import AOS from 'aos'
import 'aos/dist/aos.css';


function OurResults() {
  AOS.init();
  return (
    <div id="results">
        <section className="results">
            <div className="contenedor1 conten-results">
                <section className="numbers">
                    <div className="number" data-aos="zoom-in-left">
                        <h4>+8863</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, explicabo.</p>
                    </div>
                    <div className="number" data-aos="zoom-in-left">
                        <h4>+8863</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, explicabo.</p>
                    </div>
                    <div className="number" data-aos="zoom-in-left">
                        <h4>+8863</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, explicabo.</p>
                    </div>
                    <div className="number" data-aos="zoom-in-left">
                        <h4>+8863</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, explicabo.</p>
                    </div>
                </section>

                <section className="results-text">
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, natus.</p>
                    <a href='{}'>Ingrese aquí</a>
                </section>
            </div>
        </section>
    </div>
  );
};

export default OurResults;

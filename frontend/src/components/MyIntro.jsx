import React from 'react';
import '../styles/MyIntro.css';
import firstImg from'../assets/primeraIlustracion.svg'

function MyIntro() {
    return (
        <div className="contenedor">
            <section className="contenido-header">
                <section className="textos-header">
                    <h1>Our creativity is your success</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, libero.</p>
                    <a href="{}">Learn more</a>
                </section>
                <img src={firstImg} alt="software engineer"
                />
            </section>
        </div> 
    );
};

export default MyIntro;

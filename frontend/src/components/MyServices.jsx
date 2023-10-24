import React from 'react';
import { VectorPen, Code, GearFill, BarChartFill, PieChartFill, ChatFill} from 'react-bootstrap-icons';
import AOS from 'aos'
import 'aos/dist/aos.css';
import '../styles/MyServices.css';



function MyServices() {
    AOS.init({
        duration: 3000,
    });
    return (
        <div id="services">
        <section className="about-us">
            <div className="contenedor1">
                <h2 className="titulo">We provide a wide range</h2>
                <div className="contenedor-articulo">
                    <div className="articulo" data-aos="zoom-in-right">
                        <div className='icon-container'>
                            <VectorPen className='b-icon'/>
                        </div>
                        <h3>Graphic design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusamus reiciendis ab maxime animi alias ipsam ex debitis dolor provident!</p>
                        <a href="{}">Read more</a>
                    </div>
        
                    <div className="articulo" data-aos="zoom-in-right" >
                        <div className='icon-container'>
                            <i className="bi bi-code-slash b-icon"></i>
                            {/* <Code className="b-icon"/> */}
                        </div>
                        <h3>Web design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusamus reiciendis ab maxime animi alias ipsam ex debitis dolor provident!</p>
                        <a href="{}">Read more</a>
                    </div>

                    <div className="articulo" data-aos="zoom-in-right" >
                        <div className='icon-container'>
                            <GearFill className="b-icon"/>
                        </div>
                        <h3>Video production</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusamus reiciendis ab maxime animi alias ipsam ex debitis dolor provident!</p>
                        <a href="{}">Read more</a>
                    </div>

                    <div className="articulo" data-aos="zoom-in-right" >
                        <div className='icon-container'>
                            <BarChartFill className="b-icon"/>
                        </div>
                        <h3>SEO</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusamus reiciendis ab maxime animi alias ipsam ex debitis dolor provident!</p>
                        <a href="{}">Read more</a>
                    </div>

                    <div className="articulo" data-aos="zoom-in-right" >
                        <div className='icon-container'>
                            <PieChartFill className="b-icon"/>
                        </div>
                        <h3>Digital Marketing</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusamus reiciendis ab maxime animi alias ipsam ex debitis dolor provident!</p>
                        <a href="{}">Read more</a>
                    </div>

                    <div className="articulo" data-aos="zoom-in-right" >
                        <div className='icon-container'>
                            <ChatFill className="b-icon"/>
                        </div>
                        <h3>Inphografics</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusamus reiciendis ab maxime animi alias ipsam ex debitis dolor provident!</p>
                        <a href="{}">Read more</a>
                    </div>
                </div>         
            </div>
        </section>
    </div>
    );
};

export default MyServices;
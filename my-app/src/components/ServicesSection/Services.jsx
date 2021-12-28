import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './Services.css'
import Brush from '../../assets/img/Group_741_2x-transparent-brush.webp'
import ServicesWord from '../../assets/img/Services_2x-transparent-services.webp'
import ThirdImage from '../../assets/img/Group_771_2x-transparent.webp'

function Services() {
    return (
        <section className="services">
            <img className="services__bg-center"
                alt="printshop"
                src={Brush} />
            <img className="services__bg-upper"
                alt="print_services"
                src={ServicesWord} />
            <div className="services__wrapper">
                <div className="services__upper-text">
                    <h2 data-aos="fade-right">Does your brand need unique print services?</h2>
                    <h3 data-aos="fade-right">With our services, we can help your brand achieve their goals
                    </h3>
                </div>
                <div className="services__middle">
                    <div data-aos="fade-right" className="services__img">
                        <img className=""
                            alt="meshroom-print"
                            src={ThirdImage} />
                    </div>
                    <div className="services__options">
                        <ul className="sevices__options-bulletList">
                            <li data-aos="fade-right" className="services__options-bulletList-items">Textile</li>
                            <li data-aos="fade-right" className="services__options-bulletList-items">
                                Sublimation printing
                            </li>
                            <li data-aos="fade-right" className="services__options-bulletList-items">
                                Custom branded items
                            </li>
                            <li data-aos="fade-right" className="services__options-bulletList-items">Custom pos</li>
                            <li data-aos="fade-right" className="services__options-bulletList-items">
                                Fashion printing
                            </li>
                            <li data-aos="fade-right" className="services__options-bulletList-items">Embroidery</li>
                        </ul>
                    </div>
                </div>
                <div className="services__footer-text">
                    <div data-aos="fade-right" className="services__footer-text--rotated">
                        <span className="text-rotated">Mission</span>
                    </div>
                    <p data-aos="fade-right">
                        Our mission is to embrace the skills of our talented workforce to
                        provide a high level of service designed to fulfil the requirements
                        of our customers to our exacting standards, to their complete
                        satisfaction,within timescales and budget levels.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Services

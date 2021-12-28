import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './Projects.css'

import Car from '../../assets/img/car.webp'
import Hospital from "../../assets/img/hospital.webp"
import Movie from "../../assets/img/movie.webp"
import Book from "../../assets/img/book.webp"
import Hover from "../../assets/img/hover.webp"
import Katya from "../../assets/img/katya-austin-koyy-5uzlPU-unsplash@2x.webp"

function Projects() {
    return (
        <section className="ftprojects">
            <div data-aos="fade-right" data-aos-offset="500" className="ftprojects__header">
                <h2>Some of our <br />
                    featured projects</h2>
            </div>
            <div className="ftprojects__container">

                <div data-aos="zoom-in" data-aos-offset="550" className="ftprojects__proje">
                    <img
                        alt="print_workshop"
                        src={Car} />
                    <div className="ftprojects_proje_footerImg">
                        <img src={Hover} alt='meshroom-services' />
                        <p>Vehicle liveries</p>
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-offset="550" className="ftprojects__proje">
                    <img
                        alt="print_workshop_uk"
                        src={Hospital} />
                    <div className="ftprojects_proje_footerImg">
                        <img src={Hover} alt='meshroom-services' />
                        <p className="signs">Signs</p>
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-offset="550" className="ftprojects__proje">
                    <img
                        alt="print_posters"
                        src={Movie} />
                    <div className="ftprojects_proje_footerImg">
                        <img src={Hover} alt='meshroom-services' />
                        <p>Posters & Canvases</p>
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-offset="550" className="ftprojects__proje">
                    <img
                        alt="print_book"
                        src={Book} />
                    <div className="ftprojects_proje_footerImg">
                        <img src={Hover} alt='meshroom-services' />
                        <p>Stationary Printing</p>
                    </div>
                </div>

            </div>

            <div className="seeAll">
                <button className="seeAllBtn" type='submit'>
                    <div className="seeAllInside">
                        <span className="btn-paint-s"></span>
                        <span className="btn-paint-s"></span>
                        <span className="btn-paint-s"></span>
                        <span className="btn-paint-s"></span>
                        <span className="btn-paint-s"></span>
                        <span className="btn-label-s">See All</span>
                    </div>
                </button>
            </div>

            <div data-aos="fade-left" data-aos-offset="550" className="we-love-print">
                <img
                    alt="uk_print'_workshop"
                    src={Katya} />
            </div>

        </section >
    )
}

export default Projects

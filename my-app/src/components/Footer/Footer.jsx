import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className="footerContainer">
                <div className="footerFirst">
                    <h3 data-aos="fade-up">Pages</h3>
                    <ul>
                        <li data-aos="fade-up" data-aos-delay="30" data-aos-offset="2550"><a href="#">Services</a></li>
                        <li data-aos="fade-up" data-aos-delay="50" data-aos-offset="2560"><a href="#">Projects</a></li>
                        <li data-aos="fade-up" data-aos-delay="70" data-aos-offset="2570"><a href="#">About</a></li>
                        <li data-aos="fade-up" data-aos-delay="90" data-aos-offset="2580"><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="footerSecond">
                    <h3 data-aos="fade-up">Services</h3>
                    <ul>
                        <li data-aos="fade-up" data-aos-delay="30" data-aos-offset="2550"><a href="#">Screen Printing</a></li>
                        <li data-aos="fade-up" data-aos-delay="50" data-aos-offset="2560"><a href="#">Sublimation Printing</a></li>
                        <li data-aos="fade-up" data-aos-delay="70" data-aos-offset="2570"><a href="#">Custom branded items</a></li>
                        <li data-aos="fade-up" data-aos-delay="90" data-aos-offset="2580"><a href="#">Custom pos</a></li>
                        <li data-aos="fade-up" data-aos-offset="2590"><a href="#">Custom signage</a></li>
                        <li data-aos="fade-up" data-aos-offset="2600"><a href="#">Fashion Printing</a></li>
                        <li data-aos="fade-up" data-aos-offset="2610"><a href="#">Emroidery</a></li>
                    </ul>
                </div>

                <div className="footerThird">
                    <h3 data-aos="fade-up">Contact details</h3>
                    <ul>
                        <li data-aos="fade-up" data-aos-delay="30" data-aos-offset="2550"><a href="#">hello@themeshroom.co.uk</a></li>
                        <li data-aos="fade-up" data-aos-delay="50" data-aos-offset="2560"><a href="#">+44 7834 282061</a></li>
                        <li data-aos="fade-up" data-aos-delay="70" data-aos-offset="2570">
                            <a href="#">5st Mary’s Row Moseley <br />
                                Birmingham B13 8HW</a>
                        </li>
                        <li className="footerIcons">
                            <span data-aos="fade-up" data-aos-delay="30" data-aos-offset="2550"><a href="#">FB</a></span>
                            <span data-aos="fade-up" data-aos-delay="50" data-aos-offset="2560"><a href="#">IG</a></span>
                            <span data-aos="fade-up" data-aos-delay="70" data-aos-offset="2570"><a href="#">TW</a></span>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer

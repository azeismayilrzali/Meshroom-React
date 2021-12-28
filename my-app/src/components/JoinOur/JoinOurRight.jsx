import React from 'react'

import { LazyLoadImage } from 'react-lazy-load-image-component';

import Katya from '../../assets/img/katya-austin-koyy-5uzlPU-unsplash@2x.webp'
import Rainbow from '../../assets/img/mika-baumeister-PtabTe6iJ_8-unsplash.webp'

function JoinOurRight() {
    return (
        <div className='joinRight'>

            <div data-aos="fade-left" data-aos-offset="1450" className="joinRightTop">
                <img className=""
                    alt="meshroom"
                    src={Katya} />
            </div>

            <div data-aos="fade-left" data-aos-offset="1450" className="joinRightMiddle">
                <article>
                    <p>
                        We are a
                        creative
                        community that
                        design, share,
                        and inspire
                        others. Join us
                        and let's grow
                        together
                    </p>
                </article>
            </div>

            <div data-aos="fade-left" data-aos-offset="1450" className="joinRightBottom">
                <img className=""
                    alt="meshroom"
                    src={Rainbow} />
            </div>

            <div data-aos="fade-left" data-aos-offset="1550" className="joinRightEnd">
                <h3>
                    creative
                    community
                </h3>
            </div>

        </div>
    )
}

export default JoinOurRight

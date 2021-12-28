import React from 'react'

import { LazyLoadImage } from 'react-lazy-load-image-component';

import museum from '../../assets/img/birmingham-museums-trust-e0wBK0xJXYQ-unsplash.webp'
import emarts from '../../assets/img/emarts-emarts-ZCTh4f4mv18-unsplash.webp'

function HaveRight() {
    return (
        <div className='haveRight'>
            <div data-aos="fade-left" data-aos-offset="2250" className="haveRightTop">
                <img className=""
                    alt="printshops-uk"
                    src={museum} />
            </div>
            <div data-aos="fade-left" data-aos-offset="2300" className="haveRightBottom">
                <img className=""
                    alt="meshroom printshop"
                    src={emarts} />
            </div>
        </div>
    )
}

export default HaveRight

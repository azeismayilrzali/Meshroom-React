import React from 'react'
import inputbg from '../../assets/img/Blackborderinput.svg'

function HaveLeft() {
    return (
        <div className='haveLeft'>
            <div data-aos="fade-right" data-aos-offset="2250" className="haveLeftHeading">
                <div>
                    <h2>have a project
                        in mind?</h2>
                </div>
                <div>
                    <p>Talk a little bit about your project and we will contact you</p>
                </div>
            </div>

            <div className="haveLeftForm">
                <form>

                    <label>
                        <p>name</p>
                        <img src={inputbg} alt="fashion-printing" />
                        <input type="text" placeholder='name' />
                    </label>

                    <label>
                        <p>email</p>
                        <img src={inputbg} alt="embroidery" />
                        <input type="email" placeholder='email' />
                    </label>

                    <label>
                        <p>message</p>
                        <img src={inputbg} alt="textile" />
                        <input type="text" placeholder='message' />
                    </label>

                    <div class="seeAll blackbutton haveButton">
                        <button class="seeAllBtn" type='submit'>
                            <div class="request_quote seeAllInside raq">
                                <span class="btn-paint-s"></span>
                                <span class="btn-paint-s"></span>
                                <span class="btn-paint-s"></span>
                                <span class="btn-paint-s"></span>
                                <span class="btn-paint-s"></span>
                                <span class="btn-label-s">Request a Quote</span>
                            </div>
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default HaveLeft

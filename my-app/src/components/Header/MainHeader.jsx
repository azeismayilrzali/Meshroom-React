import React from 'react'
import Logo from '../../assets/img/meshroom_logo.svg'
import gsap from 'gsap'

function MainHeader() {

    const openMenu = () => {
        gsap.to(".sidenav", 0.2, {
            right: 0,
        });
        gsap.to(".menu__item", 0.4, {
            y: "-50px",
            opacity: 1,
            delay: 0.8,
        });
    }

    return (
        <header>
            <nav>
                <div className="navLogo">
                    <img src={Logo} alt="meshroom_logo" />
                </div>
                <div className="navMenu" onClick={openMenu}>
                    <div className="navToggle">
                        <div className="navToggle-div"></div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default MainHeader

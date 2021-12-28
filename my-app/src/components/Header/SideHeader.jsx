import React from 'react'
import gsap from 'gsap'

function SideHeader() {

    const closeMenu = () => {
        gsap.to(".sidenav", 0.2, {
            right: "-105%",
        });
        gsap.to(".menu__item", 0.4, {
            y: 0,
            opacity: 0,
        });
    }

    return (
        <div className="sidenav">
            <div className="menu-close" onClick={closeMenu}>&times;</div>
            <div className="menu">
                <div className="menu__item">
                    <a href="https://github.com/" className="menu__item-link">Home</a>
                    <div className="menu__item-spans">
                        <div className="menu__item-span">
                            <span>Home-Home-Home-Home-Home-Home</span>
                        </div>
                    </div>
                </div>
                <div className="menu__item">
                    <a href="https://youtube.com/" className="menu__item-link">Dashboard</a>
                    <div className="menu__item-spans">
                        <div className="menu__item-span">
                            <span>
                                Dashboard-Dashboard-Dashboard-Dashboard-Dashboard-Dashboard
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideHeader

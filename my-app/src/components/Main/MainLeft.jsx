import React, { useEffect } from 'react'
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

function MainLeft() {

    useEffect(() => {
        Splitting();
    }, [])

    return (
        <div className="mainLeftArea">
            <h1>
                <div className="title">
                    <span className="text write" data-splitting="lines">
                        Welcome, <br />
                        We are a UK based
                        print workshop
                    </span>
                    <span aria-hidden="true" className="text laser" data-splitting="lines">
                        Welcome, <br />
                        We are a UK based
                        print workshop
                    </span>
                </div>
            </h1>
            <p>
                We are capable of textile and metal screen printing
                also doing all types of print services that provides
                hand crafted design & print services
                to businesses of any size
            </p>
            <div className="mainButtonBack">
                <button className="mainButton">
                    <div className="mainButtonInside">
                        <span className="btn-paint-main"></span>
                        <span className="btn-paint-main"></span>
                        <span className="btn-paint-main"></span>
                        <span className="btn-paint-main"></span>
                        <span className="btn-paint-main"></span>
                        <span className="btn-paint-main"></span>
                        <p className="btn-label-p">Request a Quote</p>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default MainLeft

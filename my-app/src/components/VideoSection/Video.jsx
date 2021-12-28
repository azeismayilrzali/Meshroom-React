import React from 'react'
import Audio from '../../assets/img/videoplayback.mp4'
import './Video.css'

function Video() {
    return (
        <section className="video">
            <div className="fullscreen-bg">
                <video loop muted autoplay class="fullscreen-bg__video" width="100%" height="100%  ">
                    {/* <source src={Audio} type="video/mp4" /> */}
                </video>
            </div>
        </section>
    )
}

export default Video

import React from 'react'
import './Main.css'
import MainLeft from './MainLeft'
import MainRight from './MainRight'

function Main() {
    return (
        <section className='main'>
            <MainLeft />
            <MainRight />
        </section>
    )
}

export default Main

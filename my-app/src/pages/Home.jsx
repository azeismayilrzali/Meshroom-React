import React from 'react'
import Footer from '../components/Footer/Footer'
import Main from '../components/Main/Main'
import Projects from '../components/ProjectsSection/Projects'
import Services from '../components/ServicesSection/Services'
import Video from '../components/VideoSection/Video'
import Joinour from '../components/JoinOur/Joinour'
import Haveproject from '../components/HaveProject/Haveproject'

function Home() {
    return (
        <section>
            <Main />
            <Video />
            <Services />
            <Projects />
            <Joinour />
            <Haveproject />
        </section>
    )
}

export default Home

import React, { useEffect } from 'react';
import '../style/Home.scss';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="home">
            <Intro />
            <div id="about">
                <About />
            </div>
            <div id="projects">
                <Projects />
            </div>
        </div>
    )
}

export default Home;
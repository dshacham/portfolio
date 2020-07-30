import React from 'react';
import '../style/Intro.scss';
import Typical from 'react-typical';

const Intro = () => {
    return (
        <div className="intro-container">
            <div className="intro">
                <Typical
                    steps={['', 2000, 'Hello world!', 5000]}
                    loop={Infinity}
                    wrapper="h3"
                />
                <h2>I'm Dana.</h2>
                <h5>Full Stack</h5>
                <h4>WEB DEVELOPER</h4>
            </div>
        </div>
    )
}

export default Intro;
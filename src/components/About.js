import React from 'react';
import '../style/About.scss';

const About = () => {
    return (
        <div className="about">
            <h2>About Me</h2>
            <h3>I'm a web developer based in Berlin, Germany.</h3>
            <p>In the year-long course that I took at DCI (Digital Career Institute), the emphasis was put on the <span style={{ fontWeight: 400 }}>frontend</span>, including HTML, CSS, JS (React, Context API).</p>
            <p>Nevertheless, we still touched the <span style={{ fontWeight: 400 }}>backend</span> and learned to create a server and a database, and connect them with each other <span style={{ fontWeight: 400 }}>and</span> the frontend.</p>
            <p>I enjoy creating my own projects with the skills I have learned, and am <span style={{ fontWeight: 400 }}>eager</span> to learn new things as I go.</p>
            <p>And there is always something to learn.</p>
            <p style={{ fontWeight: 400 }}>Luckily for me, I am a fast learner!</p>
        </div>
    )
}

export default About;
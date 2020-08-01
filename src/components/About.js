import React, { useEffect } from 'react';
import '../style/About.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div data-aos="fade-up" className="about">
            <div className="h2-box">
                <h2>About Me</h2>
            </div>
            <div className="outer-text-box">
                <div className="text-box">
                    <h3>I'm a web developer based in Berlin, Germany.</h3>
                    <p>My training includes a year-long web development course at DCI (Digital Career Institute), in which the emphasis was put on the <span style={{ fontWeight: 400 }}>frontend</span>, including HTML, CSS, JS (React, Context API).</p>
                    <p>Nevertheless, we still touched the <span style={{ fontWeight: 400 }}>backend</span> and learned to create a server and a database, and connect them with each other and the client side.</p>
                    <p>Since then I keep learning on my own. I enjoy creating my own projects with the skills I have so far, and <span style={{ fontWeight: 400 }}>eagerly</span> learn new things as I go.</p>
                    <p>And there is always something to learn.</p>
                    <p style={{ fontWeight: 400 }}>Luckily for me, I am a fast learner!</p>
                </div>
            </div>
        </div>
    )
}

export default About;
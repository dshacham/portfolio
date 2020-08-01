import React from 'react';
import { HashLink } from 'react-router-hash-link';
import '../style/NavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const NavBar = () => {

    const hideHash = (e) => {
        e.preventDefault();
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    return (
        <nav className="navbar">
            <p onClick={scrollTop}>&lt;D&gt;</p>
            <ul className="pages">
                <li><HashLink to="#about" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} onClick={hideHash}>About</HashLink></li>
                <li><HashLink to="#projects" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} onClick={hideHash}>Projects</HashLink></li>
            </ul>
            <ul className="contact">
                <li>
                    <a href="mailto: dshacham22@gmail.com" target="_blank">
                        <FontAwesomeIcon className="icon" title="email me" icon={faEnvelope} />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/dana-shacham-937408163/" target="_blank">
                        <FontAwesomeIcon className="icon" title="linkedin" icon={faLinkedin} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/dshacham/" target="_blank">
                        <FontAwesomeIcon className="icon" title="github" icon={faGithub} />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;
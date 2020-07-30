import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../style/NavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const NavBar = () => {
    return (
        <nav className="navbar">
            <p><NavLink to="/">&lt;D&gt;</NavLink></p>
            <ul className="pages">
                <li><HashLink to="#about" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>About</HashLink></li>
                <li><HashLink to="#projects" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Projects</HashLink></li>
            </ul>
            <ul className="contact">
                <li>
                    <a href="mailto: dshacham22@gmail.com" target="_blank">
                        <FontAwesomeIcon className="icon" title="email me" icon={faEnvelope} />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/dana-shacham-937408163/" target="_blank">
                        <FontAwesomeIcon className="icon" title="email me" icon={faLinkedin} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/dshacham/" target="_blank">
                        <FontAwesomeIcon className="icon" title="email me" icon={faGithub} />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;
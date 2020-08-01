import React, { useState, useEffect, useContext } from 'react';
import { HashLink } from 'react-router-hash-link';
import HamburgerMenu from 'react-hamburger-menu';
import Context from './Context';
import '../style/SlideInNav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const SlideInNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); //hamburger
    const [isMenuClicked, setIsMenuClicked] = useState(false); //sections/SM-list

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsMenuClicked(true);
    };

    const handleSectionClick = () => {
        setIsMenuClicked(false);
        setIsMenuOpen(false);
    };

    const hideHash = (e) => {
        e.preventDefault();
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="slide-in-nav">
            <div className="top-nav">
                <HamburgerMenu
                    className="hamburger"
                    isOpen={isMenuOpen}
                    menuClicked={handleMenuClick}
                    color='white'
                    strokeWidth={3}
                />
                <p onClick={scrollTop}>&lt;D&gt;</p>
            </div>
            <nav className="slide-in">
                {
                    isMenuClicked ?
                        <ul className={isMenuOpen === false ? "ul-slide slide-out-anim" : "ul-slide slide-in-anim"}>
                            <li onClick={handleSectionClick}>
                                <HashLink to="#about" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} onClick={hideHash}>About</HashLink>
                            </li>
                            <li onClick={handleSectionClick}>
                                <HashLink to="#projects" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} onClick={hideHash}>Projects</HashLink>
                            </li>
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
                        :
                        null
                }
            </nav>
        </div>
    )
}

export default SlideInNav;
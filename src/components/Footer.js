import React from 'react';
import '../style/Footer.scss';

const Footer = () => {
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <ul className="footer">
            <li className="my-name">© 2020 Dana Shacham</li>
            <li className="to-top"><p onClick={scrollTop}>&#94;</p></li>
        </ul>
    )
}

export default Footer;
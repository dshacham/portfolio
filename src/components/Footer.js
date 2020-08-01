import React from 'react';
import '../style/Footer.scss';

const Footer = () => {
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="footer">
            <ul>
                <li className="my-name">© 2020 Dana Shacham</li>
                <li className="btt"><a className="to-top" onClick={scrollTop}>&#94;</a></li>
            </ul>
        </div>
    )
}

export default Footer;
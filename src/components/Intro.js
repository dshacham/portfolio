import React, {useContext} from 'react';
import '../style/Intro.scss';
import Typical from 'react-typical';
import Context from './Context';

const Intro = () => {
    const { winWidth } = useContext(Context);

    return (
        <div className="intro-container">
            <div className="intro">
                <Typical
                    steps={['', 2000, 'Hello world!', 5000]}
                    loop={Infinity}
                    wrapper="h3"
                />
                <h2>I'm Dana</h2>
                <h5>Full Stack</h5>
                <h4>WEB DEVELOPER</h4>
            </div>
            {
                winWidth === "desktop" ?
            <h6>*This web app is fully responsive! For mobile version, refresh page under 768px.</h6>
                : null
            }
        </div>
    )
}

export default Intro;
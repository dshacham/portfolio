import React, {useContext} from 'react';
import '../style/Intro.scss';
import Typical from 'react-typical';
import Context from './Context';

const Intro = () => {
    const { winWidth } = useContext(Context);

    return (
        <div className="intro-container">
        {
                winWidth === "desktop" ?
            <h6>*For mobile version of all apps, refresh page under 768px.</h6>
                : null
            }
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
            
        </div>
    )
}

export default Intro;
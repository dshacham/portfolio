import React from 'react';
import '../style/Projects.scss';

const Projects = () => {
    return (
        <div className="projects-container">
            <h2>Projects</h2>
            <ul className="projects">
                <li><img src="../../assets/images/easyvegan-thumb.png" alt="easy vegan" /></li>
                <li><img src="../../assets/images/devents-thumb.png" alt="devents" /></li>
            </ul>
        </div>
    )
}

export default Projects;
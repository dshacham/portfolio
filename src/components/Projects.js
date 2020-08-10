import React, { useEffect } from 'react';
import '../style/Projects.scss';
import ProjectData from '../assets/ProjectsData';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div data-aos="fade-up" className="projects-container" >
            <div className="h2-box">
                <h2>Projects</h2>
            </div>
            <div className="projects">
            <h3 className="projects-disc">*Projects that include server side might take up to 30 seconds to load.</h3>
                {ProjectData.map(project => {
                    return (
                        <a href={project.link} target="_blank" key={project.name}>
                            <ul className="project-card">
                                <li><img src={project.img} alt={project.name} /></li>
                                <li className="project-name">{project.name}</li>
                                <li className="project-desc">{project.desc}</li>
                            </ul>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects;
import { useState } from 'react';

import Project from '../Project';
import Modal from './Modal';

function ProjectsView({ projects }) {
    const [openModal, setOpenModal] = useState(false);
    const [nameProject, setNameProject] = useState('');
    const [description, setDescription] = useState('');
    const [techs, setTechs] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [codeUrl, setCodeUrl] = useState('');
    const [homepageProject, setHomepageProject] = useState('');

    function showModal(nameProject, description, techs, imageUrl, codeUrl, homepage) {
       setOpenModal(true);

       setNameProject(nameProject);
       setDescription(description);
       setTechs(techs);
       setImageUrl(imageUrl);
       setCodeUrl(codeUrl);
       setHomepageProject(homepage);
    }

    return (
        <>
            {projects.map(project => (
                <Project key={project.id} name={project.name} description={project.description} techs={project.techs}
                    imageUrl={project.imageUrl} codeUrl={project.codeUrl} homepage={project.homepage} 
                    showModal={() => showModal(project.name, 
                                               project.description, 
                                               project.techs,
                                               project.imageUrl, 
                                               project.codeUrl, 
                                               project.homepage)} />
            ))}

            <Modal isOpen={openModal}
                   closeModal={() => setOpenModal(!openModal)} 
                   nameProject={nameProject} 
                   description={description}
                   techs={techs}
                   imageUrl={imageUrl} 
                   codeUrl={codeUrl}
                   homepage={homepageProject} />
        </>
    );
}

export default ProjectsView;
import { useState } from 'react';

import Project from '../Project/index';
import Modal from './Modal/index';

function ProjectsView({ projects }) {
    const [openModal, setOpenModal] = useState(false);
    const [modalNameProject, setModalNameProject] = useState('');
    const [modalImageUrl, setModalImageUrl] = useState('');

    function showModal(nameProject, imageUrl) {
       setOpenModal(true);
       setModalNameProject(nameProject);
       setModalImageUrl(imageUrl)
    }

    return (
        <>
            {projects.map(project => (
                <Project key={project.id} id={project.id} name={project.name} description={project.description} techs={project.techs}
                    imageUrl={project.imageUrl} codeUrl={project.codeUrl} homepage={project.homepage} showModal={() => showModal(project.name, project.imageUrl)} />
            ))}

            <Modal isOpen={openModal} nameProject={modalNameProject} imageUrl={modalImageUrl} />
        </>
    );
}

export default ProjectsView;
import { useState, useEffect } from 'react';
import axios from 'axios';

import ProjectsView from './ProjectsView';
import Pagination from './Pagination/index';

import searchImage from '../../img/projects/search.svg';
import filterImage from '../../img/projects/filter.svg';

import { ProjectsContainer, InputGroup, PesquisaInput, FilterImage, Content } from './style';

function Projects() {
    const [projects, setProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [projectsPerPage] = useState(4);

    const apiProjects = 'https://portfolio-maxsuel.vercel.app/services/projects';

    useEffect(() => {
        const getDataProjects = async () => {
            const response = await axios.get(apiProjects);
            setProjects(response.data);
        }

        getDataProjects();
    }, []);

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <ProjectsContainer id="projects">
            <h1>Projetos</h1>
            <InputGroup>
                <img src={searchImage} alt="search image" />
                <PesquisaInput type="search" placeholder="Pesquisar" />
                <FilterImage src={filterImage} alt="Filter of search" />
            </InputGroup>
            <Content>
                <ProjectsView projects={currentProjects}/>
            </Content>
            <Pagination projectsPerPage={projectsPerPage} totalProjects={projects.length} paginate={paginate} />
        </ProjectsContainer>
    );
}

export default Projects;
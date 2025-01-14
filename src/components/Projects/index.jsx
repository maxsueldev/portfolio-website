import { useState, useEffect } from 'react';
import axios from 'axios';

import ProjectsView from './ProjectsView';
import Pagination from './Pagination';
import ModalFilter from './ModalFilter';

import searchImage from '../../img/projects/search.svg';
import filterImage from '../../img/projects/filter.svg';

import { ProjectsContainer, InputGroup, PesquisaInput, FilterImage, Content } from './style';

function Projects() {
    const [projects, setProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [projectsPerPage] = useState(6);

    const [arrayResults, setArrayResults] = useState([]);
    const [openModalFilter, setOpenModalFilter] = useState(false);

    const apiProjects = 'https://json-server-projects.vercel.app/projects';

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
    const currentResults = arrayResults.slice(indexOfFirstProject, indexOfLastProject);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    function takeWord(event) {
        const wordToSearch = event.target.value;
        searchProjects(wordToSearch);
    }

    function searchProjects(word) {   
        console.log(word);
        const searchProjects = projects.filter(element => element.name.toLowerCase().includes(word.toLowerCase())
                                            || element.description.toLowerCase().includes(word.toLowerCase())
                                            || element.techs.toString().toLowerCase().includes(word.toLowerCase()));
                                            
                        // element.techs -->  ["HTML", "CSS", "JavaScript"];
                        // element.techs = "HTML CSS JavaScript"

        setArrayResults(searchProjects);  
    }

    function showModalFilter() {
        setOpenModalFilter(true);
    }


    return (
        <ProjectsContainer id="projects">
            <h1>Projetos</h1>
            <InputGroup>
                <img src={searchImage} alt="search image" />
                <PesquisaInput onKeyUp={takeWord} type="search" placeholder="Pesquisar" />
                <FilterImage onClick={() => showModalFilter()} src={filterImage} alt="Filter of search" />
            </InputGroup>
            <ModalFilter isOpen={openModalFilter} closeModal={() => setOpenModalFilter(!openModalFilter)} />
            <Content>
                <ProjectsView projects={ (arrayResults.length !== 0 && arrayResults.length !== 27) ? currentResults : currentProjects } />
            </Content>
            <Pagination projectsPerPage={projectsPerPage} totalProjects={(arrayResults.length !== 0 && arrayResults.length !== 27) ? arrayResults.length : projects.length} paginate={paginate} />
        </ProjectsContainer>
    );
}

export default Projects;
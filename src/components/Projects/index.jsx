import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { useState, useEffect } from 'react';
import axios from 'axios';

import Project from './Project';

import { ProjectsContainer, Content } from './style';

function Projects() {
    const [projects, setProjects] = useState([]);

    const apiProjects = 'https://json-server-max.vercel.app/projects';

    useEffect(() => {
        const getDataProjects = async () => {
            const response = await axios.get(apiProjects);
            setProjects(response.data);
        }

        getDataProjects();
    }, []);

    return (
        <>
            <ProjectsContainer id="projects">
                <h1>Projetos Principais</h1>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                >
                    {projects.map(project => (
                        <SwiperSlide key={project.id}>
                            <Content>
                                <Project project={project} />
                            </Content>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </ProjectsContainer>
        </>
    );
}

export default Projects;
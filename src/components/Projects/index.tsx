import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { useState, useEffect } from 'react';
import axios from 'axios';

import Project from './Project';

import { CSSProperties } from 'styled-components';
import { ProjectsContainer, Content } from './style';

interface IProjectProps {
    id: number,
    name: string,
    description: string,
    techs: string[],
    homepage: string,
    codeUrl: string,
    imageUrl: string
}

function Projects() {
    const [projects, setProjects] = useState<IProjectProps[]>([]);

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
                <h2>Projetos Principais</h2>
                <Swiper
                    style={{
                        '--swiper-navigation-color': 'var(--red-color)',
                    } as CSSProperties}
                    modules={[Navigation]}
                    spaceBetween={80}
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
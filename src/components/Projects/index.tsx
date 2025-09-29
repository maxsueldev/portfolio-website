import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { useState, useEffect } from "react";
import axios from "axios";

import Project from "./Project";

import { CSSProperties } from "styled-components";
import styles from "./Projects.module.css";

interface IProjectProps {
  id: number;
  name: string;
  description: string;
  techs: string[];
  homepage: string;
  codeUrl: string;
  imageUrl: string;
}

function Projects() {
  const [projects, setProjects] = useState<IProjectProps[]>([]);

  const apiProjects = "https://json-server-max.vercel.app/projects";

  useEffect(() => {
    const getDataProjects = async () => {
      const response = await axios.get(apiProjects);
      setProjects(response.data);
    };

    getDataProjects();
  }, []);

  return (
    <>
      <section
        className={styles.projectsContainer}
        id="projects"
        data-aos="fade-down"
      >
        <h2>Projetos Principais</h2>
        <Swiper
          style={
            {
              "--swiper-navigation-color": "var(--tertiary-color)",
            } as CSSProperties
          }
          modules={[Navigation]}
          spaceBetween={80}
          slidesPerView={1}
          navigation
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className={styles.content}>
                <Project project={project} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default Projects;

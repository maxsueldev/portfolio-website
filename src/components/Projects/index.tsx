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
import IProject from "../../interfaces/IProject";
import { useTheme } from "../../hooks/useTheme";

const Projects = () => {
  const [projects, setProjects] = useState<IProject[]>([]);

  const apiProjects = "https://json-server-max.vercel.app/projects";
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const getDataProjects = async () => {
      try {
        const response = await axios.get(apiProjects);
        setProjects(response.data);
      } catch (error) {
        console.error("Erro ao buscar projetos: ", error);
      }
    };

    getDataProjects();
  }, []);

  return (
    <>
      <section
        className={`${styles.projectsContainer} ${
          isDarkMode ? "" : styles.light
        }`}
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
};

export default Projects;

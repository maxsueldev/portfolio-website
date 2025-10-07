import { FaGithub, FaRegEye } from "react-icons/fa6";

import styles from "./Project.module.css";
import IProject from "../../../interfaces/IProject";
import { useTheme } from "../../../hooks/useTheme";

interface ProjectProps {
  project: IProject;
}

const Project = ({ project }: ProjectProps) => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`${styles.projectContainer} ${isDarkMode ? "" : styles.light}`}
    >
      <div className={styles.description}>
        <h3>{project.name}</h3>
        <p className={styles.description}>{project.description}</p>
        <ul className={styles.techsList}>
          {project.techs.map((tech: string, index: number) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <div className={styles.viewProject}>
          {project.homepage && (
            <a href={project.homepage} target="_blank">
              {<FaRegEye className={styles.icon} />}
            </a>
          )}{" "}
          {project.codeUrl && (
            <a href={project.codeUrl} target="_blank">
              {<FaGithub className={styles.icon} />}
            </a>
          )}
        </div>
      </div>
      <a
        href={project.homepage ? project.homepage : "#projects"}
        target={project.homepage ? "_blank" : "_self"}
      >
        <img src={project.imageUrl} alt="preview de projeto" />
      </a>
    </div>
  );
};

export default Project;

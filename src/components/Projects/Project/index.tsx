import { FaGithub, FaRegEye } from "react-icons/fa6";

import styles from "./Project.module.css";

function Project({ project }: any) {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.description}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul className={styles.techsList}>
          {project.techs.map((tech: string, index: number) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <div className={styles.viewProject}>
          {project.homepage && (
            <a href={project.homepage} target="_blank">
              {<FaRegEye />}
            </a>
          )}{" "}
          {project.codeUrl && (
            <a href={project.codeUrl} target="_blank">
              {<FaGithub />}
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
}

export default Project;

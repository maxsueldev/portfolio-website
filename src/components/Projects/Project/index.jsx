import { FaGithub, FaRegEye } from "react-icons/fa6";

import { ProjectContainer, Description, TechsList, ViewProject } from "./style";

function Project({ project }) {
    return (
        <ProjectContainer>
            <Description>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <TechsList>
                    {project.techs.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </TechsList>
                <ViewProject>
                    {project.homepage &&
                        <a href={project.homepage} target='_blank'>{<FaRegEye />}</a>
                    } {project.codeUrl &&
                        <a href={project.codeUrl} target='_blank'>{<FaGithub />}</a>
                    }
                </ViewProject>
            </Description>
            <img src={project.imageUrl} alt="preview de projeto" />
        </ProjectContainer>
    );
}

export default Project;
import eyeView from '/assets/projects/eye.svg';
import githubView from '/assets/projects/github.svg';

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
                        <a href={project.homepage} target='_blank'><img src={eyeView} alt="visite page" /></a>
                    } {project.codeUrl &&
                        <a href={project.codeUrl} target='_blank'><img src={githubView} alt="github code" /></a>
                    }
                </ViewProject>
            </Description>
            <img src={project.imageUrl} alt="previw de projeto" />
        </ProjectContainer>
    );
}

export default Project;
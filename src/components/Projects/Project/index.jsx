import { ProjectContainer, Description, TechsContainer } from "./style";

function Project({ name, description = '', techs, showModal }) {
    return (
        <ProjectContainer onClick={showModal}>
            <h3>{name}</h3>
            <Description>{description}</Description>
            <TechsContainer>
                {techs.map((tech, index) => (
                    <p key={index}>{tech}</p>
                ))}
            </TechsContainer>
        </ProjectContainer>
    );
}

export default Project;
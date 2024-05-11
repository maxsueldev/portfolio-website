import { ProjectContainer, Description, TechsContainer } from "./style";

function Project({ id, name, description = '', techs, imageUrl, codeUrl, homepage = '', showModal }) {
    return (
        <>
            {/* <a href={codeUrl} target="_blank">  */}
                <ProjectContainer onClick={showModal}>
                    <h3>{name}</h3>
                    <Description>{description}</Description>
                    <TechsContainer>
                        {techs.map((tech, index) => (
                            <p key={index}>{tech}</p>
                        ))}
                    </TechsContainer>
                </ProjectContainer>
            {/* </a> */}
        </>
    );
}

export default Project;
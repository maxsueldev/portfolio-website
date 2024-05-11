import Project from '../Project/index';

function ProjectsView({ projects }) {
    return (
        <>
            {projects.map(project => (
                <Project key={project.id} id={project.id} name={project.name} description={project.description} techs={project.techs}
                    imageUrl={project.imageUrl} codeUrl={project.codeUrl} homepage={project.homepage} />
            ))}
        </>
    );
}

export default ProjectsView;
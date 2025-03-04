import workImage from '/assets/experiences/work.svg';

import { ExperienceContainer, Title, Local, Description, ImageWork, Date } from './style';

interface IExperienceProps {
    title: string,
    local: string,
    description?: string,
    date: string
}

function Experience({title, local, description='', date}: IExperienceProps) {
    return (
        <ExperienceContainer>
            <div className='content'>
                <Title>{title}</Title>
                <Local>{local}</Local>
                <Description>{description}</Description>
            </div>
            <ImageWork>
                <img src={workImage} alt="Work svg image" />
            </ImageWork>
            <Date>
                <p>{date}</p>
            </Date>
        </ExperienceContainer>
    );
}

export default Experience;
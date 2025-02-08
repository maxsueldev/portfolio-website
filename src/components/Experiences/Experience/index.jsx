import workImage from '/assets/experiences/work.svg';

import { ExperienceContainer, Title, Local, Description, ImageWork, Date } from './style';

function Experience({title, local, description='', date}) {
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
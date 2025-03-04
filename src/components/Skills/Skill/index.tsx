import { SkillContainer, ContentBox } from './style';

interface ISkillProps {
    title: string,
    percentContent: string
}

function Skill({title, percentContent}: ISkillProps) {
    return (
        <SkillContainer>
            <p>{title}</p>
            <ContentBox>
                <span style={{width: percentContent}}></span>
            </ContentBox>
        </SkillContainer>
    );
}

export default Skill;
import { SkillContainer, ContentBox } from './style';

function Skill({title, percentContent}) {
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
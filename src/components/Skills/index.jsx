import Skill from './Skill';

import { SkillsContainer, FrontEnd, TechsFrontEnd } from './style';

function Skills() {
    return (
        <SkillsContainer id="skills">
            <h1>Habilidades</h1>
            <FrontEnd>
                <h2>Front-End</h2>
                <TechsFrontEnd>
                    <div>
                        <Skill title='HTML' percentContent='85%' />
                        <Skill title='CSS' percentContent='85%' />
                        <Skill title='JavaScript' percentContent='85%' />
                        <Skill title='React' percentContent='50%' />
                    </div>
                    <div>
                        <Skill title='TypeScript' percentContent='15%' />
                        <Skill title='SASS' percentContent='30%' />
                        <Skill title='GIT' percentContent='50%' />
                    </div>
                </TechsFrontEnd>
            </FrontEnd>
            <div className="design">
                <h2>Design</h2>
                <Skill title='Figma' percentContent='75%' />
                <Skill title='Photoshop' percentContent='30%' />
            </div>
        </SkillsContainer>
    );
}

export default Skills;
import Skill from "./Skill";

import { SkillsContainer, FrontEnd, TechsFrontEnd } from "./style";

function Skills() {
  return (
    <SkillsContainer id="skills">
      <h2>Habilidades</h2>
      <FrontEnd>
        <h3>Front-End</h3>
        <TechsFrontEnd>
          <div>
            <Skill title="HTML" percentContent="85%" />
            <Skill title="CSS" percentContent="85%" />
            <Skill title="JavaScript" percentContent="85%" />
            <Skill title="React" percentContent="60%" />
          </div>
          <div>
            <Skill title="TypeScript" percentContent="60%" />
            <Skill title="SASS" percentContent="60%" />
            <Skill title="Tailwind" percentContent="40%" />
            <Skill title="GIT" percentContent="50%" />
          </div>
        </TechsFrontEnd>
      </FrontEnd>
      <div className="design">
        <h3>Design</h3>
        <Skill title="Figma" percentContent="70%" />
        <Skill title="Photoshop" percentContent="30%" />
      </div>
    </SkillsContainer>
  );
}

export default Skills;

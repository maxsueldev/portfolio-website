import styles from "./Skill.module.css";

interface ISkillProps {
  title: string;
  percentContent: string;
}

function Skill({ title, percentContent }: ISkillProps) {
  return (
    <div className={styles.skillContainer}>
      <p>{title}</p>
      <div className={styles.contentBox}>
        <span style={{ width: percentContent }}></span>
      </div>
    </div>
  );
}

export default Skill;

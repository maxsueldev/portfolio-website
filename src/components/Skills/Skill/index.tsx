import ISkill from "../../../interfaces/ISkill";
import styles from "./Skill.module.css";

const Skill = ({ title, percentContent }: ISkill) => {
  return (
    <div className={styles.skillContainer}>
      <p>{title}</p>
      <div className={styles.contentBox}>
        <span style={{ width: percentContent }}></span>
      </div>
    </div>
  );
};

export default Skill;

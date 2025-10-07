import { useTheme } from "../../../hooks/useTheme";
import ISkill from "../../../interfaces/ISkill";
import styles from "./Skill.module.css";

const Skill = ({ title, percentContent }: ISkill) => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`${styles.skillContainer} ${isDarkMode ? "" : styles.light}`}
    >
      <p className={styles.title}>{title}</p>
      <div className={styles.contentBox}>
        <span style={{ width: percentContent }}></span>
      </div>
    </div>
  );
};

export default Skill;

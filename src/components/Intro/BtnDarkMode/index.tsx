import styles from "./BtnDarkMode.module.css";
import { useTheme } from "../../../hooks/useTheme";

const BtnDarkMode = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className={styles.container}>
      <label className={styles.switch}>
        <input type="checkbox" onChange={toggleTheme} />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};

export default BtnDarkMode;

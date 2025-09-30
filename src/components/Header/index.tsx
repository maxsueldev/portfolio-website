import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <input type="checkbox" name="darkMode" />
    </div>
  );
};

export default Header;

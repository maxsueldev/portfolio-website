import { useTheme } from "../../hooks/useTheme";

// Icons
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import styles from "./Footer.module.css";

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`${styles.footerContainer} ${isDarkMode ? "" : styles.light}`}
    >
      <a href="https://www.linkedin.com/in/maxsuelfernandob/" target="_blank">
        <FaLinkedin className={styles.icon} />
      </a>
      <a href="https://github.com/maxsueldev" target="_blank">
        <FaGithub className={styles.icon} />
      </a>
      <a
        href="https://web.whatsapp.com/send?phone=5582999808600"
        target="_blank"
      >
        <FaWhatsapp className={styles.icon} />
      </a>
    </div>
  );
};

export default Footer;

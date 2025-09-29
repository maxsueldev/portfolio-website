// Icons
import linkedinIcon from "/assets/intro/social/linkedin.svg";
import githubIcon from "/assets/intro/social/github.svg";
import whatsapp from "/assets/intro/social/whatsapp.svg";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <a href="https://www.linkedin.com/in/maxsuelfernandob/" target="_blank">
        <img src={linkedinIcon} alt="Linkedin icon" />
      </a>
      <a href="https://github.com/maxsueldev" target="_blank">
        <img src={githubIcon} alt="GitHub icon" />
      </a>
      <a
        href="https://web.whatsapp.com/send?phone=5582999808600"
        target="_blank"
      >
        <img src={whatsapp} alt="WhatsApp icon" />
      </a>
    </div>
  );
}

export default Footer;

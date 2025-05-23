import { LateralNavbarContainer, LinkSection, ImageLogo } from "./style";

import logo from "/assets/logoM.png";

// Dark Mode Imports
// import sunImage from '../../img/darkMode/sun.svg';
// import moonImage from '../../img/darkMode/moon.svg';

function LateralNavbar() {
  return (
    <LateralNavbarContainer>
      <LinkSection href="./">
        <ImageLogo src={logo} alt="logo" />
      </LinkSection>

      <LinkSection href="#about">
        <svg
          fill="#F5F5F5"
          width="26px"
          height="26px"
          viewBox="0 0 128 128"
          id="Layer_1"
          version="1.1"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g>
            <path d="M64,1C29.3,1,1,29.3,1,64s28.3,63,63,63s63-28.3,63-63S98.7,1,64,1z M64,119C33.7,119,9,94.3,9,64S33.7,9,64,9   s55,24.7,55,55S94.3,119,64,119z" />
            <rect height="40" width="8" x="60" y="54.5" />
            <rect height="8" width="8" x="60" y="35.5" />
          </g>
        </svg>
        <p>Sobre</p>
      </LinkSection>

      <LinkSection href="#projects">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-folder"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
        </svg>
        <p>Projetos</p>
      </LinkSection>

      <LinkSection href="#experiences">
        <svg
          fill="#F5F5F5"
          width="26px"
          height="26px"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 6.28a1.23 1.23 0 0 0-.62-1.07l-6.74-4a1.27 1.27 0 0 0-1.28 0l-6.75 4a1.25 1.25 0 0 0 0 2.15l1.92 1.12v2.81a1.28 1.28 0 0 0 .62 1.09l4.25 2.45a1.28 1.28 0 0 0 1.24 0l4.25-2.45a1.28 1.28 0 0 0 .62-1.09V8.45l1.24-.73v2.72H16V6.28zm-3.73 5L8 13.74l-4.22-2.45V9.22l3.58 2.13a1.29 1.29 0 0 0 1.28 0l3.62-2.16zM8 10.27l-6.75-4L8 2.26l6.75 4z" />
        </svg>
        <p>Experiências</p>
      </LinkSection>

      <LinkSection href="#message">
        <svg
          width="28px"
          height="28px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 11H8.01M12 11H12.01M16 11H16.01M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20Z"
            stroke="#F5F5F5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p>Contato</p>
      </LinkSection>

      {/* <img onClick={changeDarkMode} className='darkModeIcon' src={sunImage} id='darkMode' alt="Sun Image" /> */}
    </LateralNavbarContainer>
  );
}

export default LateralNavbar;

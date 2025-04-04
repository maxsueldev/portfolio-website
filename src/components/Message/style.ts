import styled from "styled-components";

const MessageContainer = styled.div`
  display: var(--flex-display);
  flex-direction: column;
  justify-content: center;
  background-color: var(--secondary-color);
  color: var(--quaternary-color);
  padding: 3rem 2.5rem;
  height: 100%;

  h2 {
    color: var(--tertiary-color);
    text-align: center;
    margin-bottom: 0.4rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.4rem;
  }

  a {
    color: var(--quaternary-color);
    font-weight: bold;
  }

  form {
    text-align: center;
    margin-top: 1.6rem;

    input {
      width: 100%;
      height: 2rem;
      border-radius: 4px;
      outline: none;
      border: none;
      padding: 0 1rem;
    }

    textarea {
      width: 100%;
      height: 7rem;
      border-radius: 4px;
      outline: none;
      border: none;
      padding: 0.5rem 1rem;
      margin-top: 0.6rem;
    }

    button {
      background-color: var(--tertiary-color);
      border: none;
      border-radius: 4px;
      color: var(--white-color);
      cursor: pointer;
      font-size: 1rem;
      font-weight: bold;
      padding: 0.6rem 3rem;
      margin-top: 1.2rem;
    }
  }

  @media (481px <= width) {
    p {
      text-align: center;
    }
  }

  @media (768px <= width) {
    form {
      margin: 3rem 5rem;
    }
  }

  @media (1025px <= width) {
    p {
      font-size: 1.2rem;
    }

    form {
      margin: 3rem 10rem;

      button {
        font-size: 1rem;
      }
    }
  }

  @media (1281px <= width) {
    form {
      margin: 3rem 16rem;

      input,
      textarea {
        font-size: 1.2rem;
        padding: 1rem;
      }

      textarea {
        height: 10rem;
      }
    }
  }
`;

export { MessageContainer };

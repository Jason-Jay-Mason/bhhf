import { styled } from "@linaria/react";
import { useTheme } from "../hooks/useTheme";

//#region styles
const div = {};

div.wrapper = styled.div`
  input[type="checkbox"] {
    opacity: 0;
    position: absolute;
    left: -1000000rem;
  }
  input[type="checkbox"] + label {
    display: flex;
    position: relative;
    align-items: center;
  }

  input[type="checkbox"] + label::before {
    cursor: pointer;
    content: "\\263E  \\00a0";
    font-size: 17px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: black;
    width: 3.6rem;
    height: 1.7rem;
    background-color: #c4c4c4;
    border-radius: 1rem;
    margin: 0 1rem;
    border: 1px solid transparent;
  }
  input[type="checkbox"]:checked + label::before {
    justify-content: flex-start;
    align-items: flex-start;
    content: "\\00a0  \\263C ";
    color: white;
  }
  input[type="checkbox"]:focus + label::before {
  }
  input[type="checkbox"] + label::after {
    cursor: pointer;
    content: "";
    position: absolute;
    width: 1.9rem;
    height: 1.7rem;
    background-color: #5a5a5a;
    border-radius: 1rem;
    margin: 0 1rem;
    transition: all 0.2s ease;
    left: 0.1rem;
  }
  input[type="checkbox"]:checked + label::after {
    transform: translateX(88%);
    transition: all 0.2s ease;
  }
`;
//#endregion

const Toggle = ({ uniqueKey }) => {
  const [themeStatus, toggleTheme] = useTheme();
  const checked = themeStatus === "dark" ? true : false;
  const handleChange = (e) => {
    toggleTheme();
  };
  return (
    <div.wrapper>
      <input type="checkbox" id={"toggle-check" + uniqueKey} onChange={handleChange} checked={checked} />
      <label htmlFor={"toggle-check" + uniqueKey} aria-label="Toggle Website Theme"></label>
    </div.wrapper>
  );
};

export default Toggle;

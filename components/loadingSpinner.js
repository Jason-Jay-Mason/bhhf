import { styled } from "@linaria/react";
import { colors } from "../styles/theme";

//#region styles
const div = {};
div.spinner = styled.div`
  margin: auto auto;
  display: inline-block;
  position: relative;
  width: 70px;
  height: 70px;
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 50px;
    height: 50px;
    margin: 7px;
    border: 7px solid;
    border-color: ${colors.textBrown} transparent transparent transparent;
    border-radius: 50%;
    transform: rotate(180deg);
    animation: rotate 1.25s cubic-bezier(0.7, 0, 0.7, 1) infinite;
  }
  div:nth-child(1) {
    animation-delay: -0.2s;
  }
  div:nth-child(2) {
    animation-delay: -0.1s;
  }
  div:nth-child(3) {
    animation-delay: -0.1s;
  }
  @keyframes rotate {
    0% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(540deg);
    }
  }
`;
//#endregion

const Spinner = () => {
  return (
    <div.spinner>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div.spinner>
  );
};

export default Spinner;

import { styled } from "@linaria/react";
import { colors, theme, breakPoints, spacing } from "../styles/theme";

const div = {};
div.container = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  width: ${spacing.s45ish};
  height: 40px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  display: flex;
  margin-left: ${spacing.s30ish};
  @media ${breakPoints.sml} {
    width: ${spacing.s45ish};
    height: 40px;
  }
  .hamburger {
    width: 40px;
    height: 4px;
    background: ${(props) => (props.isActive ? "transparent" : colors.textBrown)};
    border-radius: 1px;
    transition: all 0.2s ease;
    transform: ${(props) => (props.isActive ? "translatey(0px)" : "translateX(0px)")};
    ::before,
    ::after {
      content: "";
      position: absolute;
      width: 40px;
      height: 4px;
      background: ${colors.textBrown};
      border-radius: 1px;
      transition: all 0.2s ease;
    }
    ::before {
      transform: ${(props) => (props.isActive ? `rotate(45deg) ` : "translateY(-0.8rem)")};
    }
    ::after {
      transform: ${(props) => (props.isActive ? `rotate(-45deg) ` : "translateY(0.8rem)")};
    }
  }
`;

const Hamburger = ({ isActive }) => {
  return (
    <>
      <div.container isActive={isActive}>
        <div className="hamburger" isActive={isActive}></div>
      </div.container>
    </>
  );
};

export default Hamburger;

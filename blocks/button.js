import { styled } from "@linaria/react";
import { spacing, breakPoints } from "../styles/theme";
import StandardButton from "../components/standardButton";

//#region styles
const div = {};
div.button = styled.div`
  padding: 0 ${spacing.s45ish} ${spacing.s75ish} ${spacing.s45ish};
  @media ${breakPoints.lrg} {
    padding: 0 ${spacing.s17ish} ${spacing.s75ish} ${spacing.s17ish};
  }
  text-align: center;
  button {
    margin: 0 auto;
  }
`;
//#endregion

const Button = ({ label, href }) => {
  return (
    <div.button>
      <StandardButton href={href}>{label}</StandardButton>
    </div.button>
  );
};

export default Button;

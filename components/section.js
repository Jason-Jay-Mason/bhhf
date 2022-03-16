import { styled } from "@linaria/react";
import { breakPoints, colors, spacing } from "../styles/theme";

//#region styles
const section = {};

section.default = styled.section`
  background-color: ${colors.backgroundWhite};

  .mainSection {
    background-color: ${colors.cloudBeige};
    margin: 0 ${spacing.s17ish};
  }
  @media ${breakPoints.lrg} {
    .mainSection {
      margin: 0;
    }
  }
`;
//#endregion

const Section = ({ children }) => {
  return (
    <section.default>
      <div className="mainSection">{children}</div>
    </section.default>
  );
};

export default Section;

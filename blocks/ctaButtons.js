import { styled } from "@linaria/react";
import { breakPoints, spacing, maxMin, colors } from "../styles/theme";
import Section from "../components/section";
import Button from "../components/standardButton";
import { useSetPopupSource, usePopupToggle } from "../hooks/usePopUpModal";

//#region styles
const div = {};
div.buttons = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ backgroundColor }) => {
    switch (backgroundColor) {
      case "None":
        return "none";
      case "White":
        return "white";
      case "Rain Cloud Beige":
        return colors.rainCloudBeige;
      case "Rain Cloud Beige 2":
        return colors.rainCloudBeigeTwo;
      default:
        return "none";
    }
  }};
  max-width: ${maxMin.containerMaxWidth};
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  padding: ${spacing.s120ish} 0;
  position: relative;
  z-index: 2;
  @media ${breakPoints.md} {
    flex-direction: column;
    padding: ${spacing.s75ish} 0;
  }
  button {
    margin: 0 ${spacing.s17ish};
    @media ${breakPoints.md} {
      margin: ${spacing.s10ish} 0;
    }
  }
`;
//#endregion

const CtaButtons = ({ mainCallToActionHref, mainCallToActionLabel, secondaryCallToActionHrefOrSource, secondaryCallToActionLabel, secondaryCallToActionVideoActive, backgroundColor }) => {
  const popupToggle = usePopupToggle();
  const setPopupSource = useSetPopupSource();
  return (
    <Section>
      <div.buttons backgroundColor={backgroundColor}>
        <Button href={mainCallToActionHref}>{mainCallToActionLabel}</Button>
        {secondaryCallToActionLabel && (
          <>
            {secondaryCallToActionVideoActive ? (
              <div
                onClick={() => {
                  popupToggle(true);
                  setPopupSource(secondaryCallToActionHrefOrSource);
                }}
              >
                <Button>{secondaryCallToActionLabel}</Button>
              </div>
            ) : (
              <Button href={secondaryCallToActionHrefOrSource}>{secondaryCallToActionLabel}</Button>
            )}
          </>
        )}
      </div.buttons>
    </Section>
  );
};

export default CtaButtons;

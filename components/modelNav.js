import { styled } from "@linaria/react";
import { css } from "linaria";
import Link from "next/link";
import { spacing, colors, fontSize, breakPoints, typography } from "../styles/theme";
import { Instagram, Linkedin, Youtube, Facebook, Maps } from "./svg";

//#region styles
const div = {};
div.modalNav = styled.div`
  background-color: ${colors.white};
  position: absolute;
  height: auto;
  width: 100%;
  padding: ${spacing.s10ish} 0 0 0;
  display: none;
  visibility: hidden;
  transform: translateX(-100vw);
  transition: all 0.2s ease-in-out;
  .navLink {
    ${typography.notoBaseSml}
    font-size: ${fontSize.baseSml};
    color: ${colors.textBrown};
    background-color: ${colors.white};
    border: 1px solid ${colors.textBrown};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 15px 0;
    margin: ${spacing.s30ish} auto;
    max-width: 90%;
    :hover {
      transition: all 0.2s ease-in-out;
      background-color: ${colors.cloudBeige};
    }
  }
  .social {
    background-color: ${colors.skinBeige};
    padding-top: 5px;
    .iconRow {
      margin: 0 auto;
      width: 80%;
      max-width: 400px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    svg {
      color: ${colors.textBrown};
    }
  }
  @media ${breakPoints.lrg} {
    display: block;
  }
`;

const active = css`
  transform: translateX(0);
  visibility: visible;
`;
//#endregion

const ModalNav = ({ isActive, links, setModalActive, socialLinks }) => {
  const { facebook, instagram, youtube, linkedin, maps } = socialLinks || {};
  return (
    <div.modalNav className={isActive ? active : null}>
      {links?.map((link, i) => {
        return (
          <Link key={link.title + "model1" + i} href={link.href ? link.href : "/"} passHref>
            <a
              onClick={() => {
                setModalActive(false);
              }}
              className="navLink"
            >
              <span>{link.title}</span>
            </a>
          </Link>
        );
      })}
      <div className="social">
        <div className="iconRow">
          <Link href={facebook || "/"} passHref>
            <a>
              <Facebook />
            </a>
          </Link>

          <Link href={maps || "/"} passHref>
            <a>
              <Maps />
            </a>
          </Link>

          {linkedin && (
            <Link href={linkedin || "/"} passHref>
              <a>
                <Linkedin />
              </a>
            </Link>
          )}

          <Link href={youtube || "/"} passHref>
            <a>
              <Youtube />
            </a>
          </Link>

          <Link href={instagram || "/"} passHref>
            <a>
              <Instagram />
            </a>
          </Link>
        </div>
      </div>
    </div.modalNav>
  );
};

export default ModalNav;

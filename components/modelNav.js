import { styled } from "@linaria/react";
import { css } from "linaria";
import Link from "next/link";
import { spacing, colors, fontSize, breakPoints, typography } from "../styles/theme";

//#region styles
const div = {};
div.modalNav = styled.div`
  background-color: ${colors.white};
  z-index: 15;
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
            <a aria-label="facebook">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height={25.5} width={25.5} xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
              </svg>
            </a>
          </Link>

          <Link href={maps || "/"} passHref>
            <a aria-label="google maps">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height={26} width={26} xmlns="http://www.w3.org/2000/svg">
                <path d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z"></path>
              </svg>
            </a>
          </Link>

          {linkedin && (
            <Link href={linkedin || "/"} passHref>
              <a aria-label="linkedin">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height={29} width={29} xmlns="http://www.w3.org/2000/svg">
                  <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path>
                </svg>
              </a>
            </Link>
          )}

          <Link href={youtube || "/"} passHref>
            <a aria-label="youtube">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height={32.6} width={32.6} xmlns="http://www.w3.org/2000/svg">
                <path d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"></path>
              </svg>
            </a>
          </Link>

          <Link href={instagram || "/"} passHref>
            <a aria-label="instagram">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height={29} width={29} xmlns="http://www.w3.org/2000/svg">
                <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"></path>
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </div.modalNav>
  );
};

export default ModalNav;

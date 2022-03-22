import { styled } from "@linaria/react";
import { useEffect, useState } from "react";
import { colors, maxMin, spacing, fontSize, breakPoints } from "../styles/theme";
import Link from "next/link";

import NavCta from "./navButton";
import { Logo, facebook, Facebook } from "./svg";
import Toggle from "./toggle";
import Hamburger from "./hamburger";
import ModalNav from "./modelNav";
import SubNav from "./subNav";

//#region styles
const div = {};
div.nav = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${colors.white};
  padding: 0 ${spacing.s30ish};
  .row {
    width: 100%;
    position: relative;
    display: flex;
    max-width: ${maxMin.contentMaxWidth};
    height: 105px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
  }
  .column-links,
  .column-logo,
  .column-cta-desktop {
    display: flex;
    align-items: center;
    width: 33%;
  }
  .column-links {
    justify-content: flex-start;
    a {
      margin: 0 ${spacing.s45ish} 0 0;
      padding-bottom: 2px;
      font-size: ${fontSize.baseSml};
      color: ${colors.textBrown};
      transition: all 0.2s ease;
      :hover {
        border-bottom: solid 1px ${colors.textBrown};
      }
      border-bottom: solid 1px transparent;
    }
    .selected {
      border-bottom: solid 1px ${colors.textBrown};
      transition: all 0.2s ease;
    }
  }
  .column-logo {
    justify-content: center;
    a {
      width: 100%;
    }
    svg {
      width: 100%;
    }
    .logo {
      width: 320px;
      filter: var(--icon-filter);
    }
  }
  .column-cta-desktop {
    justify-content: flex-end;
    a {
      line-height: 0;
    }
    svg {
      fill: ${colors.textBrown};
      margin: 0 ${spacing.s17ish};
      :hover {
        cursor: pointer;
      }
    }
  }

  .toggle {
    margin-right: -35px;
  }
  .column-cta-mobile {
    display: none;
    align-items: center;
    width: 50%;
    align-items: center;
    justify-content: flex-end;
    svg {
      filter: var(--icon-filter);
    }
  }

  @media ${breakPoints.lrg} {
    padding: 0 ${spacing.s17ish};
    .row {
      height: ${spacing.s75ish};
    }
    .column-logo {
      width: 50%;
      a {
        max-width: 220px;
      }
      .logo {
        width: ${spacing.s195ish};
      }
    }
    .column-links {
      display: none;
    }
    .toggle {
      display: none;
    }
    .column-cta-desktop {
      display: none;
    }
    .column-cta-mobile {
      display: flex;
    }
  }
`;

//#endregion

const NavBar = ({ header, businessInfo }) => {
  const [page, setPage] = useState(null);
  const [modalActive, setModalActive] = useState(false);

  let windowLocation = window.location.pathname;

  useEffect(() => {
    let location = window.location.pathname;
    setPage(location);
  }, [windowLocation]);

  return (
    <>
      <SubNav header={header} />
      <div.nav>
        <div className="row">
          <nav className="column-links">
            {header?.links?.map((link, i) => {
              return (
                <Link key={link.title + i + "headerlink"} href={link.href ? link.href : "/"} passHref>
                  <a onClick={() => setPage(link.href)} className={page === link.href ? "selected" : null}>
                    {link.title}
                  </a>
                </Link>
              );
            })}
          </nav>
          <div className="column-logo">
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
          </div>
          <div className="column-cta-desktop">
            <NavCta href={header?.ctaHref}>{header?.ctaLabel}</NavCta>
            <Link href={businessInfo?.socialLinks?.facebook || "/"} passHref>
              <a>
                <Facebook width="29px" height="29px" />
              </a>
            </Link>
            <div className="toggle">
              <Toggle className="toggle" uniqueKey={"11"} />
            </div>
          </div>
          <div className="column-cta-mobile">
            <Link href={`tel:${businessInfo?.contact?.phone}`} passHref>
              <a>
                <svg width="32" height="32" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.1879 1.625C12.1879 1.40952 12.2735 1.20285 12.4259 1.05049C12.5782 0.898062 12.7849 0.8125 13.0004 0.8125C16.2315 0.816053 19.3294 2.10123 21.6144 4.38598C23.8992 6.67095 25.1844 9.76863 25.1879 13C25.1879 13.2903 25.033 13.5585 24.7816 13.7037C24.5303 13.8488 24.2205 13.8488 23.9691 13.7037C23.7178 13.5585 23.5629 13.2903 23.5629 13C23.5599 10.1996 22.4458 7.51487 20.4656 5.53475C18.4854 3.55461 15.8008 2.44075 13.0004 2.4375C12.7849 2.4375 12.5782 2.35194 12.4259 2.19951C12.2735 2.04717 12.1879 1.8405 12.1879 1.625ZM12.1879 4.875C12.1879 4.65952 12.2735 4.45285 12.4259 4.30049C12.5782 4.14806 12.7849 4.0625 13.0004 4.0625C15.3699 4.06521 17.6416 5.00771 19.3171 6.6833C20.9926 8.35889 21.9351 10.6305 21.9379 13C21.9379 13.2903 21.783 13.5585 21.5316 13.7037C21.2803 13.8488 20.9705 13.8488 20.7191 13.7037C20.4678 13.5585 20.3129 13.2903 20.3129 13C20.3108 11.0613 19.5396 9.20248 18.1687 7.83163C16.7978 6.46072 14.9391 5.6896 13.0004 5.68748C12.7849 5.68748 12.5782 5.60192 12.4259 5.44949C12.2734 5.29715 12.1879 5.09047 12.1879 4.87498L12.1879 4.875ZM12.1879 8.125C12.1879 7.90952 12.2735 7.70285 12.4259 7.55049C12.5782 7.39806 12.7849 7.3125 13.0004 7.3125C14.5083 7.31428 15.954 7.91401 17.0202 8.98025C18.0864 10.0465 18.6862 11.4921 18.688 13.0001C18.688 13.2904 18.5331 13.5586 18.2817 13.7037C18.0303 13.8489 17.7206 13.8489 17.4692 13.7037C17.2178 13.5586 17.063 13.2904 17.063 13.0001C17.0617 11.923 16.6333 10.8904 15.8717 10.1288C15.1101 9.36726 14.0775 8.93882 13.0005 8.93757C12.785 8.93757 12.5783 8.852 12.4259 8.69958C12.2735 8.54724 12.188 8.34056 12.188 8.12507L12.1879 8.125Z"
                    fill="#343232"
                  />
                  <path
                    d="M23.5062 15.4942H19.5256C18.8587 15.4955 18.2084 15.7013 17.6622 16.0838C17.116 16.4663 16.7003 17.0071 16.4711 17.6333L15.9066 19.1845C13.9571 18.2003 12.1769 16.9119 10.6327 15.3677C9.08842 13.8236 7.79997 12.0434 6.81565 10.0941L8.36753 9.52913V9.52922C8.99341 9.29986 9.53397 8.88414 9.91643 8.33814C10.2988 7.79208 10.5046 7.14199 10.5063 6.47539V2.49414C10.5056 1.84787 10.2485 1.22833 9.79152 0.771381C9.33457 0.314344 8.71504 0.0573123 8.06876 0.0566406H2.44496C1.76797 0.0566406 1.12126 0.337462 0.659067 0.832156C0.196961 1.32685 -0.039336 1.99115 0.00661904 2.66654C0.205086 5.54583 0.908234 8.36769 2.08391 11.0034C3.3377 13.8641 5.11443 16.4656 7.32269 18.6743C9.53096 20.883 12.1323 22.6602 14.9927 23.9147C17.6293 25.0914 20.4525 25.7951 23.3331 25.9934C23.39 25.9973 23.4462 25.9997 23.5029 25.9997C24.1505 25.9988 24.7713 25.741 25.2289 25.2827C25.6865 24.8247 25.9437 24.2035 25.9439 23.5559V17.9317C25.9432 17.2854 25.6861 16.6659 25.2291 16.2089C24.7722 15.7519 24.1525 15.4949 23.5064 15.4942L23.5062 15.4942ZM24.3187 23.5557C24.3187 23.7819 24.2251 23.9979 24.0602 24.1528C23.8951 24.3075 23.6737 24.3872 23.4479 24.3729C20.7549 24.187 18.1159 23.5286 15.6513 22.4281C12.9738 21.2549 10.5391 19.5918 8.47207 17.5246C6.40511 15.4573 4.74237 13.0222 3.56955 10.3445C2.47031 7.88095 1.81295 5.24325 1.62768 2.55182C1.61151 2.32761 1.69005 2.10689 1.84426 1.94329C1.99898 1.77572 2.21681 1.68075 2.44492 1.68142H8.06872C8.28413 1.68168 8.49072 1.76733 8.64297 1.91967C8.79531 2.07192 8.88096 2.27851 8.88122 2.49392V6.47517C8.88046 6.80856 8.77754 7.13373 8.58636 7.40684C8.39517 7.67995 8.12484 7.88791 7.81178 8.00268L5.41848 8.87281C5.20588 8.95001 5.03508 9.11233 4.94731 9.32079C4.85945 9.52924 4.8626 9.76487 4.95587 9.97096C6.05834 12.4078 7.59227 14.6254 9.48334 16.5167C11.3746 18.4079 13.592 19.942 16.0288 21.0444C16.235 21.1379 16.4709 21.1411 16.6796 21.0533C16.8882 20.9655 17.0508 20.7946 17.1281 20.5817L17.9989 18.1887C18.1135 17.8757 18.3212 17.6053 18.5942 17.414C18.8672 17.2226 19.1923 17.1197 19.5256 17.1189H23.5062C23.7215 17.1191 23.9282 17.2048 24.0806 17.3571C24.2329 17.5094 24.3185 17.716 24.3187 17.9314V23.5557Z"
                    fill="#343232"
                  />
                </svg>
              </a>
            </Link>

            <div
              onClick={() => {
                setModalActive(!modalActive);
              }}
            >
              <Hamburger isActive={modalActive} />
            </div>
          </div>
        </div>
      </div.nav>
      <ModalNav links={header?.links} isActive={modalActive} setModalActive={setModalActive} socialLinks={businessInfo.socialLinks}></ModalNav>
    </>
  );
};

export default NavBar;

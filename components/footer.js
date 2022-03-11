import { styled } from "@linaria/react";
import { spacing, colors, fontSize, theme, breakPoints } from "../styles/theme";
import Link from "next/link";
import { Logo, Facebook, Linkedin, Youtube, Maps, Instagram } from "./svg";
import { isMobile } from "react-device-detect";

import Toggle from "./toggle";
import FooterMap from "./footerMap";

//#region styles
const footer = {};
footer.main = styled.footer`
  background-color: ${colors.white};
  .row {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: ${spacing.s195ish} 0 ${spacing.s195ish} 0;
    h4 {
      font-family: "Noto Serif";
      font-weight: 200;
      line-height: 100%;
      padding-bottom: ${spacing.s30ish};
      font-size: 20px;
      color: ${colors.headlineGrey};
    }
    p,
    a {
      font-weight: 100;
    }
    .contactColumn,
    .logoColumn,
    .links {
      text-align: center;
      p,
      a {
        line-height: 100%;
        font-size: 17;
        color: ${colors.linkGrey};
      }
    }
    .links {
      margin-top: -2px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 78%;
      padding-left: ${spacing.s75ish};
      .linkColumn {
        display: flex;
        flex-direction: column;
        a,
        p {
          font-size: ${fontSize.baseSml};
          line-height: 130%;
          padding-bottom: ${spacing.s30ish};

          :last-child {
            padding-bottom: 0;
          }
        }
      }
    }

    .contactColumn {
      display: flex;
      flex-direction: column;
      .textBlock {
        padding-bottom: ${spacing.s30ish};
        :last-child {
          padding-bottom: 0;
        }
        a,
        p {
          padding-bottom: ${spacing.s30ish};
          :last-child {
            padding-bottom: 0;
          }
        }
        a {
          color: ${colors.ribbonBlue};
        }
      }
    }

    .logoColumn {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .logoContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        .logo {
          svg {
            width: 100%;
          }
        }
        .social {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 350px;
          padding-top: ${spacing.s30ish};
          svg {
            padding: 4px;
          }
          a {
            line-height: 0;
          }
        }
      }

      .legal {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        max-width: 350px;
        a {
          color: #aeaeae;
          font-size: ${fontSize.baseXsml};
        }
      }
    }

    @media ${breakPoints.lrg} {
      padding: ${spacing.s120ish} 0 ${spacing.s75ish} 0;
      grid-template-columns: 1fr;
      .contactColumn,
      .logoColumn,
      .links {
        padding-bottom: ${spacing.s75ish};
        width: auto;
        padding-left: 0;
      }

      .contactColumn {
        a,
        p {
          font-size: ${fontSize.baseSml};
        }
      }

      .logoColumn {
        align-items: center;
        justify-content: flex-start;
        .logoContainer {
          width: 85%;
        }
        .social {
        }
        .legal {
          width: 85%;
          padding-top: ${spacing.s30ish};
          a {
            padding-bottom: ${spacing.s10ish};
          }
        }
      }

      .links {
        flex-direction: column;
        .linkColumn {
          padding-bottom: ${spacing.s75ish};
          :last-child {
            padding-bottom: 0;
          }
        }
      }
      .legal {
        padding-top: ${spacing.s75ish};
      }
    }
  }
`;

const div = {};
div.plug = styled.div`
  background-color: ${colors.skinBeige};
  text-align: center;
  padding: ${spacing.s30ish} 0;
`;

//#endregion

const Footer = ({ businessInfo, services, mainPageList, mapEnabled }) => {
  const dummyDayOfTheWeek = "monday";
  const { facebook, instagram, youtube, linkedin, maps } = businessInfo?.socialLinks || {};
  const { phone, email, address } = businessInfo?.contact || {};

  const getTodaysHours = (day) => {
    if (day !== null && businessInfo.hours) {
      return businessInfo?.hours[day];
    }
    return "Hours not available";
  };
  return (
    <>
      <footer.main>
        {mapEnabled && !isMobile && <FooterMap />}
        <div className="row">
          <div className="contactColumn">
            <h4>Contact</h4>
            <div className="textBlock">
              <p>{phone}</p>
              <p>{address}</p>
              <a>{email}</a>
            </div>
            <div className="textBlock">
              <h4>Todays Hours</h4>
              <p>{getTodaysHours(dummyDayOfTheWeek)}</p>
            </div>
          </div>
          <div className="logoColumn">
            <div className="logoContainer">
              <div className="logo">
                <Logo width={600} height={70} />
              </div>

              <div className="social">
                <Link href={facebook || "/"} passHref>
                  <a>
                    <Facebook color={colors.iconBlue} />
                  </a>
                </Link>

                <Link href={maps || "/"} passHref>
                  <a>
                    <Maps color={colors.iconBeige} />
                  </a>
                </Link>

                {linkedin && (
                  <Link href={linkedin || "/"} passHref>
                    <a>
                      <Linkedin color={colors.horseBrown} />
                    </a>
                  </Link>
                )}

                <Link href={youtube || "/"} passHref>
                  <a>
                    <Youtube color={colors.textBrown} />
                  </a>
                </Link>

                <Link href={instagram || "/"} passHref>
                  <a>
                    <Instagram color={colors.iconBeige} />
                  </a>
                </Link>
                <Toggle />
              </div>
            </div>

            <div className="legal">
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms of Service</Link>
              <Link href="/">CC Attribution</Link>
            </div>
          </div>
          <div className="links">
            <div className="linkColumn">
              <h4>Service</h4>
              {services.length && services?.map((service, i) => <p key={service.title + "i" + "footer"}>{service.title}</p>)}
            </div>
            <div className="linkColumn">
              <h4>Pages</h4>
              {mainPageList.length &&
                mainPageList?.map((page, i) => {
                  let uppercase = page[0].toUpperCase();
                  return (
                    <Link href={"/" + page} key={page + "i" + "footerpage"}>
                      {uppercase + page.substring(1, page.length)}
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </footer.main>
      <div.plug>Site Design By: Blah</div.plug>
    </>
  );
};

export default Footer;

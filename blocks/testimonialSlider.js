import { useState } from "react";
import { styled } from "@linaria/react";
import { breakPoints, colors, fontSize, maxMin, spacing } from "../styles/theme";
import Section from "../components/section";
import MainHeadline from "../components/mainHeadline";
import Image from "../components/image";
import { standardButtonCss } from "../components/standardButton";
import { useSetPopupSource, usePopupToggle } from "../hooks/usePopUpModal";

const sliderTransition = "all 300ms ease";

//#region styles
const div = {};
div.testimonialSlider = styled.div`
  position: relative;
  background-color: ${colors.rainCloudBeige};
  max-width: ${maxMin.containerMaxWidth};
  margin: 0 auto;
  border-radius: 4px;
  z-index: 2;
  --slider-image-width: 618px;
  --slider-image-spacing: 25px;
  @media ${breakPoints.xlrg} {
    --slider-image-width: 450px;
    --slider-image-spacing: 20px;
  }
  @media ${breakPoints.lrg} {
    --slider-image-width: 100%;
    max-width: 650px;
  }

  .testimonialSliderContainer {
    position: relative;
    width: 100%;
    background-color: ${colors.rainCloudBeigeTwo};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .quoteIcon {
      width: 100%;
      max-width: 630px;
    }
    svg {
      align-self: center;
      margin-bottom: ${spacing.s30ish};
    }
    @media ${breakPoints.lrg} {
      flex-direction: column-reverse;
      text-align: center;
    }
  }
  .testimonialTextContainer {
    width: 50%;
    height: 100%;
    padding: ${spacing.s45ish} ${spacing.s45ish};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media ${breakPoints.lrg} {
      width: 100%;
    }
  }
  .testimonialText {
    width: 100%;
    height: 100%;
    max-width: 630px;
    display: flex;
    flex-direction: column;
    @media ${breakPoints.lrg} {
      align-items: center;
    }
    span {
      color: ${colors.textBrown};
      margin-top: -200px;
      position: relative;
      top: -43px;
      right: -665px;
      background-color: ${colors.skinBeige};
    }
    p {
      color: ${colors.textBrown};
      padding-bottom: ${spacing.s30ish};
    }
    h5 {
      font-family: "Noto Serif";
      color: ${colors.textBrown};
      font-size: ${fontSize.sml};
      font-weight: lighter;
      border-bottom: 1px ${colors.textBrown} solid;
      width: fit-content;
      padding-bottom: ${spacing.s10ish};
    }
    h6 {
      font-family: "Snell Roundhand";
      font-size: ${fontSize.sml};
      color: ${colors.saddleBeige};
      font-weight: lighter;
      padding-top: ${spacing.s10ish};
      padding-left: 20px;
      margin-left: -15px;
    }
  }

  .testimonialVisible {
    animation: fadein none;
    animation-duration: 1s;
    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
  .testimonialHidden {
    display: none;
  }
  .imageSliderContainer {
    position: relative;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    transition: ${({ imgSelected, isForward, testimonialLength }) => {
      if ((isForward && imgSelected === 1) || (!isForward && imgSelected === testimonialLength)) {
        return "all 0";
      }
      return sliderTransition;
    }};
    transform: ${(props) => `translateX(calc(-1 * calc(var(--slider-image-width) + var(--slider-image-spacing)) * ${props.imgSelected}))`};
    @media ${breakPoints.lrg} {
      width: 100%;
    }
  }

  .imageContainer {
    position: relative;
    min-width: var(--slider-image-width);
    margin-right: var(--slider-image-spacing);
    height: 532px;
    img {
      border-radius: 2px;
    }
    @media ${breakPoints.lrg} {
      height: 70vw;
    }
    .watchVideoButtonDesktop {
      position: absolute;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      z-index: 10;
      bottom: 0;
      @media ${breakPoints.lrg} {
        display: none;
      }
      button {
        cursor: pointer;
        display: flex;
        background-color: ${colors.rainCloudBeige};
        flex-direction: row;
        align-items: center;
        justify-content: center;
        left: 35%;
        margin-bottom: ${spacing.s30ish};
        padding: ${spacing.s30ish} ${spacing.s45ish};
        font-size: ${fontSize.base};
        font-weight: 200;
        color: ${colors.textBrown};
        opacity: 0.8;
        transition: all 0.2s ease;
        font-weight: 400;
        :hover {
          opacity: 1;
        }
        svg {
          fill: ${colors.textBrown};
          margin: 0 10px 0 0;
        }
      }
    }
  }
  .watchVideoButtonMobile {
    display: none;
    width: 100%;
    @media ${breakPoints.lrg} {
      display: block;
    }
    button {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      min-width: 100%;
      margin: ${spacing.s30ish} 0 0 0;
      padding: ${spacing.s30ish} ${spacing.s17ish};
      font-size: ${fontSize.base};
      font-weight: 200;
      svg {
        margin: 0 10px 0 0;
      }
    }
  }
  .imageContainerSelected {
    transition: ${({ imgSelected, isForward, testimonialLength }) => {
      if ((isForward && imgSelected === 1) || (!isForward && imgSelected === testimonialLength)) {
        return "none";
      }
      return sliderTransition;
    }};
    opacity: 1;
  }
  .imageContainerDeselected {
    transition: ${({ imgSelected, isForward, testimonialLength }) => {
      if ((isForward && imgSelected === 1) || (!isForward && imgSelected === testimonialLength)) {
        return "none";
      }
      return sliderTransition;
    }};
    filter: grayscale(100%);
    opacity: 1;
  }
  .imageContainerHidden {
    transition: ${({ imgSelected, isForward, testimonialLength }) => {
      if ((isForward && imgSelected === 1) || (!isForward && imgSelected === testimonialLength)) {
        return "none";
      }
      return sliderTransition;
    }};
    opacity: 0;
    visibility: hidden;
  }

  .testimonialButtons {
    padding: ${spacing.s45ish} ${spacing.s45ish} ${spacing.s75ish} ${spacing.s45ish};
    margin: 0 auto;
    width: fit-content;
    button {
      transition: all 0.2s ease;
      cursor: pointer;
      background-color: ${colors.arrowButtonBeige};
      width: 56px;
      height: 56px;
      position: relative;
      margin: 0;
      padding: 0;
      :hover {
        background-color: ${colors.arrowButtonHoverBeige};
      }
      svg {
        position: relative;
        top: 2px;
      }
    }
    .forward {
      margin-left: 17px;
      svg {
        transform: rotate(-180deg);
        left: 3px;
      }
    }
    .back {
      margin-right: 17px;
      svg {
        left: -3px;
      }
    }
  }
`;
//#endregion

const TestimonialSlider = ({ standardHeadline, standardSubHeadline, testimonials, pageName }) => {
  const [imgSelected, setImgSelected] = useState(1);
  const [textSelected, setTextSelected] = useState(1);
  const [isForward, setIsForward] = useState(null);
  const [buttonDisable, setButtonDisable] = useState(false);
  const popupToggle = usePopupToggle();
  const setPopupSource = useSetPopupSource();

  if (testimonials) {
    const getTestimonials = (testimonials) => {
      let filteredByPage;
      let orderedByPriority = {};
      const final = [];
      //filter the testimonial by page and add them to the orderedByPriority object for automatic reordering by property (which are numbers)
      filteredByPage = testimonials.map((testimonial) => {
        if (testimonial && testimonial?.activePages?.length) {
          for (let i = 0; i < testimonial.activePages.length; i++) {
            if (testimonial?.activePages[i]?.title?.sys?.filename == pageName) {
              let priority = testimonial?.activePages[i]?.priority;
              //return { ...testimonial, priority: testimonial?.activePages[i]?.priority };
              if (orderedByPriority[priority]) {
                orderedByPriority[priority] = [...orderedByPriority[priority], testimonial];
                return;
              }
              orderedByPriority[priority] = [testimonial];
              return;
            }
          }
        }
      });
      //create the final array by looping through the properties of the orderedByPriority object
      Object.keys(orderedByPriority).map((testimonialArray) => {
        orderedByPriority[testimonialArray].map((testimonial) => {
          final.push(testimonial);
        });
      });

      return final;
    };

    const filteredTestimonials = getTestimonials(testimonials) || [];

    if (filteredTestimonials.length) {
      const testimonialsForSlider = [filteredTestimonials[filteredTestimonials?.length - 1], ...filteredTestimonials, filteredTestimonials[0], filteredTestimonials[1]];

      const nextOrPrevSelected = (direction) => {
        if (direction === "forward") {
          setIsForward(true);
          if (textSelected === filteredTestimonials?.length) {
            setTextSelected(1);
            setImgSelected(imgSelected + 1);
            return;
          }
          setImgSelected(imgSelected + 1);
          setTextSelected(textSelected + 1);
          return;
        }
        if (direction === "back") {
          setIsForward(false);
          if (textSelected === 1) {
            setImgSelected(imgSelected - 1);
            setTextSelected(filteredTestimonials?.length);
            return;
          }
          setImgSelected(imgSelected - 1);
          setTextSelected(textSelected - 1);
          return;
        }
      };

      const handleImageTransition = () => {
        setButtonDisable(false);
        if (imgSelected === 0) {
          setImgSelected(filteredTestimonials.length);
        }
        if (imgSelected === filteredTestimonials.length + 1) {
          setImgSelected(1);
        }
      };

      const getImageStyle = (index) => {
        if (imgSelected === index) {
          return "imageContainer imageContainerSelected";
        }
        if (imgSelected > index) {
          return "imageContainer imageContainerHidden";
        }
        if (imgSelected < index) {
          return "imageContainer imageContainerDeselected";
        }
      };
      return (
        <Section>
          <div.testimonialSlider imgSelected={imgSelected} testimonialLength={filteredTestimonials.length} isForward={isForward}>
            <MainHeadline headline={standardHeadline} subHeadline={standardSubHeadline} />
            <div className="testimonialSliderContainer">
              <div className="testimonialTextContainer">
                <div className="quoteIcon">
                  <svg width="28" height="23" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0.11377 22.7031V17.0312C0.11377 15.125 0.42627 13.1406 1.05127 11.0781C1.70752 8.98438 2.64502 6.98438 3.86377 5.07812C5.08252 3.14062 6.55127 1.46875 8.27002 0.0625L13.1919 3.48438C11.7544 5.54688 10.645 7.67188 9.86377 9.85938C9.08252 12.0156 8.69189 14.3594 8.69189 16.8906V22.7031H0.11377ZM14.8794 22.7031V17.0312C14.8794 15.125 15.1919 13.1406 15.8169 11.0781C16.4731 8.98438 17.4106 6.98438 18.6294 5.07812C19.8481 3.14062 21.3169 1.46875 23.0356 0.0625L27.9575 3.48438C26.52 5.54688 25.4106 7.67188 24.6294 9.85938C23.8481 12.0156 23.4575 14.3594 23.4575 16.8906V22.7031H14.8794Z"
                      fill="#BC946C"
                    />
                  </svg>
                </div>
                {testimonialsForSlider.map((testimonial, i) => {
                  let bodyLegth = testimonial?.testimonialBody.length;
                  let body = testimonial?.testimonialBody;
                  if (bodyLegth > 250) {
                    body = testimonial?.testimonialBody.slice(0, 240) + "...";
                  }
                  return (
                    <div key={testimonial?.title + i} className={i == textSelected ? `testimonialText testimonialVisible` : `testimonialText testimonialHidden`}>
                      <p>{body}</p>
                      <h5>{testimonial?.title}</h5>
                      <h6>{testimonial?.shortDescription}</h6>
                      {imgSelected === i && testimonial.videoActive && (
                        <div
                          onClick={() => {
                            popupToggle(true);
                            setPopupSource(testimonial?.videoSource);
                          }}
                          className="watchVideoButtonMobile"
                        >
                          <button className={standardButtonCss}>
                            <svg width="30" height="30" viewBox="0 0 66 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M33 0C14.7979 0 0 15.4705 0 34.5C0 53.5295 14.7979 69 33 69C51.2021 69 66 53.5295 66 34.5C66 15.4705 51.2021 0 33 0ZM43.6295 36.2432L28.0674 47.065C26.7472 48.0094 24.9412 46.9926 24.9412 45.3217V23.6775C24.9412 22.0071 26.7474 20.9903 28.0674 21.9342L43.6295 32.7565C44.8105 33.5554 44.8105 35.4442 43.6295 36.2432Z" fill="white" />
                            </svg>
                            Watch Story
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="imageSliderContainer" onTransitionEnd={handleImageTransition}>
                {testimonialsForSlider.map((testimonial, i) => {
                  return (
                    <div key={testimonial + i + "image"} className={getImageStyle(i)}>
                      <Image key={testimonial?.title + i} src={testimonial?.image} width={618} layout="fill" objectFit="cover" quality={80} alt={testimonial?.imageAlt} />
                      {imgSelected === i && testimonial.videoActive && (
                        <div
                          onClick={() => {
                            popupToggle(true);
                            setPopupSource(testimonial?.videoSource);
                          }}
                          className="watchVideoButtonDesktop"
                        >
                          <button>
                            <svg width="30" height="30" viewBox="0 0 66 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M33 0C14.7979 0 0 15.4705 0 34.5C0 53.5295 14.7979 69 33 69C51.2021 69 66 53.5295 66 34.5C66 15.4705 51.2021 0 33 0ZM43.6295 36.2432L28.0674 47.065C26.7472 48.0094 24.9412 46.9926 24.9412 45.3217V23.6775C24.9412 22.0071 26.7474 20.9903 28.0674 21.9342L43.6295 32.7565C44.8105 33.5554 44.8105 35.4442 43.6295 36.2432Z" />
                            </svg>
                            Watch Story
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="testimonialButtons">
              <button
                aria-label="Previous image in image slider"
                className="back"
                onClick={() => {
                  nextOrPrevSelected("back");
                  setButtonDisable(true);
                }}
                disabled={buttonDisable}
              >
                <svg width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.3455 15.8128C0.788889 15.4139 0.788888 14.5861 1.3455 14.1872L20.3789 0.545771C21.0406 0.0715207 21.9614 0.544467 21.9614 1.35857L21.9614 28.6414C21.9614 29.4555 21.0406 29.9285 20.3789 29.4542L1.3455 15.8128Z" fill="white" />
                </svg>
              </button>
              <button
                aria-label="Next image in image slider"
                className="forward"
                onClick={() => {
                  nextOrPrevSelected("forward");
                  setButtonDisable(true);
                }}
                disabled={buttonDisable}
              >
                <svg width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.3455 15.8128C0.788889 15.4139 0.788888 14.5861 1.3455 14.1872L20.3789 0.545771C21.0406 0.0715207 21.9614 0.544467 21.9614 1.35857L21.9614 28.6414C21.9614 29.4555 21.0406 29.9285 20.3789 29.4542L1.3455 15.8128Z" fill="white" />
                </svg>
              </button>
            </div>
          </div.testimonialSlider>
        </Section>
      );
    }
  }
  return (
    <Section>
      <MainHeadline headline={standardHeadline} subHeadline={standardSubHeadline} />
      <div className="testimonialSliderContainer">
        <p style={{ textAlign: "center" }}>There are not any tesimonials for this page yet. Please add them by page in the "Global" menu.</p>
      </div>
    </Section>
  );
};

export default TestimonialSlider;

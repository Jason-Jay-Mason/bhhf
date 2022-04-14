import { styled } from "@linaria/react";
import { useState } from "react";
import { spacing, colors, breakPoints } from "../styles/theme";
import Image from "./image";

//#region styles
const div = {};
div.imageDisplay = styled.div`
  width: 50%;
  position: relative;
  border-radius: 2px;
  @media ${breakPoints.lrg} {
    width: 100%;
  }
  .imgContainer {
    position: relative;
    height: 100%;
    width: 100%;
  }
  .imgTransition {
    animation: fadeIn 0.5s;
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
  img {
    z-index: 0;
    border-radius: 2px;
  }
  @media ${breakPoints.lrg} {
    height: 100vw;
    min-height: 550px;
  }
  :hover {
    .selectionBar {
      opacity: 0.8;
    }
  }
  @media ${breakPoints.lrg} {
    :hover {
      .selectionBar {
        opacity: 1;
      }
    }
  }
  .selectionBar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 0;
    z-index: 100;
    background-color: #333130;
    padding: 0 ${spacing.s17ish};
    width: 100%;
    min-height: 105px;
    height: 15%;
    max-height: 120px;
    opacity: 0.8;
    transition: all 0.5s ease;
    :hover {
      opacity: 0.9;
    }
    @media ${breakPoints.lrg} {
      opacity: 1;
      justify-content: center;
      background-color: ${colors.rainCloudBeige};
      :hover {
        opacity: 1;
      }
    }

    .imageList {
      cursor: pointer;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      justify-items: center;
      align-content: center;
      width: 100%;
      height: 20px;
      margin: 0 ${spacing.s17ish};
      @media ${breakPoints.lrg} {
        display: none;
      }
      .listItem {
        position: relative;
        padding: 0 6px;
        height: 90px;
        width: 95%;
        transition: filter 0.2s ease;
        filter: saturate(0);

        :hover {
          filter: saturate(1);
        }
        img {
          z-index: 0;
          border-radius: 1px;
        }
      }
      .selected {
        outline: 2px solid ${colors.buttonBlue};
        filter: saturate(1);
      }
    }
    .desktopButtonContainer {
      width: 56px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      @media ${breakPoints.lrg} {
        display: none;
      }
      button {
        transition: all 0.2s ease;
        cursor: pointer;
        background-color: ${colors.linkGrey};
        width: 100%;
        height: 56px;
        position: relative;
        opacity: 0.8;
        margin: 0;
        padding: 0;
        color: ${colors.backgroundWhite};
        :hover {
          background-color: ${colors.linkGrey};
          opacity: 1;
        }
        svg {
          fill: currentColor;
          position: relative;
          top: 2px;
        }
      }
    }

    .mobileButtonContainer {
      display: none;
      align-items: center;
      justify-content: center;
      @media ${breakPoints.lrg} {
        display: flex;
      }
      button {
        transition: all 0.2s ease;
        cursor: pointer;
        width: 56px;
        height: 56px;
        position: relative;
        background-color: ${colors.arrowButtonBeige};
        color: white;
        margin: 0 ${spacing.s10ish};
        svg {
          position: relative;
          top: 2px;
        }
        :hover {
          background-color: ${colors.arrowButtonHoverBeige};
        }
        .forward {
          margin-left: 17px;
        }
        .back {
          margin-right: 17px;
        }
      }
    }
    .forward {
      svg {
        transform: rotate(-180deg);
        left: 3px;
      }
    }
    .back {
      svg {
        left: -3px;
      }
    }
  }
`;

//#endregion

const ImageDisplay = ({ featuredImage }) => {
  const imgPerPage = 5;
  const [coordinate, setCoordinate] = useState([0, imgPerPage]);
  const [selectedImage, setSelectedImage] = useState(0);
  const handleImageChange = (i) => {
    if (i === selectedImage) {
      return;
    }
    setSelectedImage(i);
  };
  const handlePageChange = (direction) => {
    let start;
    let end;
    if (direction === "forward") {
      if (coordinate[1] >= featuredImage.length) {
        setCoordinate([0, imgPerPage]);
        return;
      }
      start = coordinate[0] + imgPerPage;
      end = coordinate[1] + imgPerPage;
      setCoordinate([start, end]);
      return;
    }

    if (direction === "back") {
      if (coordinate[0] === 0) {
        start = featuredImage.length - (featuredImage.length % imgPerPage);
        end = start + imgPerPage;
        setCoordinate([start, end]);
        return;
      }

      start = coordinate[0] - imgPerPage;
      end = coordinate[1] - imgPerPage;
      setCoordinate([start, end]);
      return;
    }
  };
  const handleImageMobile = (direction) => {
    if (direction == "forward") {
      if (selectedImage == featuredImage.length - 1) {
        setSelectedImage(0);
        return;
      }
      setSelectedImage(selectedImage + 1);
      return;
    }
    if (direction == "back") {
      if (selectedImage == 0) {
        setSelectedImage(featuredImage.length - 1);
        return;
      }
      setSelectedImage(selectedImage - 1);
      return;
    }
  };

  return (
    <>
      <div.imageDisplay className="image">
        <div className="imgContainer">
          <Image src={featuredImage && featuredImage[selectedImage] ? featuredImage[selectedImage].image : null} layout="fill" objectPosition={featuredImage && featuredImage[selectedImage].imagePosition ? featuredImage[selectedImage].imagePosition : "center"} objectFit="cover" quality={80} width={900} alt={featuredImage && featuredImage[selectedImage] ? featuredImage[selectedImage].title : ""} />
        </div>
        {featuredImage && featuredImage.length > 1 && (
          <div className="selectionBar">
            <div className="desktopButtonContainer">
              {coordinate[0] > 0 && (
                <button
                  className="back"
                  onClick={() => {
                    handlePageChange("back");
                  }}
                >
                  <svg width="22" height="30" viewBox="0 0 22 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.3455 15.8128C0.788889 15.4139 0.788888 14.5861 1.3455 14.1872L20.3789 0.545771C21.0406 0.0715207 21.9614 0.544467 21.9614 1.35857L21.9614 28.6414C21.9614 29.4555 21.0406 29.9285 20.3789 29.4542L1.3455 15.8128Z" fill="currentColor" />
                  </svg>
                </button>
              )}
            </div>

            <div className="imageList">
              {featuredImage.slice(coordinate[0], coordinate[1]).map((img, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => {
                      handleImageChange(i + coordinate[0]);
                    }}
                    className={`listItem ${selectedImage === i + coordinate[0] && "selected"}`}
                  >
                    <Image src={img.image ? img.image : null} layout="fill" objectFit="cover" objectPosition={featuredImage.imagePosition ? featuredImage.imagePosition : "center"} quality={80} width={180} alt={img.title} />
                  </div>
                );
              })}
            </div>
            <div className="desktopButtonContainer">
              {coordinate[1] < featuredImage.length && (
                <button
                  className="forward"
                  onClick={() => {
                    handlePageChange("forward");
                  }}
                >
                  <svg width="22" height="30" viewBox="0 0 22 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.3455 15.8128C0.788889 15.4139 0.788888 14.5861 1.3455 14.1872L20.3789 0.545771C21.0406 0.0715207 21.9614 0.544467 21.9614 1.35857L21.9614 28.6414C21.9614 29.4555 21.0406 29.9285 20.3789 29.4542L1.3455 15.8128Z" fill="currentColor" />
                  </svg>
                </button>
              )}
            </div>
            <div className="mobileButtonContainer">
              <button
                className="back"
                onClick={() => {
                  handleImageMobile("back");
                }}
              >
                <svg width="22" height="30" viewBox="0 0 22 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.3455 15.8128C0.788889 15.4139 0.788888 14.5861 1.3455 14.1872L20.3789 0.545771C21.0406 0.0715207 21.9614 0.544467 21.9614 1.35857L21.9614 28.6414C21.9614 29.4555 21.0406 29.9285 20.3789 29.4542L1.3455 15.8128Z" fill="currentColor" />
                </svg>
              </button>
              <button
                className="forward"
                onClick={() => {
                  handleImageMobile("forward");
                }}
              >
                <svg width="22" height="30" viewBox="0 0 22 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.3455 15.8128C0.788889 15.4139 0.788888 14.5861 1.3455 14.1872L20.3789 0.545771C21.0406 0.0715207 21.9614 0.544467 21.9614 1.35857L21.9614 28.6414C21.9614 29.4555 21.0406 29.9285 20.3789 29.4542L1.3455 15.8128Z" fill="currentColor" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div.imageDisplay>
    </>
  );
};

export default ImageDisplay;

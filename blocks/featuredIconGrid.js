import Section from '../components/section'
import MainHeadline from '../components/mainHeadline'
import { styled } from '@linaria/react'
import { breakPoints, colors, fontSize, maxMin, spacing } from '../styles/theme'
import BrandedBackgroundImg from '../components/brandedBackgroundImg'
import Svg from '../components/renderSvg'
//#region styles
const div = {}
div.iconGrid = styled.div`
  background-color: ${colors.rainCloudBeige};
  max-width: ${maxMin.containerMaxWidth};
  margin: 0 auto;
  .grid {
    padding: 0 ${spacing.s17ish};
    max-width: ${({ maxColumns }) => `${maxColumns * 330}px`};
    margin: 0 auto;
    display: grid;
    grid-template-columns: ${({ maxColumns }) => {
      switch (maxColumns) {
        case '1':
          return '1fr'
        case '2':
          return '1fr 1fr'
        case '3':
          return '1fr 1fr 1fr'
        case '4':
          return '1fr 1fr 1fr 1fr'
        default:
          return '1fr 1fr 1fr 1fr'
      }
    }};
    align-items: center;
    justify-items: center;
    @media ${breakPoints.lrg} {
      grid-template-columns: 1fr 1fr;
      max-width: 600px;
    }
    @media ${breakPoints.md} {
      grid-template-columns: 1fr;
    }
    .column {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: ${spacing.s10ish} 0;
      width: 95%;
      max-width: 300px;
      background-color: ${colors.rainCloudBeigeTwo};
      padding: ${spacing.s45ish} ${spacing.s17ish};
      @media ${breakPoints.md} {
        width: 100%;
      }
      h5 {
        font-weight: 300;
        font-size: ${fontSize.base};
        text-align: center;
        color: ${colors.textBrown};
      }
      object {
        filter: ${colors.iconFilter};
        padding-bottom: ${spacing.s17ish};
        max-width: 65px;
        max-height: 70px;
      }
    }
  }
`
//#endregion

const FeaturedIconGrid = ({
  standardHeadline,
  standardSubHeadline,
  backgroundImageSrc,
  maxColumns,
  iconSections,
}) => {
  return (
    <Section>
      <div.iconGrid maxColumns={maxColumns}>
        {standardHeadline && standardSubHeadline && (
          <MainHeadline
            headline={standardHeadline ? standardHeadline : 'No Headline...'}
            subHeadline={
              standardSubHeadline ? standardSubHeadline : 'No SubHeadline...'
            }
          />
        )}
        {/* <BrandedBackgroundImg src={backgroundImageSrc}> */}
        <div className='grid'>
          {iconSections &&
            iconSections.map((section) => {
              return (
                <div className='column'>
                  <Svg
                    alt={'Icon representing ' + section.title}
                    src={section.icon}
                  />
                  <h5>{section.title}</h5>
                </div>
              )
            })}
        </div>
        {/* </BrandedBackgroundImg> */}
      </div.iconGrid>
    </Section>
  )
}

export default FeaturedIconGrid

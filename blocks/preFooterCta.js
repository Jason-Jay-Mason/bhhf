import { styled } from "@linaria/react";
import { colors, spacing, breakPoints, fontSize } from "../styles/theme";
import Section from "../components/section";
import Button from "../components/standardButton";

//#region styles
const div = {};
div.preFooterCta = styled.div`
  position: relative;
  text-align: center;
  width: fit-content;
  margin: 0 auto;
  padding: ${spacing.s320ish} ${spacing.s17ish};
  @media ${breakPoints.lrg} {
    padding: ${spacing.s320ish} ${spacing.s17ish};
  }
  @media ${breakPoints.md} {
    padding: ${spacing.s120ish} ${spacing.s17ish};
  }
  h3,
  h4,
  p,
  button {
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }
  h3 {
    font-family: "Snell Roundhand";
    font-size: ${fontSize.lrg};
    font-weight: lighter;
    @media ${breakPoints.lrg} {
      font-size: ${fontSize.med};
    }
    @media ${breakPoints.md} {
      font-size: ${fontSize.sml};
    }

    padding-bottom: 4px;
    color: ${colors.saddleBeige};
  }
  h4 {
    font-family: "Noto Serif";
    font-size: ${fontSize.xlrg};
    font-weight: 500;
    letter-spacing: 3%;
    width: fit-content;
    margin: 0 auto;
    color: ${colors.textBrown};
    border-top: solid 2px #7c7c7c;
    padding-bottom: ${spacing.s30ish};

    @media ${breakPoints.lrg} {
      font-size: ${fontSize.med};
    }
    @media ${breakPoints.md} {
      font-size: ${fontSize.sml};
      padding-bottom: ${spacing.s30ish};
    }
  }
  p {
    margin: 0 auto;
    max-width: 600px;
    padding-bottom: ${spacing.s45ish};
    color: ${colors.textBrown};
  }
  .backgroundHeartCta {
    height: 140%;
    top: -20%;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    z-index: 0;
    @media ${breakPoints.lrg} {
      top: -20%;
    }
    @media ${breakPoints.md} {
      top: -30%;
    }
    svg {
      color: ${colors.rainCloudBeige};
    }
  }
`;
div.backgroundHeart = styled.div`
  height: 900px;
  right: 0;
  left: 0;
  top: 80px;
  position: absolute;
  z-index: 0;
  @media ${breakPoints.lrg} {
  }
  @media ${breakPoints.md} {
    top: -200px;
  }
  svg {
    color: ${colors.rainCloudBeige};
  }
`;
//#endregion

const PreFooterCta = ({ mainCallToActionLabel, standardHeadline, standardSubHeadline, mainCallToActionHref, hook }) => {
  return (
    <Section>
      <div.backgroundHeart>
        <svg stroke="none" fill="currentColor" height="100%" width="100%" viewBox="0 0 865 831" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path d="M432.375,830.572C431.819,830.567 431.265,830.545 430.715,830.501L430.476,830.492L430.282,830.47C429.676,830.42 429.073,830.35 428.473,830.263L428.373,830.252L428.124,830.204L427.28,830.062L426.588,829.911L426.31,829.857L426.165,829.819C425.594,829.684 425.028,829.531 424.468,829.361L424.297,829.314L424.027,829.219L423.431,829.029L422.266,828.594C421.714,828.376 421.17,828.14 420.635,827.882L420.446,827.8L420.23,827.685L419.771,827.463L418.613,826.832C418.085,826.529 417.567,826.208 417.063,825.864L416.875,825.747L416.709,825.625C416.21,825.285 415.72,824.927 415.243,824.552L414.25,823.734L413.839,823.361L413.642,823.193L413.5,823.053L413.251,822.828C311.369,725.786 152.798,551.064 152.798,551.064C152.598,550.843 152.4,550.619 152.206,550.39C100.405,489.504 63.909,439.211 48.561,407.536C3.272,339.72 -8.915,252.259 8.346,178.075C20.41,126.234 46.791,80.983 85.122,52.081L86.255,51.231L87.313,50.447L88.365,49.675L89.946,48.53L91.532,47.399L93.125,46.281L94.725,45.176L96.332,44.083L97.946,43.003L99.568,41.936L101.196,40.881L102.832,39.84L104.474,38.81L106.123,37.794L107.779,36.79L109.441,35.799L111.11,34.822L112.785,33.857L114.851,32.689L116.531,31.758L118.217,30.839L119.909,29.934L121.606,29.042L123.308,28.164L125.015,27.299L126.727,26.447L128.443,25.608L130.165,24.783L131.891,23.971L133.622,23.173L135.357,22.388L137.097,21.617L138.841,20.859L139.17,20.718C169.919,7.541 202.602,0.656 234.797,0.651L234.801,0.651C239.49,0.651 244.17,0.794 248.827,1.083L250.475,1.191L251.962,1.3L253.448,1.418L255.147,1.565L256.574,1.699L258.006,1.843L259.444,1.997L260.886,2.162L261.608,2.247C285.237,5.097 308.261,11.795 329.752,22.592L330.71,23.076L332.043,23.762L333.373,24.458L334.698,25.165L336.02,25.882L337.337,26.61L338.65,27.349L339.958,28.098L341.263,28.858L342.562,29.629L343.858,30.411L344.923,31.064C366.702,44.507 386.534,62.555 403.331,85.5C403.382,85.571 403.433,85.642 403.484,85.713L432.613,126.293L461.743,85.713C461.793,85.642 461.845,85.571 461.896,85.5C471.043,73.005 481.091,61.962 491.859,52.327L493.065,51.256L494.266,50.207L495.47,49.171L496.679,48.148L497.892,47.137L499.109,46.139L500.33,45.153L501.555,44.18L502.785,43.218L504.018,42.269L505.256,41.331L506.499,40.405L507.746,39.491L508.997,38.588L510.252,37.697L511.512,36.817L513.259,35.621L514.679,34.668L516.233,33.645L517.874,32.589L519.435,31.603L521.095,30.579L522.665,29.629L524.341,28.638L525.922,27.722L527.614,26.765L529.207,25.882L530.911,24.96L532.518,24.109L534.234,23.221L535.855,22.401L537.197,21.737L538.542,21.084L539.892,20.44L541.245,19.808L542.602,19.186L543.963,18.574L545.327,17.973L546.695,17.383L548.066,16.803L549.441,16.234L550.82,15.675L552.202,15.126L553.587,14.588L554.976,14.06L556.367,13.543L557.444,13.151C572.153,7.84 587.39,4.258 602.888,2.337L603.797,2.226L605.27,2.054L606.744,1.893L608.22,1.742L609.697,1.6L611.176,1.468L612.91,1.327L614.313,1.222L615.706,1.127L616.398,1.083C621.059,0.794 625.738,0.651 630.428,0.651L631.038,0.652C663.239,0.743 695.911,7.711 726.632,20.965L728.398,21.735L730.149,22.514L731.894,23.306L733.636,24.112L735.372,24.931L737.555,25.983L739.404,26.895L741.531,27.965L743.79,29.13L745.479,30.02L747.163,30.922L748.841,31.837L750.514,32.766L752.181,33.707L753.842,34.662L755.498,35.63L757.149,36.61L758.793,37.604L760.431,38.61L762.063,39.63L763.689,40.662L765.309,41.708L766.385,42.412L767.459,43.121L768.529,43.837L769.597,44.558L770.661,45.285L771.723,46.017L772.781,46.755L773.837,47.499L774.89,48.249L775.939,49.004L776.985,49.765L778.028,50.531L779.068,51.303L780.105,52.081C799.27,66.532 815.448,85.07 828.343,106.476C841.237,127.881 850.848,152.154 856.88,178.075C865.136,213.557 866.656,252.076 861.038,290.029C854.911,331.43 840.293,372.156 816.666,407.536C806.161,429.214 785.751,459.613 757.312,496.156C744.193,513.013 729.369,531.174 713.021,550.39L712.428,551.064C712.428,551.064 553.858,725.786 451.976,822.828L451.727,823.053L451.585,823.193L451.388,823.361L450.977,823.734L450.014,824.53L449.984,824.552C449.506,824.927 449.017,825.285 448.518,825.625L448.352,825.747L448.164,825.864C447.659,826.208 447.142,826.529 446.613,826.832L446.605,826.838L445.456,827.463L444.996,827.685L444.781,827.8L444.591,827.882C444.057,828.14 443.512,828.376 442.961,828.594L441.796,829.029L441.2,829.219L440.929,829.314L440.759,829.361C440.199,829.531 439.633,829.684 439.061,829.819L438.917,829.857L438.639,829.911L437.946,830.062L437.102,830.204L436.854,830.252L436.754,830.263C436.154,830.35 435.551,830.42 434.945,830.47L434.751,830.492L434.512,830.501C433.883,830.551 433.249,830.573 432.613,830.573L432.375,830.572ZM80.518,143.187C72.8,157.738 66.977,173.85 63.033,190.801C48.956,251.297 58.8,322.775 96.222,377.791C97.066,379.031 97.81,380.339 98.445,381.698C110.274,407.019 138.255,445.796 177.654,493.384L178.54,494.453C183.651,500.617 188.959,506.936 194.447,513.39C205.594,525.044 374.539,701.651 432.613,762.101C452.946,740.937 486.867,705.536 522.858,667.951L449.136,583.993C441.391,575.173 439.951,562.466 445.526,552.136L483.787,481.247L388.398,492.914C377.247,494.277 366.356,488.862 360.714,479.148C355.072,469.433 355.764,457.29 362.474,448.28L428.645,359.424L290.032,374.774C280.671,375.81 271.414,372.084 265.383,364.851L80.518,143.187ZM561.833,627.242C615.715,570.954 664.936,519.5 670.78,513.39C676.265,506.939 681.569,500.625 686.687,494.453L687.573,493.384C726.972,445.796 754.953,407.019 766.782,381.698C767.1,381.019 767.444,380.352 767.815,379.7C768.186,379.048 768.583,378.411 769.005,377.791L769.005,377.791C806.427,322.775 816.271,251.297 802.194,190.801C802.022,190.064 801.847,189.328 801.667,188.591C801.452,187.706 801.232,186.824 801.007,185.947C800.403,183.595 799.763,181.261 799.085,178.945C798.174,175.829 797.195,172.749 796.151,169.714C793.601,162.303 790.652,155.134 787.302,148.278L786.914,147.488C784.964,143.547 782.881,139.711 780.663,135.992L780.217,135.25C779.869,134.674 779.518,134.1 779.162,133.528C778.552,132.546 777.933,131.573 777.303,130.608C776.826,129.877 776.343,129.15 775.855,128.43L775.476,127.873C774.608,126.604 773.723,125.352 772.821,124.117C771.849,122.786 770.857,121.475 769.844,120.185C769.343,119.546 768.837,118.913 768.326,118.285C766.144,115.601 763.871,113.011 761.508,110.523L760.654,109.631L760.367,109.336C759.768,108.721 759.164,108.113 758.553,107.511C758.234,107.196 757.913,106.882 757.59,106.57C757.209,106.203 756.826,105.837 756.441,105.474C753.93,103.11 751.327,100.855 748.633,98.717L748.281,98.438L747.705,97.988C747.241,97.626 746.772,97.268 746.301,96.912L745.403,96.24L744.561,95.615L743.728,95.004L742.898,94.401L742.067,93.804L741.234,93.212L740.4,92.625L739.564,92.043L738.726,91.466L737.886,90.893L737.043,90.324L736.198,89.761L735.351,89.201L734.502,88.647L733.131,87.764L731.94,87.009L730.602,86.175L729.755,85.654L728.906,85.138L728.055,84.626L727.202,84.119L726.347,83.616L725.491,83.118L724.633,82.624L723.773,82.135L722.911,81.65L722.047,81.17L721.182,80.694L720.316,80.223L719.447,79.757L718.577,79.295L717.705,78.837L716.832,78.384L715.957,77.936L715.081,77.492L714.203,77.053L713.323,76.618L712.443,76.188L711.56,75.763L710.677,75.342L709.791,74.926L708.905,74.514L708.017,74.107L707.128,73.705L706.237,73.307L705.345,72.914L704.452,72.525C683.815,63.605 662.056,58.333 640.372,57.087L639.397,57.034L638.432,56.986L637.465,56.944L636.496,56.907L635.526,56.876L634.555,56.85L633.582,56.829L632.607,56.814L631.178,56.801L629.892,56.8L629.238,56.803C593.577,57.047 558.714,68.632 530.474,93.233L529.592,94.007L528.727,94.778L527.867,95.558L526.805,96.538L525.614,97.658L524.832,98.409L524.444,98.784C518.353,104.707 512.618,111.283 507.299,118.533C505.01,121.72 455.42,190.806 455.42,190.806C453.49,193.495 451.129,195.783 448.467,197.604C443.914,200.718 438.482,202.465 432.825,202.507L432.613,202.508C423.57,202.508 415.08,198.152 409.807,190.806L357.928,118.533C352.244,110.784 346.083,103.806 339.529,97.579L338.654,96.754L337.801,95.963L336.724,94.981L335.496,93.884L334.669,93.159L333.836,92.441L332.998,91.728L332.577,91.374C304.732,68.047 270.732,57.039 235.967,56.803L234.764,56.799L233.594,56.804L232.221,56.819L231.306,56.835L230.389,56.857L229.471,56.883L228.552,56.913L227.632,56.949L226.711,56.99L225.79,57.036C207.881,57.969 189.912,61.653 172.551,67.874L171.617,68.212L170.688,68.553L169.76,68.898L168.832,69.249L167.906,69.605L166.981,69.966L166.056,70.332L165.133,70.702L164.211,71.078L163.289,71.459L162.369,71.844L161.45,72.235L160.532,72.63L159.616,73.031L158.7,73.436L157.271,74.079L155.962,74.681L154.61,75.314L153.726,75.734L152.844,76.16L151.962,76.589L151.082,77.024L150.204,77.463L149.327,77.907L148.451,78.355L147.577,78.808L146.705,79.266L145.834,79.728L144.964,80.194L144.097,80.666L143.23,81.141L142.366,81.622L141.503,82.107L140.642,82.597L139.782,83.091L138.925,83.589L138.069,84.093C131.499,87.977 125.102,92.255 118.926,96.912C118.131,97.512 117.344,98.121 116.562,98.743L298.843,317.308L486.63,296.513C497.737,295.283 508.518,300.759 514.075,310.456C519.633,320.151 518.911,332.221 512.235,341.184L446.673,429.22L530.878,418.921C541.299,417.647 551.56,422.292 557.476,430.964C563.393,439.635 563.978,450.883 558.992,460.121L504.211,561.619L561.833,627.242Z" />
        </svg>
      </div.backgroundHeart>
      <div.preFooterCta>
        <h3>{standardHeadline ? standardHeadline : "No headline!"}</h3>
        <h4>{standardSubHeadline ? standardSubHeadline : "No headline!"}</h4>
        <p>{hook ? hook : "No hook. Please write a hook!"}</p>
        <Button href={mainCallToActionHref}>{mainCallToActionLabel ? mainCallToActionLabel : "No Label"}</Button>
      </div.preFooterCta>
    </Section>
  );
};

export default PreFooterCta;
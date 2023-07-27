import CardContainer from "./card-container";

const RentProperties = () => {
  return (
    <div className="self-stretch flex flex-col py-[86px] px-0 items-center justify-start gap-[39px] text-center text-21xl text-primary-800 font-purple-purse">
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px] md:pl-[60px] md:pr-[60px] md:box-border">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px]">
            Latest Properties of Rent
          </div>
          <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap py-0 px-2.5 items-center justify-center gap-[32px]">
          <CardContainer
            imageDimensions="/unsplashrlwe8f8anoc4@2x.png"
            imageDimensionsText="/car4.svg"
            imageDimensionsText2="/bathtub3.svg"
            imageDimensionsText3="/arrowsout2.svg"
            imageDimensionsText4="/sharenetwork4.svg"
            imageDimensionsText5="/heart3.svg"
            imageDimensionsText6="/plus4.svg"
            propMinWidth="355px"
            propMaxWidth="400px"
          />
          <CardContainer
            imageDimensions="/unsplashrlwe8f8anoc5@2x.png"
            imageDimensionsText="/car4.svg"
            imageDimensionsText2="/bathtub3.svg"
            imageDimensionsText3="/arrowsout2.svg"
            imageDimensionsText4="/sharenetwork4.svg"
            imageDimensionsText5="/heart3.svg"
            imageDimensionsText6="/plus4.svg"
            propMinWidth="355px"
            propMaxWidth="400px"
          />
          <CardContainer
            imageDimensions="/unsplashrlwe8f8anoc6@2x.png"
            imageDimensionsText="/car4.svg"
            imageDimensionsText2="/bathtub3.svg"
            imageDimensionsText3="/arrowsout3.svg"
            imageDimensionsText4="/sharenetwork5.svg"
            imageDimensionsText5="/heart4.svg"
            imageDimensionsText6="/plus5.svg"
            propMinWidth="355px"
            propMaxWidth="400px"
          />
          <CardContainer
            imageDimensions="/unsplashrlwe8f8anoc7@2x.png"
            imageDimensionsText="/car5.svg"
            imageDimensionsText2="/bathtub3.svg"
            imageDimensionsText3="/arrowsout3.svg"
            imageDimensionsText4="/sharenetwork6.svg"
            imageDimensionsText5="/heart5.svg"
            imageDimensionsText6="/plus6.svg"
            propMinWidth="355px"
            propMaxWidth="400px"
          />
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded flex flex-row items-start justify-start">
        <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
          Load more listing
        </div>
      </button>
    </div>
  );
};

export default RentProperties;

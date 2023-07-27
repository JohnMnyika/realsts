import PropertiesContainer from "./properties-container";

const PropertiesByArea = () => {
  return (
    <div className="self-stretch bg-primary-50 flex flex-col py-[70px] px-0 items-center justify-start text-center text-21xl text-primary-800 font-purple-purse">
      <div className="self-stretch flex flex-col pt-[75px] px-0 pb-0 box-border items-center justify-start gap-[54px] max-w-[95%px]">
        <div className="self-stretch flex flex-col py-0 px-[30px] box-border items-center justify-start gap-[24px] max-w-[95%px]">
          <div className="self-stretch relative leading-[48px]">
            Properties by Area
          </div>
          <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[86px] text-5xl text-gray-700 font-body-regular-600">
          <PropertiesContainer
            listingImageId="/icon.svg"
            homeActionText="Sell your home"
          />
          <PropertiesContainer
            listingImageId="/icon1.svg"
            homeActionText="Rent your home"
          />
          <PropertiesContainer
            listingImageId="/icon2.svg"
            homeActionText="Buy a home"
          />
          <PropertiesContainer
            listingImageId="/icon3.svg"
            homeActionText="Free marketing"
          />
        </div>
      </div>
    </div>
  );
};

export default PropertiesByArea;

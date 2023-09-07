import LatestProperties from "./latest-properties";

const RentPropertiesContainer = () => {
  return (
    <div className="self-stretch flex flex-col py-[86px] px-0 items-center justify-start gap-[39px] text-center text-21xl text-primary-800 font-purple-purse">
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px]">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px]">
            Latest Properties of Rent
          </div>
          <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-lightslategray">
          Explore from Apartments, builder floors, villas and more.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[40px] text-left text-base text-gray-white font-body-regular-600">
          <LatestProperties />
          <LatestProperties propBackgroundImage={`url("/card-21@3x.png")`} />
          <LatestProperties propBackgroundImage={`url("/card-31@3x.png")`} />
          <LatestProperties propBackgroundImage={`url("/card-41@3x.png")`} />
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

export default RentPropertiesContainer;

import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import PropertiesByArea from "../components/properties-by-area";
import RentProperties from "../components/rent-properties";
import RentPropertiesContainer from "../components/rent-properties-container";
import Form from "../components/form";
import Footer from "../components/footer";

const Landing = () => {
  return (
    <div className="relative w-full flex flex-row p-2.5 box-border items-start justify-start text-center text-21xl text-primary-800 font-purple-purse">
      <div className="flex-1 bg-gray-white flex flex-col items-center justify-start sm:flex-col">
        <Header
          imageDimensions="/houseline2.svg"
          hamburger
          showHamburgerMenuIcon={false}
          logoHeight="unset"
          houseLineIconJustifyContent="flex-start"
          houseLineIconGap="816px"
          nameFlex="1"
          hOMEFlex="1"
          aBOUTUSFlex="1"
        />
        <Hero />
        <div className="self-stretch h-[845px] flex flex-col py-[53px] px-[50px] box-border items-center justify-start gap-[45px]">
          <div className="self-stretch flex flex-col py-0 px-[30px] items-center justify-start gap-[24px] md:self-stretch md:w-auto">
            <div className="self-stretch relative leading-[48px]">
              Properties by Area
            </div>
            <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-lightslategray">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-row flex-wrap py-0 px-2.5 box-border items-start justify-center max-w-[95%px] text-left text-5xl text-gray-white font-body-regular-600">
            <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[24px] max-w-[1300px]">
              <div className="self-stretch flex flex-row items-start justify-center gap-[26px] lg:flex-row md:flex-col">
                <div className="flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url(/card-1@3x.png)] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
                  <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                    <div className="relative leading-[32px] font-semibold">
                      Centerville
                    </div>
                    <div className="relative text-base leading-[24px] text-center">
                      25 listings
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url(/card-2@3x.png)] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
                  <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                    <div className="relative leading-[32px] font-semibold">
                      Centerville
                    </div>
                    <div className="relative text-base leading-[24px] text-center">
                      25 listings
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url(/card-3@3x.png)] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
                  <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                    <div className="relative leading-[32px] font-semibold">
                      Centerville
                    </div>
                    <div className="relative text-base leading-[24px] text-center">
                      25 listings
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center gap-[24px] lg:flex-row md:flex-col">
                <div className="flex-1 rounded-lg h-[241px] flex flex-row p-2.5 box-border items-start justify-start relative bg-[url(/card-4@3x.png)] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
                  <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                    <div className="relative leading-[32px] font-semibold">
                      Arlington
                    </div>
                    <div className="relative text-base leading-[24px] text-center">
                      25 listings
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-lg h-[241px] flex flex-row p-2.5 box-border items-start justify-start relative bg-[url(/card-5@3x.png)] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
                  <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                    <div className="relative leading-[32px] font-semibold">
                      Centerville
                    </div>
                    <div className="relative text-base leading-[24px] text-center">
                      25 listings
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PropertiesByArea />
        <RentProperties />
        <RentPropertiesContainer />
        <Form />
        <Footer
          houseLine="/houseline3.svg"
          socialMediaLogo="/social-media-logo5.svg"
          socialMediaLogo1="/social-media-logo6.svg"
          socialMediaLogo2="/social-media-logo7.svg"
          socialMediaLogo3="/social-media-logo8.svg"
          socialMediaLogo4="/social-media-logo9.svg"
          propOverflow="unset"
        />
      </div>
    </div>
  );
};

export default Landing;

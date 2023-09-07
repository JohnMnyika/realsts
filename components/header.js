import { useMemo } from "react";

const Header = ({
  imageDimensions,
  hamburger,
  showHamburgerMenuIcon,
  logoWidth, 
  logoHeightIconJustifyContent,
  logoHeightIconGap,
  nameFlex,
  hOMEFlex,
  aBOUTUSFlex,
}) => {
  const topHeaderStyle = useMemo(() => {
    return {
      height: logoWidth, 
    };
  }, [logoWidth]);

  const topContainerStyle = useMemo(() => {
    return {
      justifyContent: logoHeightIconJustifyContent,
      gap: logoHeightIconGap,
    };
  }, [logoHeightIconJustifyContent, logoHeightIconGap]);

  const logoStyle = useMemo(() => {
    return {
      flex: nameFlex,
    };
  }, [nameFlex]);

  const navigationRightStyle = useMemo(() => {
    return {
      flex: hOMEFlex,
    };
  }, [hOMEFlex]);

  const navigationStyle = useMemo(() => {
    return {
      flex: aBOUTUSFlex,
    };
  }, [aBOUTUSFlex]);

  return (
    <header
      className="self-stretch bg-gray-white h-[150px] flex flex-row py-[22px] px-20 box-border items-center justify-center sticky w-full top-[0] [background:white] z-[2] text-center text-5xl text-primary-500 font-body-regular-600 lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border"
      style={topHeaderStyle}
    >
      <div
        className="flex-1 flex flex-row items-center justify-between"
        style={topContainerStyle}
      >
        <div
          className="flex flex-row items-center justify-center gap-[8px]"
          style={logoStyle}
        >
          <img className="relative w-[80px] h-[80px]" alt="" src={imageDimensions} /> {/* Adjust the width and height of the logo */}
        </div>
        <div
          className="flex flex-row items-center justify-end gap-[36px] text-sm text-primary-900 sm:flex"
          style={navigationRightStyle}
        >
          <div
            className="flex flex-row items-start justify-start gap-[30px] lg:hidden"
            style={navigationStyle}
          >
            <div className="relative leading-[22px]">HOME</div>
            <div className="relative leading-[22px]">ABOUT US</div>
            <div className="relative leading-[22px]">OUR AGENTS</div>
            <div className="relative leading-[22px] font-semibold">
              PROPERTIES
            </div>
            <div className="relative leading-[22px]">GALLERY</div>
            <div className="relative leading-[22px]">BLOG</div>
            <div className="relative leading-[22px]">CONTACT US</div>
            <div className="relative leading-[22px]">SEARCH</div>
          </div>
          {!hamburger && (
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] hidden flex-row items-center justify-center lg:flex">
              {showHamburgerMenuIcon && (
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0 md:flex"
                  alt=""
                  src="/notification.svg"
                />
              )}
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

import "antd/dist/antd.min.css";
import { Menu, Dropdown, Button } from "antd";
import {
  DownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  HeartOutlined,
  LeftOutlined,
  LockOutlined,
  MailOutlined,
  PaperClipOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  ReloadOutlined,
  RightOutlined,
  SearchOutlined,
  SendOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import CardContainer from "./card-container";

const SortByFilter = () => {
  return (
    <div className="self-stretch flex flex-col pt-16 px-0 pb-2 items-center justify-start gap-[95px] text-left text-base text-gray-black font-body-regular-600 lg:pl-[120px] lg:pr-[120px] lg:box-border md:pl-[60px] md:pr-[60px] md:box-border sm:pl-5 sm:pr-5 sm:box-border">
      <div className="w-[272px] flex flex-row items-center justify-start">
        <div className="flex flex-row items-end justify-start gap-[16px]">
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <img className="relative w-6 h-6" alt="" src="/listbullets.svg" />
            <img className="relative w-6 h-6" alt="" src="/squaresfour.svg" />
          </div>
          <div className="relative leading-[24px]">Sort by:</div>
          <Dropdown
            overlay={
              <Menu>
                {[
                  { value: "Popular properties" },
                  { value: "Latest properties" },
                  { value: "Recommended properties" },
                ].map((option, index) => (
                  <Menu.Item key={index}>
                    <a onClick={(e) => e.preventDefault()}>
                      {option.value || ""}
                    </a>
                  </Menu.Item>
                ))}
              </Menu>
            }
            placement="bottomLeft"
            trigger={["hover"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              {`Default Order `}
              <DownOutlined />
            </a>
          </Dropdown>
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center text-[14.51px] text-gray-700">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-center gap-[8px]">
          <CardContainer
            imageDimensions="/unsplashrlwe8f8anoc@2x.png"
            imageDimensionsText="/car.svg"
            imageDimensionsText2="/bathtub.svg"
            imageDimensionsText3="/arrowsout.svg"
            imageDimensionsText4="/sharenetwork.svg"
            imageDimensionsText5="/heart.svg"
            imageDimensionsText6="/plus.svg"
          />
          <CardContainer
            imageDimensions="/unsplashrlwe8f8anoc1@2x.png"
            imageDimensionsText="/car1.svg"
            imageDimensionsText2="/bathtub1.svg"
            imageDimensionsText3="/arrowsout.svg"
            imageDimensionsText4="/sharenetwork1.svg"
            imageDimensionsText5="/heart1.svg"
            imageDimensionsText6="/plus1.svg"
            propMinWidth="unset"
            propMaxWidth="unset"
          />
          <CardContainer
            imageDimensions="/unsplashrlwe8f8anoc2@2x.png"
            imageDimensionsText="/car2.svg"
            imageDimensionsText2="/bathtub2.svg"
            imageDimensionsText3="/arrowsout.svg"
            imageDimensionsText4="/sharenetwork2.svg"
            imageDimensionsText5="/heart1.svg"
            imageDimensionsText6="/plus2.svg"
            propMinWidth="unset"
            propMaxWidth="unset"
          />
          <CardContainer
            imageDimensions="/unsplashrlwe8f8anoc3@2x.png"
            imageDimensionsText="/car2.svg"
            imageDimensionsText2="/bathtub2.svg"
            imageDimensionsText3="/arrowsout.svg"
            imageDimensionsText4="/sharenetwork2.svg"
            imageDimensionsText5="/heart1.svg"
            imageDimensionsText6="/plus3.svg"
            propMinWidth="unset"
            propMaxWidth="unset"
          />
          <CardContainer
            imageDimensions="/unsplashrlwe8f8anoc@2x.png"
            imageDimensionsText="/car3.svg"
            imageDimensionsText2="/bathtub2.svg"
            imageDimensionsText3="/arrowsout1.svg"
            imageDimensionsText4="/sharenetwork3.svg"
            imageDimensionsText5="/heart2.svg"
            imageDimensionsText6="/plus3.svg"
            propMinWidth="unset"
            propMaxWidth="unset"
          />
          <CardContainer
            imageDimensions="/unsplashrlwe8f8anoc1@2x.png"
            imageDimensionsText="/car3.svg"
            imageDimensionsText2="/bathtub2.svg"
            imageDimensionsText3="/arrowsout1.svg"
            imageDimensionsText4="/sharenetwork3.svg"
            imageDimensionsText5="/heart2.svg"
            imageDimensionsText6="/plus3.svg"
            propMinWidth="unset"
            propMaxWidth="unset"
          />
          <CardContainer
            imageDimensions="/unsplashrlwe8f8anoc2@2x.png"
            imageDimensionsText="/car3.svg"
            imageDimensionsText2="/bathtub2.svg"
            imageDimensionsText3="/arrowsout1.svg"
            imageDimensionsText4="/sharenetwork3.svg"
            imageDimensionsText5="/heart2.svg"
            imageDimensionsText6="/plus3.svg"
            propMinWidth="unset"
            propMaxWidth="unset"
          />
          <CardContainer
            imageDimensions="/unsplashrlwe8f8anoc3@2x.png"
            imageDimensionsText="/car3.svg"
            imageDimensionsText2="/bathtub2.svg"
            imageDimensionsText3="/arrowsout1.svg"
            imageDimensionsText4="/sharenetwork3.svg"
            imageDimensionsText5="/heart2.svg"
            imageDimensionsText6="/plus3.svg"
            propMinWidth="unset"
            propMaxWidth="unset"
          />
        </div>
      </div>
      <div className="flex flex-row items-end justify-center gap-[8px] text-center text-primary-500">
        <button className="cursor-pointer [border:none] p-2.5 bg-primary-50 rounded flex flex-row items-start justify-start">
          <img className="relative w-6 h-6" alt="" src="/arrowleft.svg" />
        </button>
        <div className="rounded-10xs bg-primary-500 flex flex-col py-2.5 px-[9px] items-start justify-start text-gray-white">
          <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[26px]">
            1
          </div>
        </div>
        <div className="rounded-10xs bg-primary-50 flex flex-col py-2.5 px-[9px] items-start justify-start">
          <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[26px]">
            2
          </div>
        </div>
        <div className="rounded-10xs bg-primary-50 flex flex-col py-2.5 px-[9px] items-start justify-start">
          <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[26px]">
            3
          </div>
        </div>
        <div className="rounded-10xs bg-primary-50 flex flex-col py-2.5 px-[9px] items-start justify-start">
          <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[26px]">
            ...
          </div>
        </div>
        <div className="rounded-10xs bg-primary-50 flex flex-col py-2.5 px-[9px] items-start justify-start">
          <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[26px]">
            54
          </div>
        </div>
        <button className="cursor-pointer [border:none] p-2.5 bg-primary-500 rounded flex flex-row items-start justify-start">
          <img className="relative w-6 h-6" alt="" src="/arrowright.svg" />
        </button>
      </div>
    </div>
  );
};

export default SortByFilter;

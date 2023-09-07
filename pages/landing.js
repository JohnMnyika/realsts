import Header from "../components/header";
import SortByFilter from "../components/sort-by-filter";
import Footer from "../components/footer";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const Properties = () => {

  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

  const [properties, setProperties] = useState([])

  useEffect(() => {
    const fetchProperties = async () => {
      const { data, error } = await supabase
        .from("properties")
        .select("*")
        .order("id", { ascending: true });
      // console.log(data)
      setProperties(fetchProperties.data);
    };
    fetchProperties();
  }, []);


  return (
    <div className="relative w-full flex flex-row p-2.5 box-border items-start justify-start text-center text-33xl text-gray-white font-purple-purse">
      <div className="flex-1 bg-gray-white flex flex-col items-start justify-start">
        <Header
          imageDimensions="/entlogo.png"
          hamburger={false}
          showHamburgerMenuIcon
        />
        <div className="self-stretch h-60 flex flex-col items-center justify-center bg-[url(/category@3x.png)] bg-cover bg-no-repeat bg-[top]">
          <div className="flex flex-col items-center justify-start gap-[12px]">
            <div className="relative leading-[72px]">Properties</div>
            <div className="relative text-base leading-[24px] text-whitesmoke-200 font-body-regular-600">
              <span>{`Home / `}</span>
              <span className="font-medium text-gray-white">Properties</span>
            </div>
          </div>
        </div>
        <SortByFilter />
        <Footer
          logoHeight="/entlogo.png"
          socialMediaLogo="/social-media-logo.svg"
          socialMediaLogo1="/social-media-logo1.svg"
          socialMediaLogo2="/social-media-logo2.svg"
          socialMediaLogo3="/social-media-logo3.svg"
          socialMediaLogo4="/social-media-logo4.svg"
        />
      </div>
    </div>
  );
};

export default Properties;

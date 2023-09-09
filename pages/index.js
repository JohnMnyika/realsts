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
    <div className="relative w-full flex flex-col items-center justify-start">
      <Head>
        <title>Your Page Title</title>
        {/* Add your meta tags, CSS, and other head content here */}
      </Head>
      <Header imageDimensions="/entlogo.png" />
      <Hero />
      <div className="container mx-auto p-4 md:p-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">Properties by Area</h2>
          <p className="mt-2 text-lg text-gray-600">
            Explore Apartments, builder floors, villas, and more.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {/* Replace the placeholders with your property card components */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Property 1</h3>
            <p className="mt-2 text-gray-600">25 listings</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Property 2</h3>
            <p className="mt-2 text-gray-600">30 listings</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Property 3</h3>
            <p className="mt-2 text-gray-600">20 listings</p>
          </div>
          {/* Add more property cards as needed */}
        </div>
      </div>
      <PropertiesByArea />
      <RentProperties />
      <RentPropertiesContainer />
      <Form />
      <Footer
        logoHeight="/entlogo.png"
        socialMediaLogo="/social-media-logo5.svg"
        socialMediaLogo1="/social-media-logo6.svg"
        socialMediaLogo2="/social-media-logo7.svg"
        socialMediaLogo3="/social-media-logo8.svg"
        socialMediaLogo4="/social-media-logo9.svg"
        propOverflow="unset"
      />
    </div>
  );
};

export default Landing;

import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import AreaContainer from "../components/area-container";
import FeatureContainer from "../components/feature-container";
import RentPropertiesContainer from "../components/rent-properties-container";
import RentPropertiesForm from "../components/rent-properties-form";
import Contact from "../components/contact";
import Footer from "../components/footer";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>real estat</title>
        <meta name="description" content="discover your perfect home" />
      </Head>
      <div className="relative bg-gray-white w-full h-[5095.99px] flex flex-col items-center justify-start">
        <Header hamburger />
        <Hero />
        <AreaContainer />
        <FeatureContainer />
        <RentPropertiesContainer />
        <RentPropertiesForm />
        <Contact />
        <Footer
          houseLine="/houseline1.svg"
          socialMediaLogo="/social-media-logo.svg"
          socialMediaLogo1="/social-media-logo1.svg"
          socialMediaLogo2="/social-media-logo2.svg"
          socialMediaLogo3="/social-media-logo3.svg"
          socialMediaLogo4="/social-media-logo4.svg"
          propOverflow="unset"
        />
      </div>
    </>
  );
};

export default LandingPage;

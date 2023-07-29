import React from "react";
import Head from "next/head";
import Header from "../components/header";
import HeroSection from "../components/hero";
import AreaContainer from "../components/area-container";
import OurServices from "../components/ourServices";
import RentPropertiesContainer from "../components/rent-properties-container";
import Contact from "../components/contact";
import Footer from "../components/footer";
const LandingPage = () => {


  return (
    <>
      <Head>
        <title>Real Estate - Discover Your Perfect Home</title>
        <meta name="description" content="Discover your perfect home" />
      </Head>
      <div className="relative bg-gray-white w-full flex flex-col items-center justify-start">
        <Header hamburger />
        <HeroSection />
        <AreaContainer />
        <OurServices />
        <RentPropertiesContainer />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;

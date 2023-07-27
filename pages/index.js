import React from "react";
import Head from "next/head";
import Header from "../components/header";
import HeroSection from "../components/hero";
import AreaContainer from "../components/area-container";
import FeatureContainer from "../components/feature-container";
import RentPropertiesContainer from "../components/rent-properties-container";
import RentPropertiesForm from "../components/rent-properties-form";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { useGlobalContext } from "../components/context/GlobalContext";

const LandingPage = () => {
  const { currentPage, selectedOrderType, totalProperties, propertyData } =
    useGlobalContext();

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
        <FeatureContainer />
        <RentPropertiesContainer />
        <RentPropertiesForm />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;

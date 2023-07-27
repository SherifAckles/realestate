// PropertyList.js
import React from "react";
import { useGlobalContext } from "../components/context/GlobalContext";
import PropertiesGridContainer from "../components/properties-grid-container";

const PropertyList = () => {
  const { propertyData } = useGlobalContext();

  return (
    <div className="flex flex-col pt-16 pb-2 items-center justify-start gap-[95px] text-left text-base text-gray-black font-body-large-400 lg:pl-[120px] lg:pr-[120px]">
      <PropertiesGridContainer properties={propertyData} />
    </div>
  );
};

export default PropertyList;

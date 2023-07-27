import { useEffect } from "react";
import "antd/dist/antd.min.css";
import { Pagination } from "antd";
import Header from "../components/header";
import Footer from "../components/footer";
import PropertyListHeader from "../components/PropertyListHeader";
import PropertiesGridContainer from "../components/properties-grid-container";
import { useGlobalContext } from "../components/context/GlobalContext";

const Properties = () => {
  const {
    currentPage,
    setCurrentPage,
    totalProperties,
    propertyData,
    fetchProperties,
  } = useGlobalContext();

  useEffect(() => {
    fetchProperties();
  }, [currentPage]);

  return (
    
    <div className="bg-gray-white w-full flex flex-col items-start justify-start text-center text-33xl text-gray-white font-body-regular-400">
      <Header hamburger={true} />
      <div className="self-stretch h-60 flex flex-col items-center justify-center bg-[url(/category@3x.png)] bg-cover bg-no-repeat bg-top">
        <div className="flex flex-col items-center justify-start gap-[12px]">
          <div className="leading-[72px] font-semibold">Properties</div>
          <div className="text-base leading-[24px] text-whitesmoke-200 font-body-large-400">
            <span>{`Home / `}</span>
            <span className="font-medium text-gray-white">Properties</span>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col pt-16 pb-2 items-center justify-start gap-[95px] text-left text-base text-gray-black font-body-large-400 lg:pl-[120px] lg:pr-[120px]">
        <PropertyListHeader />
        <PropertiesGridContainer properties={propertyData} />
        <div className="flex flex-row items-end justify-center gap-[8px] text-center text-primary-500">
          <Pagination
            defaultCurrent={1}
            total={totalProperties}
            onChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
      <Footer />
    </div>
    
  );
};

export default Properties;

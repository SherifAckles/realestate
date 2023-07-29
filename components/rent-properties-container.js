import PropertyCard from "./property-card";
import Link from 'next/link'
const RentPropertiesContainer = () => {
  return (
    <div className="self-stretch flex flex-col py-[86px] px-0 items-center justify-start gap-[39px] text-center text-21xl text-primary-800 font-body-large-400">
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px] md:pl-[60px] md:pr-[60px] md:box-border">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Latest Properties of Rent
            <span className="block h-1 bg-blue-500 bg-opacity-80 w-14 mt-2 mx-auto"></span>

          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap py-0 px-2.5 items-center justify-center gap-[32px]">
          <PropertyCard
            imgUrl="/unsplashrlwe8f8anoc@2x.png"
           name='99 Allium place, Orlando, FL'
           price='956,877'
          />
          <PropertyCard
            imgUrl="/unsplashrlwe8f8anoc1@2x.png"
           name='99 Allium place, Orlando, FL'
           price='956,877'
          />
          <PropertyCard
            imgUrl="/unsplashrlwe8f8anoc2@2x.png"
           name='99 Allium place, Orlando, FL'
           price='956,877'
          />
          <PropertyCard
            imgUrl="/unsplashrlwe8f8anoc3@2x.png"
           name='99 Allium place, Orlando, FL'
           price='956,877'
          />
        </div>
      </div>
      <Link href='/properties' className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded flex flex-row items-start justify-start">
        <div className="relative text-base leading-[24px] font-medium font-body-large-400 text-gray-white text-center">
          Load more listing
        </div>
      </Link>
    </div>
  );
};

export default RentPropertiesContainer;

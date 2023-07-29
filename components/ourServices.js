import servicesData from './servicesData'

const OurServices = () => {
  return (
    <div className="self-stretch bg-primary-50 flex flex-col py-[70px] px-0 items-center justify-center text-center text-21xl text-primary-800 font-body-large-400">
      <div className="self-stretch flex flex-col pt-[75px] px-0 pb-0 box-border items-center justify-start gap-[54px] max-w-[95%px]">
        <div className="self-stretch flex flex-col py-0 px-[30px] box-border items-center justify-start gap-[24px] max-w-[95%px]">
          <div className="self-stretch relative leading-[48px] font-semibold">Our Services</div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            <p className="leading-relaxed text-Gray-500 ">
              Discover Your Dream Home with Us. Whether you want to sell, rent, or buy a property, our dedicated team
              of experts will guide you every step of the way. Take advantage of our free marketing services to ensure
              your property stands out in the market
            </p>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[86px] text-5xl text-gray-700">
          {servicesData.map((service, index) => {
            const { img, title, description } = service
            return <div
              key={index}
              className="rounded bg-gray-white shadow-[0px_24px_68px_rgba(59,_77,_129,_0.08)] w-[312px] flex flex-col py-[22px] px-4 box-border items-start justify-start min-w-[300px] max-w-[340px]"
            >
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                <img
                  className="self-stretch relative max-w-full overflow-hidden h-[78px] shrink-0"
                  alt=""
                  src={img}
                />
                <div className="flex flex-col items-start justify-start gap-[24px]">
                  <div className="relative leading-[32px] font-semibold">{title}</div>
                  <div className="relative text-base leading-[24px] text-lightslategray text-left flex items-end w-[268px]">
                    {description}
                  </div>
                  <button className="cursor-pointer border-none p-0 bg-transparent relative text-base leading-[24px] font-body-large-400 text-primary-500 text-left inline-block">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
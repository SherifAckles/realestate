import "antd/dist/antd.min.css";
import { Pagination, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { createClient } from "@supabase/supabase-js";

import Header from "../components/header";
import PropertiesGridContainer from "../components/properties-grid-container";
import Footer from "../components/footer";
import { useState, useEffect } from "react";

const defaultOrder = [
  {
    key: '1',
    label: (
      <a onClick={e => e.preventDefault()}>
        Popular Properties
      </a>
    )
  },
  {
    key: '2',
    label: (
      <a onClick={e => e.preventDefault()}>
        Latest Properties
      </a>
    )
  },
  {
    key: '3',
    label: (
      <a onClick={e => e.preventDefault()}>
        Recommended Properties
      </a>
    )
  },
]

const properties = () => {

  const client = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY);
  const [properties, setProperties] = useState([])
  useEffect(() => {
    const fetchProperties = async () => {
      const result = await client.from('properties').select('*')
      setProperties(result.data)
    }
    fetchProperties()
  }, [])

  return (
    <div className=" bg-gray-white w-full flex flex-col items-start justify-start text-center text-33xl text-gray-white font-body-regular-400">
      <Header hamburger={true} />
      <div className="self-stretch h-60 flex flex-col items-center justify-center bg-[url(/category@3x.png)] bg-cover bg-no-repeat bg-top">
        <div className="flex flex-col items-center justify-start gap-[12px]">
          <div className=" leading-[72px] font-semibold">
            Properties
          </div>
          <div className=" text-base leading-[24px] text-whitesmoke-200 font-body-large-400">
            <span>{`Home / `}</span>
            <span className="font-medium text-gray-white">Properties</span>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col pt-16 pb-2 items-center justify-start gap-[95px] text-left text-base text-gray-black font-body-large-400 lg:pl-[120px] lg:pr-[120px]">
        <div className=" flex flex-row items-center justify-start">
          <div className="flex flex-row flex-wrap items-end justify-start gap-[16px]">
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <img className=" w-6 h-6" alt="" src="/listbullets.svg" />
              <img className=" w-6 h-6" alt="" src="/squaresfour.svg" />
            </div>
            <div className=" leading-[24px]">Sort by:</div>
            <Dropdown
              menu={{ items: defaultOrder }}
              placement="bottomLeft"
              trigger={["hover"]}
            >
              <div onClick={(e) => e.preventDefault()}>
                {`Default Order `}
                <DownOutlined />
              </div>
            </Dropdown>

          </div>
        </div>
        <PropertiesGridContainer
          properties={properties}
        />
        <div className="flex flex-row items-end justify-center gap-[8px] text-center text-primary-500">
          <Pagination
            defaultCurrent={1}
            total={50}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default properties;

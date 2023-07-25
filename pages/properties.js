import "antd/dist/antd.min.css";
import { Pagination, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { createClient } from "@supabase/supabase-js";
import Header from "../components/header";
import PropertiesGridContainer from "../components/properties-grid-container";
import Footer from "../components/footer";
import { useState, useEffect } from "react";

const defaultOrder = [
  {
    key: '1',
    label: 'Popular Properties',
  },
  {
    key: '2',
    label: 'Latest Properties',
  },
  {
    key: '3',
    label: 'Recommended Properties',
  },
];

const Properties = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOrderType, setSelectedOrderType] = useState("");
  const [totalProperties, setTotalProperties] = useState(0);
  const [propertyData, setPropertyData] = useState([]);
  const client = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY);

  useEffect(() => {
    const fetchProperties = async () => {
      const offset = (currentPage - 1) * pageSize;
      let result;
      if (selectedOrderType) {
        result = await client
          .from("properties")
          .select("*")
          .eq("order_type_id", selectedOrderType)
          .range(offset, offset + pageSize - 1);
      } else {
        result = await client
          .from("properties")
          .select("*")
          .range(offset, offset + pageSize - 1);
      }
      setPropertyData(result.data);
    };

    const fetchTotalProperties = async () => {
      const { count } = await client.from("properties").select("id", { count: "exact" });
      setTotalProperties(count);
    };

    fetchProperties();
    fetchTotalProperties();
  }, [currentPage, selectedOrderType]);

  const handleMenuClick = (e) => {
    if (e.key === "all") {
      setSelectedOrderType(""); // Set to an empty string to view all properties
    } else {
      setSelectedOrderType(e.key); // Set the selected property type
    }
    setCurrentPage(1);
  };

  const pageSize = 4;

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
        <div className="flex flex-row items-center justify-start">
          <div className="flex flex-row flex-wrap items-end justify-start gap-[16px]">
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <img className="w-6 h-6" alt="" src="/listbullets.svg" />
              <img className="w-6 h-6" alt="" src="/squaresfour.svg" />
            </div>
            <div className="leading-[24px]">Sort by:</div>
            <Dropdown
              overlay={
                <Menu onClick={handleMenuClick} selectedKeys={[selectedOrderType || "all"]}>
                  {/* Added an additional menu item for "View All Properties" */}
                  <Menu.Item key="all">View All Properties</Menu.Item>
                  {defaultOrder.map((order) => (
                    <Menu.Item key={order.key}>{order.label}</Menu.Item>
                  ))}
                </Menu>
              }
              placement="bottomLeft"
              trigger={["click"]}
            >
              <div>
                {/* Changed "Default Order" to display the selected property type or "View All Properties" */}
                {selectedOrderType
                  ? defaultOrder.find((order) => order.key === selectedOrderType).label
                  : "View All Properties"}{" "}
                <DownOutlined />
              </div>
            </Dropdown>
          </div>
        </div>
        <PropertiesGridContainer properties={propertyData} />
        <div className="flex flex-row items-end justify-center gap-[8px] text-center text-primary-500">
          <Pagination
            defaultCurrent={1}
            total={totalProperties} // Use the dynamic totalProperties value
            onChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Properties;

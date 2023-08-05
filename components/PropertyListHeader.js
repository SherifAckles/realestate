// components/PropertyListHeader.js
import React from "react";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useGlobalContext } from "../context/GlobalContext";

const PropertyListHeader = () => {
  const { defaultOrder, selectedOrderType, handleMenuClick } = useGlobalContext();

  const selectedOrderLabel = selectedOrderType
    ? defaultOrder.find((order) => order.key === selectedOrderType).label
    : "All Properties";

  return (
    <div className="flex flex-row items-center justify-start">
      <div className="flex flex-row flex-wrap items-end justify-start gap-[16px]">
        <div className="flex flex-row items-start justify-start gap-[8px]">
          
        </div>
        <div className="leading-[24px]">Sort by:</div>
        <Dropdown
          overlay={
            <Menu onClick={handleMenuClick} selectedKeys={[selectedOrderType || "all"]}>
              <Menu.Item key="all">All Properties</Menu.Item>
              {defaultOrder.map((order) => (
                <Menu.Item key={order.key}>{order.label}</Menu.Item>
              ))}
            </Menu>
          }
          placement="bottomLeft"
          trigger={["click"]}
        >
          <div>
            {selectedOrderLabel}
            <DownOutlined />
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default PropertyListHeader;

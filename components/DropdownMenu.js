import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Link from 'next/link';
import React from "react";

const generateLabel = (text) => (
  <a onClick={(e) => e.preventDefault()}>
    {text}
  </a>
);

const citiesData = ['New York', 'Los Angeles', 'Chicago'];
const propertyTypeData = [
  'Studio apartments',
  'One-bedroom apartments',
  'Two-bedroom apartments',
  'Three-bedroom apartments',
  'Four or more bedroom apartments/houses',
];

const priceRangeData = ['$500-$2000', '$2500-$10000', '$10000+'];

const generateData = (data) => data.map((label, index) => ({ key: index.toString(), label: generateLabel(label) }));

export const cities = generateData(citiesData);
export const propertyType = generateData(propertyTypeData);
export const priceRange = generateData(priceRangeData);

const DropdownMenu = ({ items, title }) => {
  return (
    <div className=" flex flex-col items-start justify-start gap-[16px] text-center">
      <div className="relative leading-[24px] capitalize font-semibold">
        {title}
      </div>
      <Dropdown
        menu={{ items }}
        placement="bottomLeft"
        trigger={["hover"]}
      >
        <Link href='/' onClick={(e) => e.preventDefault()}>
          {`Select ${title.toLowerCase()} `}
          <DownOutlined />
        </Link>
      </Dropdown>
    </div>
  )
}

export default DropdownMenu;

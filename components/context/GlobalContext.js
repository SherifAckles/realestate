import { createContext, useContext, useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalContextProvider = ({ children }) => {
  const pageSize = 10;
  const client = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_KEY
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOrderType, setSelectedOrderType] = useState("");
  const [totalProperties, setTotalProperties] = useState([]);
  const [propertyData, setPropertyData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false);


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

  useEffect(() => {
    fetchProperties();
    fetchTotalProperties();
  }, [currentPage, selectedOrderType]);

  const handleMenuClick = (e) => {
    setSelectedOrderType(e.key === "all" ? "" : e.key);
    setCurrentPage(1);
  };

  const selectedOrderLabel = selectedOrderType
    ? defaultOrder.find((order) => order.key === selectedOrderType).label
    : "All Properties";

  return (
    <GlobalContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        selectedOrderType,
        setSelectedOrderType,
        totalProperties,
        setTotalProperties,
        propertyData,
        setPropertyData,
        pageSize,
        handleMenuClick,
        defaultOrder,
        selectedOrderLabel,
        fetchProperties,
        fetchTotalProperties,
        menuOpen,
        setMenuOpen,
        isLoggedIn,
        setIsLoggedIn,

      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

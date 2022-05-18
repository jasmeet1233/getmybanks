import React, { useContext, useState, useEffect } from "react";
import { fetchBankData } from "../core/api";

// address: "598  DHANVANT PLAZA BHUDWAR PETH PUNE- 411002";
// bank_id: 60;
// bank_name: "ABHYUDAYA COOPERATIVE BANK LIMITED";
// branch: "PUNE SERVICE BRANCH";
// city: "PUNE";
// district: "PUNE";
// ifsc: "ABHY0065101";
// isFavorite: false;
// state: "MAHARASHTRA";

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const [bankList, setBankList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredBanks, setFilteredBanks] = useState(bankList);
  const [filters, setFilters] = useState({
    city: "PUNE",
    filter: "IFSC",
    searchQuery: "",
  });

  // const divideArray = (arr, n) => {
  //   const result = new Array(Math.ceil(arr.length / n))
  //     .fill()
  //     .map((_) => arr.splice(0, n));
  //   return result;
  // };

  const getData = async () => {
    console.log(filters.city);
    const data = await fetchBankData(filters.city);
    setBankList(data);
    setFilteredBanks(data)
  };

  const changeCity = (city) => {
    setFilters({ ...filters, city: city, searchQuery: "" });
    getData(city);
  };

  const filterBySearch = (text) => {
          const data = bankList((bank) => {
            return bank[filters.filter]
              .toLowerCase()
              .startsWith(filters.searchQuery);
          });
          setFilteredBanks(data)
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <FilterContext.Provider value={{ bankList}}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

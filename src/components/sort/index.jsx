import React, {useState} from "react";
import { cities } from "../../core/constants";
import { filters } from "../../core/constants";

const Sort = () => {
    const [query, setQuery] = useState('');

    const onChange = (e) => {
        setQuery(e.target.value);
    }

  return (
    <div className="flex">
      <select
        name="cities"
        id="cities"
        className="cursor-pointer border-[1px] p-1 m-auto"
        placeholder="City"
      >
        {cities.map((city) => {
          return <option value={city.value}>{city.label}</option>;
        })}
      </select>

      <select
        name="filter"
        id="filter"
        className="cursor-pointer border-[1px] p-1 m-auto"
        placeholder="Filter"
      >
        {filters.map((filter) => {
          return <option value={filter.value}>{filter.label}</option>;
        })}
      </select>

      <div className="border-r">
        <input
          type="text"
          className="bg-gray-300 w-44 h-8 rounded pl-5"
          placeholder="Search..."
          value={query}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Sort;

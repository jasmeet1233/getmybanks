import React, {useEffect} from "react";
import Sort from "../components/sort";
import SideBar from "../components/sidebar";

const HomeContainer = () => {

  return (
    <div className="sm:px-40 pl-4 flex">
      <SideBar />

      <div>
        <div className=" pt-4 text-right pr-36">
          <Sort />
        </div>
        {/* <ProductList /> */}
      </div>


    </div>
  );
};

export default HomeContainer;

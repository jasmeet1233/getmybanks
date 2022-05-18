import React from "react";

const SideBar = () => {
  return (
    <div className="border-r-[1px] border-gray-400 min-w-[120px] max-w-[120px] h-[full] mt-10 pr-2 sm:pr-0">
      <div className="pb-8">
        <button
          className={`block pb-1 mb-5`}
        >
          All Banks
        </button>

        <button
          className={`block pb-1 `}
        >
          Favorites
        </button>
      </div>

    </div>
  );
};

export default SideBar;

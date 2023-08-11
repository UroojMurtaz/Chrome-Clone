import React, { useState, useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import MyContext from "../context/TabContext";

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const context = useContext(MyContext);

  const maxVisibleTabs = 5;
  const calculateTabWidth = () => {
    const visibleTabCount = Math.min(context?.tabValue.length, maxVisibleTabs);
    return `w-${Math.floor((1 / visibleTabCount) * 12)}/12`;
  };

  const tabWidth = calculateTabWidth();

  const handleCloseTab = (index: number) => {
    if (context) {
      const updatedTabs = context.tabValue.filter((_, tabIndex) => tabIndex !== index);
      context.setTabValue(updatedTabs);
    }
  };

  return (
    <div className="flex overflow-x-auto">
      {context?.tabValue.map((tab, index) => (
        <button
          key={index}
          className={`py-1 px-2 ${tabWidth} ${
            activeTab === index
              ? "rounded-t-lg border-b-2 border-white text-black text-sm bg-white"
              : "text-gray-500 text-sm bg-slate-100"
          } ${
            activeTab !== index
              ? "border-r-2 border-slate-400 px-4 border-l-0 rounded-t-lg ml-2"
              : ""
          } ${index === 0 ? "rounded-t-lg ml-2" : ""}`}
          onClick={() => setActiveTab(index)}
        >
          {React.createElement(tab.icon, { className: "inline-block mr-2" })}
          <span className="truncate">{tab.description}</span>
          <AiOutlineClose
            className="inline-block ml-2"
            onClick={() => handleCloseTab(index)}
          />
        </button>
      ))}
      <button
        className={`py-1 px-2 ${tabWidth} text-gray-800 rounded-t-lg bg-slate-100`}
      >
        <BiPlus className="inline-block mr-2 text-gray-600" />
      </button>
    </div>
  );
};

export default Tabs;

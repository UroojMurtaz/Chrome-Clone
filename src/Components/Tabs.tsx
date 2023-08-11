import React, { useState, useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import MyContext from "../context/TabContext";

interface Tab {
  label: string;
  // You can add more properties here if needed
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const { tabValue, setTabValue } = useContext(MyContext);
  console.log(tabValue);
 

  const maxVisibleTabs = 5; // Maximum number of tabs visible without text truncation

  const calculateTabWidth = () => {
    const visibleTabCount = Math.min(tabs.length, maxVisibleTabs);
    return `w-${Math.floor((1 / visibleTabCount) * 12)}/12`; // Calculate width fraction
  };

  const tabWidth = calculateTabWidth();

  const handleCloseTab = (index: number) => {
    const updatedTabs = tabValue.filter((tabIndex:number) => tabIndex !== index);
    setTabValue(updatedTabs);
  };

  return (
    <div className="flex overflow-x-auto">
      {tabValue.map((tab:any, index:number) => (
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
          <tab.icon className="inline-block mr-2" />
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

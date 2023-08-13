import React, { useState, useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import MyContext from "../context/TabContext";
import { useNavigate } from "react-router-dom";

interface Tab {
  icon: React.ElementType;
  description: string;
  id:number
}

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const context = useContext(MyContext);
  const navigate = useNavigate();

  const maxVisibleTabs = 5;
  const calculateTabWidth = () => {
    const visibleTabCount = Math.min(
      context?.tabValue.length || 0,
      maxVisibleTabs
    );
    return `w-${Math.floor((1 / visibleTabCount) * 12)}/12`;
  };

  const tabWidth = calculateTabWidth();

  const handleDragStart = (event: React.DragEvent, index: number) => {
    event.dataTransfer.setData("text/plain", index.toString());
    setActiveTab(index);
  };


  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event: React.DragEvent, targetIndex: number) => {
    event.preventDefault();
    const sourceIndex = Number(event.dataTransfer.getData("text/plain"));
    setActiveTab(targetIndex);

    if (sourceIndex !== targetIndex) {
      const updatedTabs = [...context?.tabValue as Tab[]];
      const [movedTab] = updatedTabs.splice(sourceIndex, 1);
      updatedTabs.splice(targetIndex, 0, movedTab);
      context?.setTabValue(updatedTabs);
    }
  };

  const handleCloseTab = (index: number) => {
    if (context) {
      const updatedTabs = context.tabValue.filter(
        (_, tabIndex) => tabIndex !== index
      );
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
          onDragStart={(event) => handleDragStart(event, index)}
          // onDragEnd={handleDragEnd}
          onDragOver={(event) => handleDragOver(event)}
          onDrop={(event) => handleDrop(event, index)}
          draggable
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
        onClick={() => navigate("/add-tab")}
      >
        <BiPlus className="inline-block mr-2 text-gray-600" />
      </button>
    </div>
  );
};

export default Tabs;

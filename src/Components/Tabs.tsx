import React, { useState } from 'react';
import { AiFillAlert,AiOutlineClose } from "react-icons/ai";

const Tabs = ({ tabs}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex">
      {tabs.map((tab:typeof tabs, index:number) => (
        <button
          key={index}
          className={`py-2 px-4 w-full ${
            activeTab === index
              ? 'rounded-t-lg border-b-2 border-white text-black bg-white '
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab(index)}
        >
          <AiFillAlert className="inline-block mr-2" />
          {tab.label}
          <AiOutlineClose className="inline-block ml-6" />
        </button>
      ))}
    </div>
  );
};

export default Tabs;

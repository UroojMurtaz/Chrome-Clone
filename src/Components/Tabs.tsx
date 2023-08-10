import React, { useState } from 'react';

const Tabs = ({ tabs}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex">
      {tabs.map((tab:typeof tabs, index:number) => (
        <button
          key={index}
          className={`py-2 px-4 ${
            activeTab === index
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab(index)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;

import React, { useState } from "react";
import { AiFillAlert, AiOutlineClose } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import { BsX } from "react-icons/bs";
import { FcAssistant } from "react-icons/fc";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="flex">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-1 px-2 w-64
            ${
              tabs.length <= 5
                ? "w-64"
                : "w-32"
            }
            ${
              activeTab === index
                ? "rounded-t-lg border-b-2 border-white text-black text-sm bg-white "
                : "text-gray-500 text-sm bg-slate-100"
            } ${
              index !== tabs.length && activeTab !== index
                ? "border-r-2 border-slate-400 px-4 border-l-0 rounded-t-lg ml-2"
                : ""
            }
            ${
              activeTab === 0
                ? "rounded-t-lg ml-2"
                : ""
            }
            `}
            onClick={() => setActiveTab(index)}
          >
            <FcAssistant className="inline-block mr-2" />
            {tab.label}
            <AiOutlineClose className="inline-block ml-6" />
          </button>
        ))}
        <button className="py-1 px-2 text-gray-800 rounded-t-lg bg-slate-100">
          <BiPlus className="inline-block mr-2 text-gray-600" />
        </button>
      </div>
    </>
  );
};

export default Tabs;

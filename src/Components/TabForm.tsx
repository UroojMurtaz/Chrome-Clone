import React, { useState, useContext } from "react";
import Select, { OptionProps } from "react-select";
import MyContext from "../context/TabContext";
import icons from "../Data/iconsData";

interface Icon {
  value: string;
  label: string;
  icon: React.ElementType;
}

const TabForm: React.FC = () => {
  const [selectedIcon, setSelectedIcon] = useState<Icon | null>(null);
  const [description, setDescription] = useState<string>("");
  const { tabValue, setTabValue } = useContext(MyContext);

  const addTab = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedIcon) {
      const obj = {
        icon: selectedIcon.value,
        description: description,
      };
      setTabValue([...tabValue, obj]);
    }
  };

  const Option: React.FC<OptionProps<Icon>> = ({ innerProps, label, data }) => (
    <div
      {...innerProps}
      className="flex items-center py-2 pl-3 pr-2 hover:bg-gray-200 cursor-pointer"
    >
      {React.createElement(data.icon, { className: "mr-3 text-blue-500" })}
      <span>{label}</span>
    </div>
  );

  return (
    <div className="h-screen bg-gradient-to-br from-blue-300 to-indigo-600 flex justify-center items-center w-full">
      <form>
        <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
          <div className="space-y-4">
            <h1 className="text-center text-2xl font-semibold text-gray-600">
              Add Tab
            </h1>
            <div>
              <label className="block mb-1 text-gray-600 font-semibold">
                Icon
              </label>
              <div>
                <Select
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      backgroundColor: "#e8eaf6",
                      border: "none",
                      hover: "red",
                      padding: "4px",
                      outline: "none",
                      borderRadius: "5px",
                      width: "100%",
                    }),
                  }}
                  defaultValue={selectedIcon}
                  onChange={setSelectedIcon}
                  options={icons}
                  components={{ Option }}
                />
              </div>
            </div>
            <div>
              <label className="block mb-1 text-gray-600 font-semibold">
                Description
              </label>
              <input
                type="text"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                placeholder="add tab description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <button
            onClick={addTab}
            className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default TabForm;

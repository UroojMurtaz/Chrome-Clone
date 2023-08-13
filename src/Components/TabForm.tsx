import React, { useState, useContext } from "react";
import Select, { OptionProps } from "react-select";
import MyContext from "../context/TabContext";
import icons from "../Data/iconsData";
import HeaderTitle from "./HeaderTitle";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Icon {
  value: React.ElementType;
  label: string;
  icon: React.ElementType;
}

const TabForm: React.FC = () => {
  const [selectedIcon, setSelectedIcon] = useState<Icon | null>(null);
  const [description, setDescription] = useState<string>("");
  const [formErrors, setFormErrors] = useState<{
    icon: string;
    description: string;
  }>({ icon: "", description: "" });
  const context = useContext(MyContext);

  const validateForm = () => {
    const errors = { icon: "", description: "" };

    if (!selectedIcon) {
      errors.icon = "Please select an icon";
    }

    if (!description) {
      errors.description = "Please provide a description";
    }

    setFormErrors(errors);
    return Object.values(errors).every((error) => error === "");
  };

  const addTab = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm() && selectedIcon && context) {
      const obj = {
        icon: selectedIcon.value,
        description: description,
        id: context.tabValue.length + 1,
      };
      context.setTabValue([...context.tabValue, obj]);
      toast.success("Tab Added Successfully", {
        position: "top-center",
        closeOnClick: true,
      });
      setSelectedIcon(null);
      setDescription("");
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
    <div className="h-screen bg-gradient-to-br from-blue-300 to-indigo-600  w-full p-10">
      <HeaderTitle title="Add Tab" />
      <form className="flex justify-center items-center m-10">
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
                  value={selectedIcon} // Use 'value' instead of 'defaultValue'
                  onChange={(newValue) => setSelectedIcon(newValue as Icon)} // Use 'as Icon' to ensure the correct type
                  options={icons as Icon[]}
                  components={{ Option }}
                />
              </div>
              <div className="text-red-500">
                {formErrors.icon && <p>{formErrors.icon}</p>}
              </div>
            </div>
            <div>
              <label className="block mb-1 text-gray-600 font-semibold">
                Description
              </label>
              <input
                type="text"
                value={description}
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                placeholder="Add tab description"
                onChange={(e) => setDescription(e.target.value)}
              />
              <div className="text-red-500">
                {formErrors.description && <p>{formErrors.description}</p>}
              </div>
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

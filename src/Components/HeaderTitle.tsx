import React from "react";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

interface Props {
    title: string;
}

const HeaderTitle: React.FC<Props> = ({title}) => {
  const navigate=useNavigate();
  return (
    <div className=" text-center ">
      <div className="flex justify-start items-center p-2">
        <BsFillHouseDoorFill className="text-white text-3xl mr-2" onClick={()=>navigate("/")} />
        <h1 className="ml-auto mr-auto text-3xl font-bold text-white">{title}</h1>
      </div>
    </div>
  );
};

export default HeaderTitle;

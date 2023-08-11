import { createContext } from "react";
type TabData = {
  icon:string,
  description:string,
};

const MyContext = createContext<TabData | null>(null);

export default MyContext;

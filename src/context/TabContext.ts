import { createContext, Dispatch, SetStateAction } from "react";

interface Tab {
  icon: React.ElementType;
  description: string;
}

interface MyContextType {
  tabValue: Tab[];
  setTabValue: Dispatch<SetStateAction<Tab[]>>;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export default MyContext;

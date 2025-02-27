import { createContext, Dispatch } from "react";

export const TabsContext = createContext<{
  activeTab: string;
  setActiveTab: Dispatch<React.SetStateAction<string>>;
}>({ activeTab: "", setActiveTab: () => {} });

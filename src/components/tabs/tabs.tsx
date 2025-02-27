import { useState, type PropsWithChildren } from "react";
import { TabsContext } from "./tabs-context";

export const Tabs = ({
  defaultValue = "",
  children,
}: PropsWithChildren<{ defaultValue?: string }>) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
};

export default Tabs;

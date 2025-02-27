import { use, type PropsWithChildren } from "react";
import { TabTriggerButton } from "./styles";
import { TabsContext } from "./tabs-context";

export const TabsTrigger = ({
  value,
  children,
}: PropsWithChildren & { value: string }) => {
  const { activeTab, setActiveTab } = use(TabsContext);

  return (
    <TabTriggerButton
      onClick={() => setActiveTab(value)}
      $active={activeTab === value}
    >
      {children}
    </TabTriggerButton>
  );
};

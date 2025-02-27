import { use, type PropsWithChildren } from "react";
import { TabsContext } from "./tabs-context";
import { TabsContentContainer } from "./styles";

export const TabsContent = ({
  className,
  value,
  children,
}: PropsWithChildren<{ className?: string; value: string }>) => {
  const { activeTab } = use(TabsContext);

  return activeTab === value ? (
    <TabsContentContainer className={className}>
      {children}
    </TabsContentContainer>
  ) : null;
};

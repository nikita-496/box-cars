import { Tabs, TabsProps } from "@/components/designSystem/tabs/Tabs";

export const TabsStyled = ({ tabItems, content, ...props }: TabsProps) => {
  return (
    <Tabs
      tabItems={tabItems}
      content={content}
      styleContent={{ padding: "2.125em 0 0" }}
      {...props}
    />
  );
};

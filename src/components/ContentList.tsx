import type { FC } from "react";
import type React from "react";

export type Content = {
  id: global.Id;
  title: string;
  body: string;
};

type ContentListProps = {
  contentList: Content[];
  renderContent: (content: Content, index: number) => React.ReactElement;
};

export const ContentList: FC<ContentListProps> = ({
  contentList,
  renderContent,
}) => <>{contentList.map((content, index) => renderContent(content, index))}</>;

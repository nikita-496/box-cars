import { FC, PropsWithChildren } from "react";

import { SectionContainer } from "@/components/sections/sections.styles";

type secionProps = PropsWithChildren;

export const Sections: FC<secionProps> = ({ children }) => {
  return (
    <section>
      <SectionContainer>{children}</SectionContainer>
    </section>
  );
};

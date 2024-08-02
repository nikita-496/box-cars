import type { FC } from "react";

import { IconContext } from "react-icons";
import { FaRegStar } from "react-icons/fa6";

export const StarYellow: FC = () => {
  return (
    <IconContext.Provider value={{ color: "gold", size: "0.9375rem" }}>
      <div>
        <FaRegStar />
      </div>
    </IconContext.Provider>
  );
};

import { FC } from "react";
import { IconContext } from "react-icons";
import { FaCircleCheck } from "react-icons/fa6";

export const CheckCircleWhite: FC = () => {
  return (
    <IconContext.Provider value={{ color: "#fff", size: "1.5rem" }}>
      <div>
        <FaCircleCheck />
      </div>
    </IconContext.Provider>
  );
};

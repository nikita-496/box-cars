import { FC } from "react";
import { Link } from "react-router-dom";

export const Footer: FC = () => {
  return (
    <footer>
      <span>
        &#169;
        <Link to="/">2024 Boxcars.com. All rights reserved.</Link>
      </span>
    </footer>
  );
};

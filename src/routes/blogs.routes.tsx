import { BlogLayout } from "@/layouts/BlogLayout";

import { AutoDetailing } from "@/pages/blogs/AutoDetailing";
import { BuyingGuides } from "@/pages/blogs/BuyingGuides";
import { CarNews } from "@/pages/blogs/CarNews";

export const blogsRoutes = {
  path: "blogs",
  element: <BlogLayout />,
  children: [
    {
      index: true,
      element: <AutoDetailing />,
    },
    {
      path: "car-news",
      element: <CarNews />,
    },
    {
      path: "buying-guides",
      element: <BuyingGuides />,
    },
  ],
};

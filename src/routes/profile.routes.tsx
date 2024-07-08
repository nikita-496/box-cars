import { ProfileLayout } from "@/layouts/ProfileLayout";

import { AddListings } from "@/pages/profile/AddListings";
import { CarDetails } from "@/pages/profile/CarDetails";
import { Dashboard } from "@/pages/profile/Dashboard";
import { Features } from "@/pages/profile/Features";
import { Location } from "@/pages/profile/Location";
import { Media } from "@/pages/profile/Media";
import { Messages } from "@/pages/profile/Messages";
import { MyFavorites } from "@/pages/profile/MyFavorites";
import { MyListings } from "@/pages/profile/MyListings";
import { MyProfile } from "@/pages/profile/MyProfile";
import { Price } from "@/pages/profile/Price";
import { SavedSearched } from "@/pages/savedSearched/SavedSearched";

export const profileRoutes = {
  path: "profile",
  element: <ProfileLayout />,
  children: [
    {
      index: true,
      element: <Dashboard />,
    },
    {
      path: "my-listings",
      element: <MyListings />,
    },
    {
      path: "add-listings",
      element: <AddListings />,
      children: [
        {
          index: true,
          element: <CarDetails />,
        },
        {
          path: "price",
          element: <Price />,
        },
        {
          path: "features",
          element: <Features />,
        },
        {
          path: "media",
          element: <Media />,
        },
        {
          path: "location",
          element: <Location />,
        },
      ],
    },
    {
      path: "favorites",
      element: <MyFavorites />,
    },
    {
      path: "saved-searched",
      element: <SavedSearched />,
    },
    {
      path: "messages",
      element: <Messages />,
    },
    {
      path: "settings",
      element: <MyProfile />,
    },
  ],
};

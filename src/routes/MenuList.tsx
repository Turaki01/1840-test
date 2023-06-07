import { Routes } from "./routes-constants";

export interface MenuListInterface {
  path: string;
  name: string;
}

export const MenuList: MenuListInterface[] = [
  {
    path: Routes.Dashboard,
    name: "Home"
  },
  {
    path: Routes.Profile,
    name: "My Profile"
  },
  {
    path: Routes.Connections,
    name: "Connections"
  },
  {
    path: Routes.Events,
    name: "Events"
  },
  {
    path: Routes.Calender,
    name: "Calender"
  },
  {
    path: Routes.Groups,
    name: "Groups"
  },
  {
    path: Routes.MarketPlace,
    name: "Marketplace"
  },
  {
    path: Routes.Courses,
    name: "Courses"
  },
  {
    path: Routes.Messages,
    name: "Messages"
  },
  {
    path: Routes.Settings,
    name: "Settings"
  },
];

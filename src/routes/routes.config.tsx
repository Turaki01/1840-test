import React from "react";
import { Routes } from "./routes-constants";

// unauthenticated route components
const Login = React.lazy(() => import("pages/Auth/Login"));
const Signup = React.lazy(() => import("pages/Auth/Signup"));

// authenticated route components
const Dashboard = React.lazy(() => import("pages/Dashboard/Home"));

export interface RoutesInterface {
  path: string;
  exact?: boolean;
  isOtherModule?: boolean;
  isPrivate: boolean;
  component: React.LazyExoticComponent<() => React.ReactElement> | any;
}

const AppRoutes: RoutesInterface[] = [
  // authentication
  { path: Routes.Login, exact: true, isPrivate: false, component: Login },
  { path: Routes.Signup, exact: true, isPrivate: false, component: Signup },

  // dashboard
  { path: Routes.Dashboard, exact: true, isPrivate: true, component: Dashboard }
];

export default AppRoutes;

import React from "react";
import { loginKey } from "utils/constants";
import storage from "utils/storage";
import UnauthenticatedWrapper from "./Auth/UnauthenticatedWrapper";

const RouteLayout = () => {
  const loadAuthenticatedApp = () => import("layout/AppLayout");
  const AuthenticatedApp = React.lazy(loadAuthenticatedApp);

  const token = storage.get(loginKey);
  return <div>{token ? <AuthenticatedApp /> : <UnauthenticatedWrapper />}</div>;
};

export default RouteLayout;

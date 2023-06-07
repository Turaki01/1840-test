import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { Routes } from "./routes-constants";
import AppRoutes from "./routes.config";

const UnauthenticatedRoutes = () => {
  // we filter to get the routes that are isPrivate:false
  const Unauthenticated = AppRoutes.filter((route) => !route.isPrivate);

  return (
    <>
      <div className="bg-[#0472ef] min-h-[100vh] md:flex justify-between items-center p-20">
        <div className="text-white max-w-[25rem]">
          <p>
            A Safe Place for Students to Connect With Each Other, Engage in
            Transactions, and Succeed During their Colleage Career{" "}
          </p>
        </div>
        <div className="bg-white w-[32rem] rounded-[13px] p-10">
          <Switch>
            {Unauthenticated.map((path) => (
              <Route
                key={path.path}
                exact={path.exact}
                path={path.path}
                component={path.component}
              />
            ))}

            <Redirect to={Routes.Login} />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default UnauthenticatedRoutes;

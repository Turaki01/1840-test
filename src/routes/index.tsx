import RouteLayout from "layout";
import React, { Suspense } from "react";

const AppRouter = () => {
  return (
    <Suspense fallback={null}>
      <RouteLayout />
    </Suspense>
  );
};

export default AppRouter;

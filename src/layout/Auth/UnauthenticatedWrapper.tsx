import React from "react";

//this Component adds our "Auth Index" Component to the have a lazy loading
const UnauthenticatedWrapper = () => {
  const UnauthenticatedApp = React.lazy(() => import("layout/Auth"));
  return (
    <div>
      <UnauthenticatedApp />
    </div>
  );
};

export default UnauthenticatedWrapper;

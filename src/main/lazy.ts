import React from "react";

/**
 * Assuming Main could be a route we should lazy load component for code-splitting
 * Lazy load Main
 */
export const Main: React.LazyExoticComponent<
  React.FunctionComponent<any>
> = React.lazy(() => import(/* webpackChunkName: "main-route" */ "./index"));

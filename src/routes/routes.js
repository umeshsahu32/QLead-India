import { lazy } from "react";

const PageNotFound = lazy(() =>
  import("../pages/PageNotFound/PageNotFound.jsx")
);

export { PageNotFound };

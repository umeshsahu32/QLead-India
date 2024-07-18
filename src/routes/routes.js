import { lazy } from "react";

const Faqs = lazy(() => import("../pages/Faqs/Faqs.jsx"));
const BlogsAndMedia = lazy(() =>
  import("../pages/BlogsMedia/BlogsAndMedia.jsx")
);
const PageNotFound = lazy(() =>
  import("../pages/PageNotFound/PageNotFound.jsx")
);

export { Faqs, BlogsAndMedia, PageNotFound };

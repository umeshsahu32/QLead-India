import { lazy } from "react";

const AboutUs = lazy(() => import("../pages/AboutUs/AboutUs.jsx"));
const Faqs = lazy(() => import("../pages/Faqs/Faqs.jsx"));
const BlogsAndMedia = lazy(() =>
  import("../pages/BlogsMedia/BlogsAndMedia.jsx")
);
const PageNotFound = lazy(() =>
  import("../pages/PageNotFound/PageNotFound.jsx")
);

export { AboutUs, Faqs, BlogsAndMedia, PageNotFound };

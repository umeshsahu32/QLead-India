import { lazy } from "react";

const AboutUs = lazy(() => import("../pages/AboutUs/AboutUs.jsx"));

const Faqs = lazy(() => import("../pages/Faqs/FaqPage.jsx"));

const BlogsAndMedia = lazy(() =>
  import("../pages/BlogsMedia/BlogsAndMedia.jsx")
);

const SuccessStories = lazy(() =>
  import("../pages/SuccessStories/SuccessStories.jsx")
);

const ContactUs = lazy(() => import("../pages/ContactUs/ContactUs.jsx"));

const PageNotFound = lazy(() =>
  import("../pages/PageNotFound/PageNotFound.jsx")
);

export {
  AboutUs,
  Faqs,
  BlogsAndMedia,
  PageNotFound,
  ContactUs,
  SuccessStories,
};

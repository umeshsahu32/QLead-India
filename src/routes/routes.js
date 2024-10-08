import { lazy } from "react";

const AboutUs = lazy(() => import("../pages/AboutUs/AboutUs.jsx"));

const Faqs = lazy(() => import("../pages/Faq2/Faq2.jsx"));

const BlogsAndMedia = lazy(() =>
  import("../pages/BlogsMedia/BlogsAndMedia.jsx")
);

const SuccessStories = lazy(() =>
  import("../pages/SuccessStories/SuccessStories.jsx")
);

const ContactUs = lazy(() => import("../pages/ContactUs/ContactUs.jsx"));

const Industries = lazy(() => import("../pages/Industries/Industries.jsx"));

const Packages = lazy(() => import("../pages/Packages/Packages.jsx"));

const Services = lazy(() => import("../pages/Services/Services.jsx"));

const TermsCondition = lazy(() =>
  import("../pages/TermsCondition/TermsCondition.jsx")
);

const PrivacyPolicy = lazy(() =>
  import("../pages/PrivacyPolicy/PrivacyPolicy.jsx")
);

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
  Packages,
  Industries,
  Services,
  TermsCondition,
  PrivacyPolicy,
};

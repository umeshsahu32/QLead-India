import { lazy } from "react";

const AboutUs = lazy(() => import("../pages/AboutUs/AboutUs.jsx"));
const AudienceGeneration = lazy(() =>
  import(
    "../components/ServicePageComponent/AudienceGeneration/AudienceGeneration.jsx"
  )
);
const Blogs = lazy(() => import("../pages/Blogs/Blogs.jsx"));
const BlogSummary = lazy(() => import("../pages/Blogs/BlogSummary.jsx"));
const ContactUs = lazy(() => import("../pages/ContactUs2/ContactUs2.jsx"));
const Faqs = lazy(() => import("../pages/Faq2/Faq2.jsx"));
const Industries = lazy(() => import("../pages/Industries/Industries.jsx"));
const LeadGeneration = lazy(() =>
  import("../components/ServicePageComponent/LeadGeneration/LeadGeneration.jsx")
);
const Media = lazy(() => import("../pages/Media/Media.jsx"));
const MeetingGeneration = lazy(() =>
  import(
    "../components/ServicePageComponent/MeetingGeneration/MeetingGeneration.jsx"
  )
);
const Packages = lazy(() => import("../pages/Packages/Packages.jsx"));
const PageNotFound = lazy(() =>
  import("../pages/PageNotFound/PageNotFound.jsx")
);
const PrivacyPolicy = lazy(() =>
  import("../pages/PrivacyPolicy/PrivacyPolicy.jsx")
);
const Services = lazy(() => import("../pages/Services/Services.jsx"));
const SuccessStories = lazy(() =>
  import("../pages/SuccessStories/SuccessStories.jsx")
);
const TermsCondition = lazy(() =>
  import("../pages/TermsCondition/TermsCondition.jsx")
);

export {
  AboutUs,
  AudienceGeneration,
  Blogs,
  BlogSummary,
  ContactUs,
  Faqs,
  Industries,
  LeadGeneration,
  Media,
  MeetingGeneration,
  Packages,
  PageNotFound,
  PrivacyPolicy,
  Services,
  SuccessStories,
  TermsCondition,
};

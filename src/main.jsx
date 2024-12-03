import React, { Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import PageLoader from "./components/PageLoader/PageLoader.jsx";
import {
  AboutUs,
  PageNotFound,
  Faqs,
  BlogsAndMedia,
  SuccessStories,
  Industries,
  Packages,
  TermsCondition,
  PrivacyPolicy,
  LeadGeneration,
  MeetingGeneration,
  AudienceGeneration,
  Media,
  Blogs,
  BlogSummary,
} from "./routes/routes.js";
import Layout from "./routes/Layout.jsx";

// import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import ContactUs2 from "./pages/ContactUs2/ContactUs2.jsx";
import Services from "./pages/Services/Services.jsx";
import { NotificationProvider } from "./components/NotificationToaster/NotificationContext.jsx";
import ScrollToTop from "./routes/ScrollToTop.jsx";
import Context from "./context/Context.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Layout />
      </>
    ),

    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<PageLoader />}>
            <App />
          </Suspense>
        ),
      },
      {
        path: "contact-us",
        element: (
          <Suspense fallback={<PageLoader />}>
            <ContactUs2 />
          </Suspense>
        ),
      },
      {
        path: "about-us",
        element: (
          <Suspense fallback={<PageLoader />}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "faqs",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Faqs />
          </Suspense>
        ),
      },
      {
        path: "blogs-and-media",
        element: (
          <Suspense fallback={<PageLoader />}>
            <BlogsAndMedia />
          </Suspense>
        ),
      },
      {
        path: "success-stories",
        element: (
          <Suspense fallback={<PageLoader />}>
            <SuccessStories />
          </Suspense>
        ),
      },
      {
        path: "industries-served",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Industries />
          </Suspense>
        ),
      },
      {
        path: "our-packages",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Packages />
          </Suspense>
        ),
      },
      {
        path: "our-services",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: "services/qualified-lead-generation",
        element: (
          <Suspense fallback={<PageLoader />}>
            <LeadGeneration />
          </Suspense>
        ),
      },
      {
        path: "services/qualified-meeting-generation",
        element: (
          <Suspense fallback={<PageLoader />}>
            <MeetingGeneration />
          </Suspense>
        ),
      },
      {
        path: "services/qualified-audience-generation",
        element: (
          <Suspense fallback={<PageLoader />}>
            <AudienceGeneration />
          </Suspense>
        ),
      },
      {
        path: "terms-and-conditions",
        element: (
          <Suspense fallback={<PageLoader />}>
            <TermsCondition />
          </Suspense>
        ),
      },
      {
        path: "privacy-policy",
        element: (
          <Suspense fallback={<PageLoader />}>
            <PrivacyPolicy />
          </Suspense>
        ),
      },
      {
        path: "media",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Media />
          </Suspense>
        ),
      },
      {
        path: "blogs",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Blogs />
          </Suspense>
        ),
      },
      {
        path: "blog/:title",
        element: (
          <Suspense fallback={<PageLoader />}>
            <BlogSummary />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<PageLoader />}>
            <PageNotFound />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <NotificationProvider>
        <RouterProvider router={router} />
      </NotificationProvider>
    </Context>
  </React.StrictMode>
);

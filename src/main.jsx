import React, { Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Layout from "./routes/Layout.jsx";
import { NotificationProvider } from "./components/NotificationToaster/NotificationContext.jsx";
import ScrollToTop from "./routes/ScrollToTop.jsx";
import PageLoader from "./components/PageLoader/PageLoader.jsx";
import Context from "./context/Context.jsx";
import {
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
} from "./routes/routes.js";

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
        path: "about-us",
        element: (
          <Suspense fallback={<PageLoader />}>
            <AboutUs />
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
        path: "contact-us",
        element: (
          <Suspense fallback={<PageLoader />}>
            <ContactUs />
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
        path: "industries-served",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Industries />
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
        path: "media",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Media />
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
        path: "our-packages",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Packages />
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
        path: "our-services",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Services />
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
        path: "terms-and-conditions",
        element: (
          <Suspense fallback={<PageLoader />}>
            <TermsCondition />
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

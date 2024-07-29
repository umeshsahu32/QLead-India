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
} from "./routes/routes.js";
import Layout from "./routes/Layout.jsx";

import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import ContactUs2 from "./pages/ContactUs2/ContactUs2.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import PageLoader from "./components/PageLoader/PageLoader.jsx";
import { AboutUs, PageNotFound, Faqs, BlogsAndMedia } from "./routes/routes.js";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Header />
        <App />
        <Footer />
      </Suspense>
    ),
  },

  {
    path: "about-us",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Header />
        <AboutUs />
        <Footer />
      </Suspense>
    ),
  },

  {
    path: "faqs",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Header />
        <Faqs />
        <Footer />
      </Suspense>
    ),
  },
  {
    path: "blogs-and-media",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Header />
        <BlogsAndMedia />
        <Footer />
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

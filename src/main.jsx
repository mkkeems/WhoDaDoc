import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, SearchResultsPage, ClinicProfilePage } from "./pages";
import GlobalStyles from "./styles/GlobalStyles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/results",
    element: <SearchResultsPage />,
  },
  {
    path: "/clinic-profile/:clinicId",
    element: <ClinicProfilePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>
);

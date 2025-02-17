import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/MainLayout.jsx";
import HomePage from "./routes/homePage.route.jsx";
import SingleBlogPost from "./routes/singleBlogPage.route.jsx"
import BlogPage from "./routes/blogPage.route.jsx"
import UseCasePage from "./routes/useCasePage.route.jsx";
import EnergyManagement from "./routes/energyMgt.route.jsx";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/use-cases",
        element: <UseCasePage />,
      },
      {
        path: "/energy-management",
        element: <EnergyManagement />,
      },
      {
        path: "/blogs",
        element: <BlogPage />,
      },
      {
        path: "/singleblog",
        element: <SingleBlogPost />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);

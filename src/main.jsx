import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/MainLayout.jsx";
import HomePage from "./routes/homePage.route.jsx";
import LoginPage from "./routes/loginPage.route.jsx";
import RegisterPage from "./routes/registerPage.route.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import Editor from "./routes/editorPage.route.jsx";
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
        element: <HomePage />,
      },
      {
        path: "/energy-management",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/editor",
        element: <Editor />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    ,
  </StrictMode>
);

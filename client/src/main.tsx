import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Cart,
  ErrorPage,
  LandingPage,
  Login,
  ProductDetails,
  Products,
  Register,
  Logout,
  User,
} from "./components/index.ts";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        index: true,
        element: <LandingPage />,
      },
      // {
      //   path: "/",
      //   children: [
      //     {
      //       path: "register",
      //       element: <Register />,
      //     },
      //     {
      //       path: "login",
      //       element: <Login />,
      //     },
      //     {
      //       path: "logout",
      //       element: <Logout/>,
      //     },
      //     {
      //       path: "user",
      //       element: <User/>
      //     },
      //   ],
      // },
      {
        path: "/products",
        children: [
          {
            path: "",
            index: true,
            element: <Products />,
          },
          {
            path: ":id",
            element: <ProductDetails />,
          },
        ],
      },

      // todo:: update here
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/user",
        element: <User />,
      },
      // todo:: to here
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/auth",
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        index: true,
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

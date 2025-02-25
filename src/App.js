import "./styles.css";

import Body from "./component/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import About from "./component/About";
import Header from "./component/Header";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
  },
  {
    path: "/body",
    element: <Body />,
  },
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;

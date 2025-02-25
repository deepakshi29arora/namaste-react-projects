import "./styles.css";

import Body from "./component/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import About from "./component/About";
import Header from "./component/Header";

// import App from "./App";

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
  //   return (
  //     // <div className="App">
  //     // <BrowserRouter>
  //     //   <Routes>
  //     //     <Route path="/" element={<Header />} />
  //     //     <Route path="/component" element={<Body />} />
  //     //   </Routes>
  //     // </BrowserRouter>
};

export default App;

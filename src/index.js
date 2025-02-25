// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     {/* <App /> */}
//     <RouterProvider router={appRouter} />
//   </StrictMode>
// );

import "./styles.css";
import Header from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter, ReactProvider } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// const App = () => {
//   return (
//     <div className="App">
//       <Header />
//       <Body />
//     </div>
//   );
// };

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: "App/>",
//   },
//   {
//     path: "/about",
//     element: "component/About/>",
//   },
// ]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

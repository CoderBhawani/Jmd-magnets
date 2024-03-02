import React from "react";
// import Home from "./screens/home/page";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "./screens/home/Home";
import About from "./screens/about/page";
import TermsAndConditions from "./screens/termscondition/TermsAndCondition";
import Contact from "./screens/contact/Contact";
import ProductDetials from "./screens/store/store";

const router = createBrowserRouter([
  {
    path: "",
    element: <Main />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About/>,
        
      },
      {
        path : "/store/:slug?",
        element : <ProductDetials/>
      },
      {
        path : "/terms-condition",
        element : <TermsAndConditions/>
      },
      {
        path :"/contact",
        element :<Contact/>
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import React from "react";
// import Home from "./screens/home/page";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "./screens/home/Home";
import About from "./screens/about/page";
import TermsAndConditions from "./screens/termscondition/TermsAndCondition";
import Contact from "./screens/contact/Contact";
// import WishListButton from "./component/wishListButton/index"
import ProductDetials from "./screens/store/store";
import PlaceOrder from "./common/placeOrderPage";
import QRCodeComponent from "./component/qrcode";
import CartPage from "./screens/cart/Cart";
import SignIn from "./common/signIn/SignIn";
import Profile from "./screens/profile/Profile";

const router = createBrowserRouter([
  {
    path: "",
    element: <Main/>,
    children: [
      {
        path: "",
        element: <PlaceOrder/>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path : "/store/:slug?",
        element : <ProductDetials/>
      },
      {
        path : "/terms-condition",
        element : <TermsAndConditions/>
      },
      // {
      //   path : "/wishlist",
      //   element :<WishListButton/>
      // },
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

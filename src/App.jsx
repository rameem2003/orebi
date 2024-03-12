import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./components/Error";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Shop from "./pages/Shop";
import Product from "./pages/Product";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About title={"About"} />} />
      <Route path="/shop" element={<Shop title={"Products"} />} />
      <Route path="/product" element={<Product title={"Products"} />} />
      <Route path="/contact" element={<Contact title={"Contacts"} />} />
      <Route path="/login" element={<Login title={"Login"} />} />
      <Route path="/signup" element={<Signup title={`Sign Up`} />} />
      <Route path="/account" element={<Account title={`My Account`} />} />
      <Route path="/cart" element={<Cart title={`Cart`} />} />
      <Route path="/checkout" element={<Checkout title={`Checkout`} />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;

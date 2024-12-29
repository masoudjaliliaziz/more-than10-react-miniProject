import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import NavList from "./components/PageNav";
import City from "./components/City";

import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import Countries from "./components/Countries";

function WorldWise() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />

          <Route path="app" element={<AppLayout />} >
          <Route index element={<p>list Of cities</p>}/>
          <Route path="cities" element={<h1>list of cities</h1>}/>
          <Route path="countries"  element={<h1>list of countries</h1>}/>
          <Route path="form"  element={<h1>form</h1>}/>

          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default WorldWise;

import React from "react";

// pages
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import ErrorPage from "./pages/ErrorPage";
import Carrier, { carriersLoader } from "./pages/carrier/Carrier";
import CarrierDetail, {
  carrierDetailLoader,
} from "./pages/carrier/CarrierDetail";

import Faq from "./pages/Help/Faq";
import ContactUs from "./pages/Help/ContactUs";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// layouts
import RootLayout from "./Layout/RootLayout";
import HelpLayout from "./Layout/HelpLayout";
import CarrierLayout from "./Layout/CarrierLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="contact" element={<Contact />}></Route>
      <Route path="skills" element={<Skills />}></Route>
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />}></Route>
        <Route path="contactus" element={<ContactUs />}></Route>
      </Route>
      <Route path="carrier" element={<CarrierLayout></CarrierLayout>}>
        <Route index element={<Carrier></Carrier>} loader={carriersLoader} />
        <Route
          path=":id"
          element={<CarrierDetail />}
          loader={carrierDetailLoader}
        />
      </Route>
      <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

import React from "react";
import ContextProvider from "./CONTEXT/Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./COMPONENTS/NAV/Navbar";
import Home from "./PAGES/HOME";
import Everything from "./PAGES/EVERYTHING";
import MenProducts from "./PAGES/MEN";
import WomenProducts from "./PAGES/WOMEN";
import Accessories from "./PAGES/ACCESSORIES";
import About from "./PAGES/ABOUT";
import ContactUs from "./PAGES/CONTACT US";
import ProductDetails from "./PAGES/PRODUCT DETAILS";
import Footer from "./COMPONENTS/FOOTER/Footer";
import LogIn from "./PAGES/LOGIN";
import ViewCartPage from "./COMPONENTS/ViewCartPage";
import ScrollToTop from "./COMPONENTS/ScrollToTop";

function App() {
  return (
    <ContextProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/everything" Component={Everything} />
          <Route path="/menProducts" Component={MenProducts} />
          <Route path="/womenProducts" Component={WomenProducts} />
          <Route path="/accessories" Component={Accessories} />
          <Route path="/about" Component={About} />
          <Route path="/contactUs" Component={ContactUs} />
          <Route path="/logIn" Component={LogIn} />
          <Route path="/viewCartPage" Component={ViewCartPage} />
          <Route path="/productDetails/" Component={ProductDetails} />
        </Routes>
        <Footer />
      </Router>
    </ContextProvider>
  );
}

export default App;

import React from "react";
import NavBar from "./components/layout/NavBar";
import Work from "./components/pages/Work";
import Stripes from "./components/pages/Stripes";
import Products from "./components/pages/Products";
import Marquees from "./components/common/Marquees";
import Cards from "./components/common/Cards";
import Footer from "./components/pages/Footer";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="font-satoshi w-full h-screen ">
      <NavBar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;

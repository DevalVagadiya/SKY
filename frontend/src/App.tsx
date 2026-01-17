import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Preloader from './component/Preloader';
import Home from "./component/home/Home";
// import BloodTest from "./component/home/BloodTest";
import About from "./component/about/About";
import BloodTestMain from "./component/bloodtest/BloodTestMain";
import StructurePage from "./component/brain/StructurePage";
import MainCbc from "./component/bloodtest/CBCBt/MainCbc";
import MainHelth from "./component/healthpg/MainHelth";
import MainUnifit from "./component/healthpg/UNIFIT PLUS @ UNIPATH/MainUnifit";
import MainContact from "./component/Contact/MainContact";
import PackageDetail from "./component/home/PackageDetail";
import Appoinment from './component/appoinment/Appoinment';

import ScrollToTop from './component/ScrollToTop';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g. 2.5 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ScrollToTop />
      {loading && <Preloader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/structures/:structureName" element={<StructurePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blood-tests" element={<BloodTestMain />} />
        <Route path="/blood-tests/:id" element={<MainCbc />} />
        <Route path="/packages" element={<MainHelth />} />
        <Route path="/package/:id" element={<MainUnifit />} />
        <Route path="/seasonal_packs/:id" element={<PackageDetail />} />
        {/* <Route path="/blood-tests/:id" element={<BloodTest />} /> */}

        {/* ✅ Only keep dynamic route for test details */}
        {/* <Route path="/tests/:id" element={<MainCbc />} /> */}

        <Route path="/contact" element={<MainContact />} />
        <Route path="/appointment" element={<Appoinment />} />
      </Routes>
    </>
  );
}

export default App;
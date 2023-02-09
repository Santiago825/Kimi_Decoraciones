import React from "react";
import { Routes, Route , useLocation } from "react-router-dom";
import Inicio from "../inicio/Inicio"
import About from "../about/bannerAbout/BannerAbout"
import {AnimatePresence} from 'framer-motion'


export default function AppRoter() {
  const location=useLocation();
  return (
    <AnimatePresence>


      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Inicio/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
      </Routes>
    </AnimatePresence>
  );
}

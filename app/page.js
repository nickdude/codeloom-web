"use client";
import Image from "next/image";
import { useState } from "react";
import Navbar from "./components/Navbar";
import InquiryPopup from "./components/InquiryPopup";
import Hero from "./components/Hero";
import Help from "./components/Help";
import OurResult from "./components/OurResult";
import OurTechStack from "./components/OurTechStack";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export default function Home() {
  const [popupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    console.log("Opening popup");
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    console.log("Closing popup");
    setPopupOpen(false);
  };
  return (
    <>
      <Navbar onOpenPopup={handleOpenPopup} />
      <InquiryPopup isOpen={popupOpen} onClose={handleClosePopup} />
      <Hero onOpenPopup={handleOpenPopup} />
      <Help />
      <OurResult onOpenPopup={handleOpenPopup} />
      <OurTechStack />
      <ContactUs />
      <Footer />
    </>
  );
}

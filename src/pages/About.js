import React from "react";
import CustomeNavBar from "../components/CustomeNavBar";
import Breadcrumb from "../components/Breadcrumb";
import AboutUsInfo from "../components/AboutUsInfo";
import ServiceData from "../components/ServiceData";
import AgencyAbout from "../components/AgencyAbout";
import NavContact from "../components/NavContact";
import OurStoryContent from "../components/OurStoryContent";
import Footer from "../components/Footer";
import WhatSetsUsApart from "../components/WhatSetsUsApart";

function About() {
  return (
    <div className="body_wrapper">
      <NavContact />
      <CustomeNavBar
        slogo="sticky_logo"
        mClass="menu_four"
        nClass="w_menu ml-auto mr-auto"
      />
      <Breadcrumb
        // breadcrumbClass="breadcrumb_area"
        // imgName="breadcrumb/banner_bg.png"
        // backgroundColor="#002664"
        Ptitle="Our Story"
        // Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"
      />
      <OurStoryContent />
      <AboutUsInfo />
      <WhatSetsUsApart />
      {/* <AgencyAbout ServiceData={ServiceData} /> */}
      <Footer />
    </div>
  );
}

export default About;

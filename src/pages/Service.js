import React from "react";
import CustomeNavBar from "../components/CustomeNavBar";
import Breadcrumb from "../components/Breadcrumb";
import HRService from "../components/HRService";
import ServiceData from "../components/ServiceData";
import NavContact from "../components/NavContact";
import HRServiceItems from "../components/HRServiceItems";
import Footer from "../components/Footer";
import OurServiceContent from "../components/OurServiceContent";

function Service() {
  return (
    <div className="body_wrapper">
      <NavContact />
      <CustomeNavBar
        slogo="sticky_logo"
        mClass="menu_four"
        nClass="w_menu ml-auto mr-auto"
      />
      <Breadcrumb
        Ptitle="Our services"
        // Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"
      />
      <HRService ServiceData={ServiceData} />
      {/* <OurServiceContent /> */}
      <Footer />
    </div>
  );
}

export default Service;

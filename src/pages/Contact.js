import React from "react";
import CustomeNavBar from "../components/CustomeNavBar";
import Breadcrumb from "../components/Breadcrumb";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="body_wrapper">
      <CustomeNavBar
        slogo="sticky_logo"
        mClass="menu_four"
        nClass="w_menu ml-auto mr-auto"
      />
      <Breadcrumb
        breadcrumbClass="breadcrumb_area"
        imgName="breadcrumb/banner_bg.png"
        Ptitle="Contact Us"
        // Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"
      />
      <Contacts />
      <Footer />
    </div>
  );
}

export default Contact;

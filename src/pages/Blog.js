import React from "react";
import CustomeNavBar from "../components/CustomeNavBar";
import Breadcrumb from "../components/Breadcrumb";
import NavContact from "../components/NavContact";
import Footer from "../components/Footer";
import BlogContents from "../components/BlogContents";

function Blog() {
  return (
    <div className="body_wrapper">
      <NavContact />
      <CustomeNavBar
        slogo="sticky_logo"
        mClass="menu_four"
        nClass="w_menu ml-auto mr-auto"
      />
      <Breadcrumb
        breadcrumbClass="breadcrumb_area breadcrumb_area_three"
        imgName="Img-05.jpg"
        Ptitle="Blog"
        // Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"
      />
      <BlogContents />
      <Footer />
    </div>
  );
}

export default Blog;

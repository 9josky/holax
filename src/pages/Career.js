import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import CustomeNavBar from "../components/CustomeNavBar";
import Apply from "../components/Apply";
import WorkWithUs from "../components/WorkWithUs";
import Footer from "../components/Footer";
import CareerReview from "../components/CareerReview";

function Career() {
  return (
    <div className="body_wrapper">
      <CustomeNavBar
        slogo="sticky_logo"
        mClass="menu_four"
        nClass="w_menu ml-auto mr-auto"
      />
      <Breadcrumb Ptitle="Career Opportunities" />
      <Apply />
      <WorkWithUs />
      <CareerReview />
      <Footer />
    </div>
  );
}

export default Career;

import React from "react";
import CustomeNavBar from "../components/CustomeNavBar";
import EventBanner from "../components/EventBanner";
import EventTeam from "../components/EventTeam";
import HomeService from "../components/HomeService";
import NavContact from "../components/NavContact";
import WelcomeContent from "../components/WelcomeContent";
import ServiceContent from "../components/ServiceContent";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";
import HomeReview from "../components/HomeReview";
import GettingStarted from "../components/GettingStarted";
import WhyWeDiffer from "../components/WhyWeDiffer";
import Compatibility from "../components/Compatibility";
import ContinuityCare from "../components/ContinuityCare";
import { insertDocumentMeta } from "react-document-meta/dist/dom";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div className="body_wrapper">
      <Helmet>
        <meta
          name="Expert Glass and Aluminium Services in Lagos, Nigeria"
          content="Get top-notch glass and aluminium solutions for your home or office in Lagos and across Nigeria. Contact us for aluminium windows, hand railings, shower cubicles, and office partitions."
        />
      </Helmet>
      <NavContact />
      <CustomeNavBar
        slogo="sticky_logo"
        mClass="menu_four"
        nClass="w_menu ml-auto mr-auto"
      />
      <EventBanner />
      <EventTeam />
      <WelcomeContent />
      <ServiceContent />
      {/* <Compatibility />
      <ContinuityCare /> */}
      <WhyWeDiffer />
      <HomeReview />
      {/* <GettingStarted /> */}
      <Footer />
      {/* <HomeService /> */}
    </div>
  );
}

export default Home;

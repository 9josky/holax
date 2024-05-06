import React, { useRef } from "react";
import NavContact from "../components/NavContact";
import CustomeNavBar from "../components/CustomeNavBar";
import Breadcrumb from "../components/Breadcrumb";
import HRServiceItems from "../components/HRServiceItems";
import WhyChooseUs from "../components/WhyChooseUs";
import OtherServicesContent from "../components/OtherServicesContent";
import QuickMessage from "../components/QuickMessage";
import Footer from "../components/Footer";
import Slider from "react-slick";
import EventTeamItem from "../components/EventTeamItem";
import { Helmet } from "react-helmet";

function ShowerCubicles() {
  const title = "Shower Cubicles";
  const description =
    "Upgrade your bathroom with our premium shower cubicles. Explore our range of space-saving designs, durable materials, and customizable options, ideal for homes and hotels in Lagos, Nigeria.";
  const icon = "bath.png";
  const rclass = "pr_70";
  const iclass = "icon_one";
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2, // Display 2 slides by default
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767, // Breakpoint for mobile screens
        settings: {
          slidesToShow: 1, // Display 1 slide on mobile
        },
      },
    ],
  };
  return (
    <div className="body_wrapper">
      <Helmet>
        <meta
          name="Transform Your Bathroom with Stylish Shower Cubicles | Lagos, Nigeria"
          content="Upgrade your bathroom with our premium shower cubicles. Explore our range of space-saving designs, durable materials, and customizable options, ideal for homes and hotels in Lagos, Nigeria."
        />
      </Helmet>
      <NavContact />
      <CustomeNavBar
        slogo="sticky_logo"
        mClass="menu_four"
        nClass="w_menu ml-auto mr-auto"
      />
      <Breadcrumb Ptitle="Shower Cubicles" />

      <HRServiceItems
        HRtitle={title}
        HRdescription={description}
        Hicon={icon}
        rclass={rclass}
        // iclass={iclass}
        // image="32202.jpg"
      />
      <div className="container" style={{ marginBottom: "50px" }}>
        <div></div>
        <Slider ref={sliderRef} className="event_team_slider" {...settings}>
          <EventTeamItem image="shower1.jpg" />
          <EventTeamItem image="shower2.jpg" />
          <EventTeamItem image="shower3.jpg" />
          <EventTeamItem image="shower4.jpg" />
          {/* <EventTeamItem image="railing5.jpg" />
          <EventTeamItem image="railing6.jpg" /> */}
          {/* <EventTeamItem image="window3.jpg" /> */}
          {/* <EventTeamItem image="doctor-talking.jpg" /> */}
        </Slider>
      </div>
      <OtherServicesContent />
      <WhyChooseUs />
      <QuickMessage inquiry="Inquire About Our Shower Cubicles" />
      <Footer />
    </div>
  );
}

export default ShowerCubicles;

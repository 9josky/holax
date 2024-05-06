import React, { useRef } from "react";
import NavContact from "../components/NavContact";
import CustomeNavBar from "../components/CustomeNavBar";
import Breadcrumb from "../components/Breadcrumb";
import HRServiceItems from "../components/HRServiceItems";
import RespiteCareContent from "../components/RespiteCareContent";
import QuickMessage from "../components/QuickMessage";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";
import Slider from "react-slick";
import EventTeamItem from "../components/EventTeamItem";
import { Helmet } from "react-helmet";

function HandRailing() {
  const title = "Hand Railing";
  const description =
    "Elevate safety and style with our hand railings for staircases. Explore our range of stainless steel, glass, and wrought iron railings, perfect for homes and businesses in Lagos, Nigeria.";
  const icon = "stairs.png";
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
          name="Stylish Hand Railings for Staircases | Lagos, Nigeria "
          content=" Elevate safety and style with our hand railings for staircases. Explore our range of stainless steel, glass, and wrought iron railings, perfect for homes and businesses in Lagos, Nigeria."
        />
      </Helmet>
      <NavContact />
      <CustomeNavBar
        slogo="sticky_logo"
        mClass="menu_four"
        nClass="w_menu ml-auto mr-auto"
      />
      <Breadcrumb Ptitle="Hand Railing" />

      <HRServiceItems
        HRtitle={title}
        HRdescription={description}
        Hicon={icon}
        rclass={rclass}
        // iclass={iclass}
        // image="2150796806.jpg"
      />
      <div className="container" style={{ marginBottom: "50px" }}>
        <div></div>
        <Slider ref={sliderRef} className="event_team_slider" {...settings}>
          <EventTeamItem image="railing1.jpg" />
          <EventTeamItem image="railing2.jpg" />
          <EventTeamItem image="railing3.jpg" />
          <EventTeamItem image="railing4.jpg" />
          <EventTeamItem image="railing5.jpg" />
          <EventTeamItem image="railing6.jpg" />
          {/* <EventTeamItem image="window3.jpg" /> */}
          {/* <EventTeamItem image="doctor-talking.jpg" /> */}
        </Slider>
      </div>
      <RespiteCareContent />
      <WhyChooseUs />
      <QuickMessage inquiry="Inquire About Our Hand Railing" />
      <Footer />
    </div>
  );
}

export default HandRailing;

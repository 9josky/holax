import React, { useRef } from "react";
import NavContact from "../components/NavContact";
import CustomeNavBar from "../components/CustomeNavBar";
import Breadcrumb from "../components/Breadcrumb";
import HRServiceItems from "../components/HRServiceItems";
import PeronalCareContent from "../components/PeronalCareContent";
import QuickMessage from "../components/QuickMessage";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";
import Slider from "react-slick";
import EventTeamItem from "../components/EventTeamItem";
import { Helmet } from "react-helmet";

function AluminiumWindow() {
  const title = "Aluminium Window";
  const description =
    " Discover our range of high-quality aluminium windows designed for durability, energy efficiency, and style. Perfect for homes and businesses in Lagos, Nigeria.";
  const icon = "windowicon.png";
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
          name="Premium Aluminium Windows for Homes and Businesses | Lagos, Nigeria"
          content=" Discover our range of high-quality aluminium windows designed for durability, energy efficiency, and style. Perfect for homes and businesses in Lagos, Nigeria."
        />
      </Helmet>
      <NavContact />
      <CustomeNavBar
        slogo="sticky_logo"
        mClass="menu_four"
        nClass="w_menu ml-auto mr-auto"
      />
      <Breadcrumb Ptitle="Aluminium Window" />

      <HRServiceItems
        HRtitle={title}
        HRdescription={description}
        Hicon={icon}
        rclass={rclass}
        // iclass={iclass}
        // image="2150796822.jpg"
      />
      <div className="container" style={{ marginBottom: "50px" }}>
        <div></div>
        <Slider ref={sliderRef} className="event_team_slider" {...settings}>
          <EventTeamItem image="window1.jpg" />
          <EventTeamItem image="window2.jpg" />
          <EventTeamItem image="window3.jpg" />
          <EventTeamItem image="window4.jpg" />
          <EventTeamItem image="window5.jpg" />
          <EventTeamItem image="window6.jpg" />
          {/* <EventTeamItem image="window3.jpg" /> */}
          {/* <EventTeamItem image="doctor-talking.jpg" /> */}
        </Slider>
      </div>
      <PeronalCareContent />
      <WhyChooseUs />
      <QuickMessage inquiry="Inquire About Our Aluminium Window" />
      <Footer />
    </div>
  );
}

export default AluminiumWindow;

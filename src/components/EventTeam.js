import React, { useRef } from "react";
import EventTeamItem from "./EventTeamItem";
import Slider from "react-slick";

function EventTeam() {
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
    <section className="event_team_area sec_pad">
      <div className="container">
        <div>
          {/* <h2 className="wow fadeInUp" data-wow-delay="0.2s">
            <span>Speakers</span> Who's Speaking
          </h2> */}
        </div>
        <Slider ref={sliderRef} className="event_team_slider" {...settings}>
          <EventTeamItem image="window4.jpg" />
          <EventTeamItem image="railing1.jpg" />
          <EventTeamItem image="shower4.jpg" />
          <EventTeamItem image="office1.jpg" />
          <EventTeamItem image="railing2.jpg" />
          <EventTeamItem image="shower2.jpg" />
          <EventTeamItem image="window3.jpg" />
          {/* <EventTeamItem image="doctor-talking.jpg" /> */}
        </Slider>
      </div>
    </section>
  );
}

export default EventTeam;

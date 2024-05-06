import React from "react";
import Content from "./Content";

function OurStoryContent() {
  return (
    <div
      className="container service-on-mobile new_startup_banner_copy"
      style={{
        marginBottom: "100px",
        marginTop: "5px",
        padding: "10px 10px",
        display: "flex",
        gap: "10px",
        // justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#002664",
        position: "relative",
        // height: "500px",
      }}
    >
      <Content
        header="A Journey Fueled by Compassion"
        content={
          <>
            <p style={{ color: "white", fontSize: "18px" }}>
              Endurance Healthcare Services was born out of the deep love that
              the founder and President, Taiwo Onanuga, has for the elderly and
              those individuals facing challenges preventing them from carrying
              out simple daily activities we often take for granted.
            </p>
            <p style={{ color: "white", fontSize: "18px" }}>
              His journey as a caregiver began at NCIA Baltimore in 2003, where
              he worked as a caregiver for three individuals who heavily relied
              on his compassionate caregiving to navigate each day of their
              lives.
            </p>
            <p style={{ color: "white", fontSize: "18px" }}>
              He later worked for the state of Maryland at Spring Grove Hospital
              in Catonsville, MD, earning various awards for his outstanding
              performances in taking care of mentally challenged individuals.
            </p>
            <p style={{ color: "white", fontSize: "18px" }}>
              However, it was his final caregiving experience at Athelas
              Institute in Columbia, MD, that inspired him to establish
              Endurance Healthcare Services, aiming to broaden his impact in the
              field of caring for those in need.
            </p>
          </>
        }
        showButton={false}
        textColor="white"
      />
      <div
        className="image-container"
        // style={{ zIndex: "55", position: "relative" }}
      >
        <img
          src={require("../img/CEO.jpeg")}
          alt="image by freepik"
          // className="rounded-image"
          style={{
            width: "350px",
            height: "300px",
            borderRadius: "10px",
            marginTop: "10px",
          }}
        />
      </div>
    </div>
  );
}

export default OurStoryContent;

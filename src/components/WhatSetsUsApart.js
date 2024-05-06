import React from "react";
import Content from "./Content";

function WhatSetsUsApart() {
  return (
    <div
      className="container service-on-mobile new_startup_banner_copy"
      style={{
        marginBottom: "100px",
        marginTop: "15px",
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
      <div
        className="image-container"
        // style={{ zIndex: "55", position: "relative" }}
      >
        <img
          src={require("../img/2150780280.jpg")}
          alt="image by freepik"
          // className="rounded-image"
          style={{ width: "500px", height: "400px", borderRadius: "10px" }}
        />
      </div>
      <Content
        header="What Sets Endurance Healthcare Apart?"
        content={
          <>
            <p style={{ color: "white", fontSize: "18px" }}>
              Endurance Healthcare Services distinguishes itself through the
              deeply personal and empathetic approach of its founder, Taiwo
              Onanuga. With roots in caregiving dating back to 2003, Taiwo's
              extensive experience, including notable roles at NCIA Baltimore
              and Spring Grove Hospital, reflects a commitment to excellence in
              providing compassionate care. The organization's establishment was
              inspired by Taiwo's final caregiving experience at Athelas
              Institute, signifying a genuine desire to broaden the impact of
              caregiving services.
            </p>
            <p style={{ color: "white", fontSize: "18px" }}>
              At the core of Endurance Healthcare Services is a vision to
              surpass client expectations, allowing individuals to live their
              best lives despite the inevitability of aging. The mission
              emphasizes a client-centric caregiving experience, employing
              highly trained and verified caregivers to facilitate dignified and
              independent lifestyles. With a foundation built on recognized
              excellence, a compassionate vision for healthcare, and a
              commitment to tailored caregiving, Endurance Healthcare Services
              stands out as a beacon of quality and empathy in the field of
              healthcare services.
            </p>
          </>
        }
        textColor="white"
      />
    </div>
  );
}

export default WhatSetsUsApart;

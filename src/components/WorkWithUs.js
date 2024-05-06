import React from "react";
import Content from "./Content";

function WorkWithUs() {
  const benefits = [
    "conpetitive salary and wages",
    "flexible shedules",
    "optional medical and dental",
    "optional 401k",
    "career enrichment opportunities",
    "Support",
  ];
  return (
    <div
      className="container"
      style={{
        marginBottom: "18px",
        marginTop: "18px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Content
        header="Why should you work with us?"
        content="Personal and Professional Benefits:"
        list={benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      />
      <div
        className="image-container"
        // style={{ zIndex: "55", position: "relative" }}
      >
        <img
          src={require("../img/2150829737.jpg")}
          alt="image by freepik"
          className="rounded-image"
          style={{ width: "450px", height: "300px" }}
        />
      </div>
    </div>
  );
}

export default WorkWithUs;

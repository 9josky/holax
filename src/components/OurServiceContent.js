import React from "react";
import Content from "./Content";

function OurServiceContent() {
  const personal = [
    "Bathing",
    "Grooming",
    " Personal hygiene",
    "Mobility assistance",
    "Meal preparations",
    "Bed preparation",
    "Incontinence care",
    "Laundry",
    "Administrative assistance",
    "Medication monitoring and reminder",
    "etc.",
  ];
  const respite = [
    "Day and overnight respite care",
    "Medical appointments escort",
    "Movies companion",
    "etc.",
  ];
  const cosmetic = [
    "Massages and range motion activities",
    "Helping with hairdressing and barbing",
    "etc.",
  ];
  const others = [
    "Running errands",
    "In and out of town accompaniment",
    "Pet care",
    "Escort to stores, parks, and community events",
    "Fall prevention and general safety guidance",
    "Transportation",
    "Wound care",
    "Skilled nursing care",
    "etc.",
  ];
  return (
    <div>
      <div
        className="container service-on-mobile"
        style={{
          marginBottom: "15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          //   height: "500px",
        }}
      >
        <Content
          header="Personal Care"
          list={personal.map((care, index) => (
            <li key={index}>{care}</li>
          ))}
        />
        <div
          className="image-container"
          // style={{ zIndex: "55", position: "relative" }}
        >
          <img
            src={require("../img/2150796822.jpg")}
            alt="image by freepik"
            style={{ width: "450px", height: "300px", borderRadius: "10px" }}
            className="service-image"
          />
        </div>
      </div>
      <div
        className="container service-on-mobile"
        style={{
          marginBottom: "15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          //   height: "500px",
        }}
      >
        <Content
          header="Respite Care"
          list={respite.map((care, index) => (
            <li key={index}>{care}</li>
          ))}
        />
        <div
          className="image-container"
          // style={{ zIndex: "55", position: "relative" }}
        >
          <img
            src={require("../img/2150796806.jpg")}
            alt="image by freepik"
            //   className="rounded-image"
            style={{ width: "450px", height: "300px", borderRadius: "10px" }}
          />
        </div>
      </div>
      <div
        className="container service-on-mobile"
        style={{
          marginBottom: "15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Content
          header="Cosmetic Care"
          list={cosmetic.map((care, index) => (
            <li key={index}>{care}</li>
          ))}
        />
        <div
          className="image-container"
          // style={{ zIndex: "55", position: "relative" }}
        >
          <img
            src={require("../img/medium-shot-nurse-man-posing.jpg")}
            alt="image by freepik"
            //   className="rounded-image"
            style={{ width: "450px", height: "300px", borderRadius: "10px" }}
          />
        </div>
      </div>
      <div
        className="container service-on-mobile"
        style={{
          marginBottom: "15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flex: "1",
        }}
      >
        <Content
          header="Other Services"
          list={others.map((care, index) => (
            <li key={index}>{care}</li>
          ))}
        />
        <div
          className="image-container"
          // style={{ zIndex: "55", position: "relative" }}
        >
          <img
            src={require("../img/32202.jpg")}
            alt="image by freepik"
            //   className="rounded-image"
            style={{ width: "450px", height: "300px", borderRadius: "10px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default OurServiceContent;

import React from "react";
import { Link } from "react-router-dom";
import Content from "./Content";
import FallingTitle from "./FallingTitle";

function ServiceContent() {
  const servicesList = [
    { name: "Aluminium Window", path: "/services/aluminiumwindow" },
    { name: "Hand Railing", path: "/services/handrailing" },
    { name: "Office Partitions", path: "/services/officepertition" },
    { name: "Shower Cubicle", path: "/services/showercubicles" },
  ];

  return (
    <div
      className="container service-on-mobile"
      style={{
        marginBottom: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Content
        header="Our Services"
        content="With utmost compassion we provide the following services to our clients:"
        list={servicesList.map((service, index) => (
          <li key={index}>
            <Link to={service.path}>{service.name}</Link>
          </li>
        ))}
        innerTitle={<FallingTitle />}
      />
      <div className="image-container">
        <img
          src={require("../img/home-event/window4.jpg")}
          alt="image by freepik"
          style={{ width: "450px", height: "400px", borderRadius: "10px" }}
        />
      </div>
    </div>
  );
}

export default ServiceContent;

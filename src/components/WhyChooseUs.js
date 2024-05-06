import React from "react";
import Content from "./Content";

function WhyChooseUs() {
  const why = [
    <span>
      <strong style={{ fontWeight: "bold" }}>Exceptional Quality:</strong> At
      Holax's Tech Aluminium, we pride ourselves on delivering products of
      exceptional quality. Our aluminium materials undergo rigorous testing and
      adhere to industry-leading standards, ensuring durability and longevity.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Cutting-Edge Technology:</strong>{" "}
      We leverage cutting-edge technology and advanced manufacturing processes
      to produce aluminium products that meet the highest standards of precision
      and performance. Our state-of-the-art facilities enable us to stay ahead
      of the curve and deliver innovative solutions to our customers.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Customization Options:</strong>{" "}
      Whether you're looking for standard aluminium profiles or custom-designed
      solutions, Holax's Tech Aluminium offers a wide range of customization
      options to suit your specific requirements. Our experienced team works
      closely with clients to bring their vision to life and deliver tailored
      solutions that exceed expectations.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Reliability and Trust:</strong>{" "}
      With years of experience in the industry, Holax's Tech Aluminium has built
      a reputation for reliability, trust, and integrity. Our commitment to
      delivering top-notch products and exceptional service has earned us the
      trust of customers across various sectors.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Customer Satisfaction:</strong> At
      Holax's Tech Aluminium, customer satisfaction is our top priority. We go
      above and beyond to ensure that our clients receive the highest level of
      service and support at every stage of their project. From initial
      consultation to after-sales support, we are dedicated to exceeding
      customer expectations.
    </span>,
  ];
  return (
    <div
      className="container new_startup_banner_copy"
      style={{
        marginBottom: "100px",
        backgroundColor: "#353c44",
        position: "relative",
      }}
    >
      <Content
        header="Why Choose Holax's Tech Aluminium?"
        content="When it comes to quality, durability, and innovation in aluminium products, Holax's Tech Aluminium stands out as the premier choice. With a commitment to excellence and a track record of customer satisfaction, here are the top reasons why you should choose Holax's Tech Aluminium for all your aluminium needs:"
        orderedList={why.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {item}
          </li>
        ))}
        textColor="white"
      />
      <Content
        textColor="white"
        header="Experience the Holax's Difference:"
        content="Choose Holax's Tech Aluminium for superior quality, advanced technology, customization options, reliability, sustainability, and unmatched customer satisfaction. Experience the difference with Holax's Tech Aluminium – your trusted partner for all your aluminium needs."
      />
    </div>
  );
}

export default WhyChooseUs;

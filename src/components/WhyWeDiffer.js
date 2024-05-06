import React from "react";
import Content from "./Content";

function WhyWeDiffer() {
  const why = [
    <span>
      <strong style={{ fontWeight: "bold" }}>
        Customization and Flexibility:
      </strong>{" "}
      We understand that every project is unique, which is why we offer a wide
      range of customization options. From design to dimensions, finishes to
      functionality, Holax's Tech Aluminium gives you the flexibility to create
      tailored solutions that perfectly fit your requirements.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>
        Quality Assurance and Testing:
      </strong>{" "}
      Our commitment to excellence is unwavering. Each product undergoes
      rigorous quality assurance checks and testing procedures to ensure
      durability, reliability, and performance. With Holax's Tech Aluminium, you
      can trust that you're investing in products of the highest quality.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>
        Competitive Pricing and Value:
      </strong>{" "}
      With Holax's Tech Aluminium, you get unbeatable value for your money. We
      offer competitive pricing without compromising on quality or service,
      ensuring that you receive the best possible return on your investment.
      Experience the difference that exceptional value can make.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>
        Exceptional Service and Support:
      </strong>{" "}
      At Holax's Tech Aluminium, customer satisfaction is our top priority. Our
      team of experts is dedicated to providing personalized service, expert
      guidance, and responsive support at every stage of your journey. From
      initial consultation to post-purchase assistance, we're here for you every
      step of the way.
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
        header="How We Differ from Competitors"
        content="At Holax's Tech Aluminium, we pride ourselves on offering superior aluminium products that stand out from the competition. Here's why discerning customers prefer us:"
        orderedList={why.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {item}
          </li>
        ))}
        textColor="white"
      />
      <Content
        textColor="white"
        // header="Experience the Endurance Difference:"
        content="Choosing Endurance Healthcare means choosing a caregiving partner that values your individuality, prioritizes your well-being, and stands apart in the commitment to provide compassionate, personalized, and exceptional care."
      />
    </div>
  );
}

export default WhyWeDiffer;

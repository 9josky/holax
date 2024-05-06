import React from "react";
import Content from "./Content";

function PeronalCareContent() {
  const what = [
    <span>
      <strong style={{ fontWeight: "bold" }}>Introduction:</strong> Welcome to
      Holax's Tech Aluminium, your premier destination for premium aluminium
      windows in Lagos, Nigeria. Our aluminium windows are meticulously crafted
      to enhance the aesthetics, functionality, and energy efficiency of your
      space.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Product Description:</strong>{" "}
      Choose from a wide selection of aluminium windows, including sliding
      windows, casement windows, and louvre windows. Our windows are built to
      withstand the harsh Nigerian climate, providing superior durability and
      performance.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Featuress:</strong> Our aluminium
      windows feature advanced technology for weather resistance, low
      maintenance, and customizable designs. With sleek profiles and modern
      finishes, our windows add a touch of elegance to any property.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Benefits:</strong> Experience the
      benefits of our aluminium windows, including improved energy efficiency,
      enhanced security, and reduced noise transmission. Create a comfortable
      and stylish living or working environment with our premium windows.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Testimonials:</strong> Hear from
      satisfied customers who have transformed their homes and businesses with
      our aluminium windows. Join the growing list of happy clients who trust
      Holax's Tech Aluminium for top-quality window solutions.
    </span>,
  ];

  const benefits = [
    <span>
      <strong style={{ fontWeight: "bold" }}>Independence:</strong> Personal
      care enables individuals to maintain a level of independence while
      receiving necessary support.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Dignity and Comfort:</strong>{" "}
      Endurance Healthcare prioritizes the dignity and comfort of clients,
      fostering a sense of well-being.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Customized Care:</strong> Personal
      care services are tailored to meet the specific needs and preferences of
      each individual.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Familiar Environment:</strong> By
      receiving care at home, clients can remain in a familiar and comforting
      environment, promoting emotional well-being.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Comprehensive Well-Being:</strong>{" "}
      Addressing personal care needs contributes to overall physical, emotional,
      and mental well-being.
    </span>,
  ];
  return (
    <div>
      {/* <Content
        header="What is Personal Care?"
        content="Personal care encompasses a set of essential services designed to assist individuals who may face challenges in independently managing their daily activities due to factors such as age, illness, or disability. It involves support in areas such as hygiene, grooming, mobility, and other activities that contribute to an individual's overall well-being."
      /> */}
      <Content
        header="Premium Aluminium Windows for Homes and Businesses"
        // content="Endurance Healthcare's dedicated personal caregivers provide tailored and compassionate assistance to individuals in the comfort of their own homes. Our caregivers are trained to address a variety of needs, including:"
        list={what.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {item}
          </li>
        ))}
      />
      {/* <Content content="Our caregivers go beyond the basics, offering companionship and personalized care to enhance the overall quality of life for those we serve." />
      <Content
        header="Benefits of Personal Care:"
        list={benefits.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {item}
          </li>
        ))}
      />
      <Content content="Endurance Healthcare's personal care services are designed to make a positive impact on the lives of individuals, ensuring they receive the support they need for a dignified and independent lifestyle." /> */}
    </div>
  );
}

export default PeronalCareContent;

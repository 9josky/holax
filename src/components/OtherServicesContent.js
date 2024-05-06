import React from "react";
import Content from "./Content";

function OtherServicesContent() {
  const what = [
    <span>
      <strong style={{ fontWeight: "bold" }}>Introduction:</strong> Indulge in
      luxury and comfort with Holax's Tech Aluminium premium shower cubicles.
      Our shower cubicles are designed to maximize space, enhance hygiene, and
      elevate the overall bathing experience for residents and guests in Lagos,
      Nigeria.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Product Description:</strong>{" "}
      Choose from our wide range of shower cubicles, including corner
      enclosures, walk-in showers, and sliding door cubicles. Each cubicle is
      crafted from high-quality materials and built to withstand daily use and
      moisture.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Features:</strong> Our shower
      cubicles feature tempered glass panels, anti-microbial coatings, and
      customizable configurations. With sleek designs and modern finishes, our
      cubicles add a touch of sophistication to any bathroom space.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Benefits:</strong> Experience the
      benefits of our shower cubicles, including improved hygiene, water
      efficiency, and enhanced aesthetics. Transform your bathroom into a
      spa-like retreat with our luxurious and functional shower solutions.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Maintenance Tips:</strong>Discover
      tips for cleaning and maintaining your shower cubicle to ensure
      long-lasting performance and pristine condition. From routine cleaning to
      troubleshooting common issues, we've got you covered with expert advice
      and support.
    </span>,
  ];

  return (
    <div>
      <Content
        header="Transform Your Bathroom with Stylish Shower Cubicles "
        // content="Endurance Healthcare offers a comprehensive range of additional services to address various needs and enhance the overall well-being of individuals. Our commitment extends beyond traditional caregiving to include:"
        list={what.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {item}
          </li>
        ))}
      />
      {/* <Content content="Endurance Healthcare's commitment to comprehensive care involves understanding the diverse needs of individuals and tailoring services to promote a fulfilling and comfortable lifestyle. Our caregivers approach each service with professionalism, compassion, and a focus on enhancing the overall quality of life for those we serve." /> */}
    </div>
  );
}

export default OtherServicesContent;

import React from "react";
import Content from "./Content";

function RespiteCareContent() {
  const what = [
    <span>
      <strong style={{ fontWeight: "bold" }}>Introduction:</strong> Enhance the
      safety and aesthetic appeal of your staircase with Holax's premium hand
      railings. Our hand railings are designed to provide optimal support and
      durability, ensuring peace of mind for homeowners and property managers.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Product Description:</strong>{" "}
      Discover our diverse selection of hand railings, including stainless steel
      railings, glass railings, and wrought iron railings. Each railing is
      expertly crafted to meet the highest standards of quality and design.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Features:</strong> Our hand
      railings boast features such as corrosion resistance, sleek designs, and
      easy installation. Whether you prefer a modern glass railing or a classic
      wrought iron design, we have options to suit every style and budget..
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Benefits:</strong> Enjoy the
      benefits of our hand railings, including improved safety, accessibility,
      and visual appeal. Protect your loved ones and guests while adding a
      sophisticated touch to your staircase with our premium railings.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Installation Process:</strong>{" "}
      Learn about our seamless installation process and personalized service.
      Our team of experts will work closely with you to design and install hand
      railings that complement your space and meet your specific requirements.
    </span>,
  ];
  const benefits = [
    <span>
      <strong style={{ fontWeight: "bold" }}>
        Support for Primary Caregivers:
      </strong>{" "}
      Respite care gives primary caregivers the chance to take a break, reducing
      caregiver burnout and promoting overall well-being.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>
        Quality Time for Individuals:
      </strong>{" "}
      Individuals receiving respite care can enjoy personalized attention and
      engaging activities, enhancing their overall quality of life.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>
        Flexibility and Convenience:
      </strong>{" "}
      Endurance Healthcare's respite care services are flexible, providing
      caregivers with the freedom to choose the timing and duration of the
      respite.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Peace of Mind:</strong> Knowing
      that their loved ones are in capable hands, primary caregivers can take a
      break with the peace of mind that comes from professional and
      compassionate care.
    </span>,
  ];
  return (
    <div>
      {/* <Content
        header="What is Respite Care?"
        content="Respite care is a specialized service designed to provide temporary relief and support to individuals who are typically cared for by family members or primary caregivers. It offers a brief break from caregiving responsibilities, allowing the primary caregivers an opportunity to recharge, attend to personal needs, or simply take some time for themselves."
      /> */}
      <Content
        header="Stylish Hand Railings for Staircases "
        // content="Endurance Healthcare's respite caregivers offer personalized and attentive support to individuals and their primary caregivers. Our respite care services include:"
        list={what.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {item}
          </li>
        ))}
      />
      {/* <Content content="Endurance Healthcare understands that respite care is not only about meeting the physical needs of the individual but also about creating a positive and engaging experience during the caregiver's break." />
      <Content
        header="Benefits of Respite Care:"
        list={benefits.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {item}
          </li>
        ))}
      />
      <Content content="Endurance Healthcare's approach to respite care is centered around understanding the unique needs of both the individual and their primary caregiver, fostering a supportive environment that contributes to the well-being of all involved." /> */}
    </div>
  );
}

export default RespiteCareContent;

import React, { useState } from "react";

function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission goes here
  const submitForm = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
  };

  return (
    <section className="contact_info_area sec_pad bg_color">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="contact_info_item">
              <h6 className="f_p f_size_20 t_color3 f_500 mb_20">
                Office Address
              </h6>
              <p
                className="f_400 f_size_15"
                style={{ color: "black", fontSize: "18px" }}
              >
                13 Adeola Adefolabi Street, Off Pipe Line, Fagba Bus Stop,
                Lagos.
              </p>
            </div>
            <div className="contact_info_item">
              <h6 className="f_p f_size_20 t_color3 f_500 mb_20">
                Contact Info
              </h6>
              <p className="f_400 f_size_15">
                <span
                  className="f_400 t_color3"
                  style={{ color: "black", fontSize: "18px" }}
                >
                  Phone:
                </span>{" "}
                <a href="tel:07035992841" style={{ color: "black" }}>
                  0703 599 2841{" "}
                </a>
              </p>
              <p className="f_400 f_size_15">
                <span
                  className="f_400 t_color3"
                  style={{ color: "black", fontSize: "18px" }}
                >
                  Phone2:
                </span>{" "}
                <a
                  href="tel: 07035992841"
                  className="f_400"
                  style={{ color: "black" }}
                >
                  0703 599 2841
                </a>
              </p>

              {/* <p className="f_400 f_size_15">
                <span className="f_400 t_color3">Fax:</span>{" "}
                <a href="tel:3024437488">(+096) 204 353 6684</a>
              </p> */}
              <p className="f_400 f_size_15">
                <span
                  className="f_400 t_color3"
                  style={{ color: "black", fontSize: "18px" }}
                >
                  Email:
                </span>{" "}
                <a href="mailto:dareholax@gmail.com" style={{ color: "black" }}>
                  dareholax@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="contact_form col-lg-9">
            <h2 className="f_p f_size_22 t_color3 f_600 l_height28 mb_40">
              Leave a Message
            </h2>
            <form
              action="https://formspree.io/f/nijoskysadeeq@gmail.com"
              method="POST"
              className="contact_form_box"
            >
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group text_box">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group text_box">
                    <input
                      type="email"
                      name="_replyto"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group text_box">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group text_box">
                    <textarea
                      name="message"
                      cols="30"
                      rows="10"
                      placeholder="Enter Your Message . . ."
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn_three"
                style={{ backgroundColor: "#353c44" }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;

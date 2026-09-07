import { useState } from "react";
import { FormGroup } from "react-bootstrap";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
} from "react-icons/fi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../css/Contact.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {

    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  };

  const handleSubmit = (event) => {

    event.preventDefault();

    toast.success(
      "Message sent successfully! We will contact you soon."
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

  };

  return (

    <main className="contact-page">

      <ToastContainer />

      {/* Header */}

      <section className="contact-header">

        <h1>Contact Us</h1>

        <p>
          We are here to help you find your perfect plot
        </p>

      </section>


      {/* Contact Content */}

      <section className="contact-content">


        {/* Contact Information */}

        <div className="contact-info">

          <span className="contact-tag">
            GET IN TOUCH
          </span>

          <h2>
            Let's Start Your Property Journey
          </h2>

          <p className="contact-description">

            Have questions about our projects or plots?
            Get in touch with our team and we will be
            happy to assist you in finding the perfect
            property for your future.

          </p>


          <div className="contact-details">


            <div className="contact-item">

              <div className="contact-icon">
                <FiMapPin />
              </div>

              <div>

                <h3>Address</h3>

                <p>
                  GreenField Real Estate
                  <br />
                  Madurai, Tamil Nadu, India
                </p>

              </div>

            </div>


            <div className="contact-item">

              <div className="contact-icon">
                <FiPhone />
              </div>

              <div>

                <h3>Phone</h3>

                <p>
                  +91 98765 43210
                </p>

              </div>

            </div>


            <div className="contact-item">

              <div className="contact-icon">
                <FiMail />
              </div>

              <div>

                <h3>Email</h3>

                <p>
                  info@greenfield.com
                </p>

              </div>

            </div>


            <div className="contact-item">

              <div className="contact-icon">
                <FiClock />
              </div>

              <div>

                <h3>Working Hours</h3>

                <p>
                  Monday - Saturday
                  <br />
                  9:00 AM - 6:00 PM
                </p>

              </div>

            </div>


          </div>

        </div>


        {/* Contact Form */}

        <div className="contact-form-card">

          <h2>
            Send Us A Message
          </h2>

          <p className="form-description">
            Fill out the form and our team will get back
            to you shortly.
          </p>


          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >


            <FormGroup>

              <label>
                Full Name
              </label>

              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </FormGroup>


            <FormGroup>

              <label>
                Email Address
              </label>

              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </FormGroup>


            <FormGroup>

              <label>
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                className="form-control"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />

            </FormGroup>


            <FormGroup>

              <label>
                Subject
              </label>

              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />

            </FormGroup>


            <FormGroup>

              <label>
                Message
              </label>

              <textarea
                name="message"
                className="form-control contact-message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
              />

            </FormGroup>


            <button
              type="submit"
              className="contact-submit-button"
            >
              Send Message
            </button>


          </form>

        </div>


      </section>


      {/* Map */}

      <section className="contact-map">

        <div className="contact-map-header">

          <span>
            OUR LOCATION
          </span>

          <h2>
            Visit Our Office
          </h2>

        </div>


        <iframe
          src="https://www.google.com/maps?q=Madurai,Tamil%20Nadu,India&output=embed"
          width="100%"
          height="350"
          style={{
            border: 0,
            borderRadius: "16px",
          }}
          allowFullScreen=""
          loading="lazy"
          title="GreenField Location"
        ></iframe>

      </section>


    </main>

  );

}

export default Contact;
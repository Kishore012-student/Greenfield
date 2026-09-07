import "../css/About.css";
import image1 from "../assets/bg-image.webp"

function About() {
  return (
    <main className="about-page">

      <section className="about-header">
        <h1>About Us</h1>
        <p>Building better communities through trusted land development</p>
      </section>

      <section className="about-content">

        <div className="about-intro">
          <div className="about-text">
            <h2>About GreenField</h2>

            <p>
              GreenField is a trusted real estate company focused on
              developing premium residential plots in well-connected
              locations.
            </p>

            <p>
              We aim to provide customers with quality plots, clear
              documentation, modern infrastructure, and a comfortable
              environment for building their future homes.
            </p>

            <p>
              With a customer-first approach, we focus on transparency,
              quality, and long-term value in every project we develop.
            </p>
          </div>

          <div className="about-image">
            <div className="about-image-placeholder">
              <img
                src={image1}
                alt="About GreenField"
              />
            </div>
          </div>
        </div>

        <div className="about-values">

          <div className="about-value-card">
            <h3>Our Mission</h3>
            <p>
              To develop quality residential communities with reliable
              infrastructure and transparent services.
            </p>
          </div>

          <div className="about-value-card">
            <h3>Our Vision</h3>
            <p>
              To become a trusted name in plotted development by creating
              valuable and sustainable communities.
            </p>
          </div>

          <div className="about-value-card">
            <h3>Our Values</h3>
            <p>
              Transparency, quality, customer satisfaction, and integrity
              are at the heart of everything we do.
            </p>
          </div>

        </div>

        <section className="why-us-section">
          <div className="why-us-header">
            <h2>Why Choose GreenField?</h2>
            <p>
              We focus on providing a simple and trustworthy property
              buying experience.
            </p>
          </div>

          <div className="why-us-cards">

            <div className="why-us-card">
              <h3>Quality Projects</h3>
              <p>
                Carefully planned residential projects with quality
                infrastructure.
              </p>
            </div>

            <div className="why-us-card">
              <h3>Clear Documentation</h3>
              <p>
                We focus on transparent documentation and reliable
                property information.
              </p>
            </div>

            <div className="why-us-card">
              <h3>Prime Locations</h3>
              <p>
                Projects are selected with connectivity and future growth
                potential in mind.
              </p>
            </div>

            <div className="why-us-card">
              <h3>Customer First</h3>
              <p>
                Our goal is to make every customer's property journey
                comfortable and transparent.
              </p>
            </div>

          </div>
        </section>

      </section>

    </main>
  );
}

export default About;
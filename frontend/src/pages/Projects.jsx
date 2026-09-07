import "../css/Projects.css";
import ProjectCard from "../components/ProjectCard";

import plot1 from "../assets/1.jpg";
import plot2 from "../assets/2.jpg";

function Projects() {

  const projects = [
    {
      image: plot1,
      name: "Green Valley",
      location: "Madurai, Tamil Nadu",
      price: "₹10 Lakhs",
      status: "Available",
    },
    {
      image: plot2,
      name: "Green Meadows",
      location: "Dindigul, Tamil Nadu",
      price: "₹12 Lakhs",
      status: "Available",
    },
    {
      image: plot1,
      name: "Green City",
      location: "Trichy, Tamil Nadu",
      price: "₹15 Lakhs",
      status: "Available",
    },
    {
      image: plot2,
      name: "Green Garden",
      location: "Madurai, Tamil Nadu",
      price: "₹9 Lakhs",
      status: "Available",
    },
    {
      image: plot1,
      name: "Sunshine Valley",
      location: "Dindigul, Tamil Nadu",
      price: "₹11 Lakhs",
      status: "Available",
    },
    {
      image: plot2,
      name: "Royal Greens",
      location: "Trichy, Tamil Nadu",
      price: "₹18 Lakhs",
      status: "Available",
    },
    {
      image: plot1,
      name: "Green Paradise",
      location: "Madurai, Tamil Nadu",
      price: "₹14 Lakhs",
      status: "Available",
    },
    {
      image: plot2,
      name: "Nature Hills",
      location: "Dindigul, Tamil Nadu",
      price: "₹13 Lakhs",
      status: "Available",
    },
  ];

  return (
    <main className="projects-page">

      <section className="projects-header">

        <h1>Our Projects</h1>

        <p>
          Explore our premium plotted developments
        </p>

      </section>

      <section className="projects-content">

        <div className="projects-top">

          <div>
            <h2>Featured Projects</h2>

            <p>
              Find the perfect location for your future
            </p>
          </div>

          <span className="project-count">
            {projects.length} Projects
          </span>

        </div>

        <div className="projects-card-grid">

          {projects.map((project, index) => (

            <ProjectCard
              key={index}
              project={project}
              image={project.image}
              name={project.name}
              location={project.location}
              price={project.price}
              status={project.status}
            />

          ))}

        </div>

      </section>

    </main>
  );
}

export default Projects;
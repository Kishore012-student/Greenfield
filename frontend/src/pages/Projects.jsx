import "../css/Projects.css";
import ProjectCard from "../components/ProjectCard";
import { useState } from "react";

// Import all projects data
import projects from "../data/projectsData";

function Projects() {

  const [selectedCategory, setSelectedCategory] =
    useState("All");


  // Filter Projects
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category === selectedCategory
        );


  return (

    <main className="projects-page">


      {/* Header */}

      <section className="projects-header">

        <h1>
          Our Projects
        </h1>

        <p>
          Explore our premium plotted developments
        </p>

      </section>


      {/* Content */}

      <section className="projects-content">


        {/* Top Section */}

        <div className="projects-top">

          <div>

            <h2>
              Featured Projects
            </h2>

            <p>
              Find the perfect location for your future
            </p>

          </div>


          {/* Project Count */}

          <span className="project-count">

            {filteredProjects.length} Projects

          </span>

        </div>


        {/* Category Filter */}

        <div className="project-categories">


          {/* All */}

          <button
            type="button"
            className={
              selectedCategory === "All"
                ? "active-category"
                : ""
            }
            onClick={() =>
              setSelectedCategory("All")
            }
          >
            All
          </button>


          {/* Residential */}

          <button
            type="button"
            className={
              selectedCategory === "Residential Plot"
                ? "active-category"
                : ""
            }
            onClick={() =>
              setSelectedCategory(
                "Residential Plot"
              )
            }
          >
            Residential Plot
          </button>


          {/* Villa */}

          <button
            type="button"
            className={
              selectedCategory === "Villa Plot"
                ? "active-category"
                : ""
            }
            onClick={() =>
              setSelectedCategory(
                "Villa Plot"
              )
            }
          >
            Villa Plot
          </button>


          {/* Commercial */}

          <button
            type="button"
            className={
              selectedCategory === "Commercial Plot"
                ? "active-category"
                : ""
            }
            onClick={() =>
              setSelectedCategory(
                "Commercial Plot"
              )
            }
          >
            Commercial Plot
          </button>


        </div>


        {/* Projects Grid */}

        <div className="projects-card-grid">

          {filteredProjects.map((project) => (

            <ProjectCard
              key={project.id}
              project={project}
              id={project.id}
              image={project.image}
              name={project.name}
              location={project.location}
              price={project.price}
              status={project.status}
            />

          ))}

        </div>


        {/* No Projects */}

        {filteredProjects.length === 0 && (

          <div className="no-projects">

            <h3>
              No Projects Found
            </h3>

            <p>
              No projects available in this category.
            </p>

          </div>

        )}


      </section>


    </main>

  );

}

export default Projects;
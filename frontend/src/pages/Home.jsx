import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../css/Home.css";
import ProjectCard from "../components/ProjectCard";

// Common Projects Data
import projects from "../data/projectsData";


function Home() {

  const bgvideo =
    "https://res.cloudinary.com/dexbuzgwo/video/upload/v1788592535/bg-video.mp4";


  const [searchText, setSearchText] =
    useState("");

  const [selectedLocation, setSelectedLocation] =
    useState("Location");

  const [selectedPlotType, setSelectedPlotType] =
    useState("Plot Type");


  // Show first 8 projects initially
  const [filteredProjects, setFilteredProjects] =
    useState(projects.slice(0, 8));


  const handleSearch = () => {

    const filtered = projects.filter(
      (project) => {

        const matchesSearch =

          project.name
            .toLowerCase()
            .includes(
              searchText.toLowerCase()
            )

          ||

          project.location
            .toLowerCase()
            .includes(
              searchText.toLowerCase()
            );


        const matchesLocation =

          selectedLocation === "Location"

          ||

          project.location
            .toLowerCase()
            .includes(
              selectedLocation.toLowerCase()
            );


        const matchesPlotType =

          selectedPlotType === "Plot Type"

          ||

          project.category ===
          selectedPlotType;


        return (

          matchesSearch &&

          matchesLocation &&

          matchesPlotType

        );

      }
    );


    // Search results
    setFilteredProjects(filtered);

  };


  // Reset Location Filter
  const handleLocationChange = (location) => {

    setSelectedLocation(location);

  };


  // Reset Plot Type Filter
  const handlePlotTypeChange = (type) => {

    setSelectedPlotType(type);

  };


  return (

    <>


      {/* ================= HERO ================= */}

      <section className="hero-section">


        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        >

          <source
            src={bgvideo}
            type="video/mp4"
          />

        </video>


        <div className="hero-content">

          <h1>
            Find Your Perfect Plot For Better Future
          </h1>


          <p>
            Premium plotted developments in prime locations
            with world class amenities
          </p>

        </div>


        {/* ================= SEARCH ================= */}

        <div className="search-box">


          {/* Search Input */}

          <div className="search">

            <button
              className="search-button"
              type="button"
              onClick={handleSearch}
            >

              <FiSearch />

            </button>


            <input
              type="text"
              placeholder="Search for plots, locations..."
              value={searchText}
              onChange={(event) =>
                setSearchText(
                  event.target.value
                )
              }
            />

          </div>


          {/* Location Filter */}

          <div className="location-filter">

            <Dropdown>

              <Dropdown.Toggle
                variant="success"
                className="filter-dropdown-button"
              >

                {selectedLocation}

              </Dropdown.Toggle>


              <Dropdown.Menu
                className="dropdown-menu"
              >


                <Dropdown.Item
                  onClick={() =>
                    handleLocationChange(
                      "Location"
                    )
                  }
                >

                  All Locations

                </Dropdown.Item>


                <Dropdown.Item
                  onClick={() =>
                    handleLocationChange(
                      "Madurai"
                    )
                  }
                >

                  Madurai

                </Dropdown.Item>


                <Dropdown.Item
                  onClick={() =>
                    handleLocationChange(
                      "Dindigul"
                    )
                  }
                >

                  Dindigul

                </Dropdown.Item>


                <Dropdown.Item
                  onClick={() =>
                    handleLocationChange(
                      "Trichy"
                    )
                  }
                >

                  Trichy

                </Dropdown.Item>


              </Dropdown.Menu>

            </Dropdown>

          </div>


          {/* Plot Type Filter */}

          <div className="plot-type">

            <Dropdown>

              <Dropdown.Toggle
                variant="success"
                className="filter-dropdown-button"
              >

                {selectedPlotType}

              </Dropdown.Toggle>


              <Dropdown.Menu
                className="dropdown-menu"
              >


                <Dropdown.Item
                  onClick={() =>
                    handlePlotTypeChange(
                      "Plot Type"
                    )
                  }
                >

                  All Plot Types

                </Dropdown.Item>


                <Dropdown.Item
                  onClick={() =>
                    handlePlotTypeChange(
                      "Residential Plot"
                    )
                  }
                >

                  Residential Plot

                </Dropdown.Item>


                <Dropdown.Item
                  onClick={() =>
                    handlePlotTypeChange(
                      "Commercial Plot"
                    )
                  }
                >

                  Commercial Plot

                </Dropdown.Item>


                <Dropdown.Item
                  onClick={() =>
                    handlePlotTypeChange(
                      "Villa Plot"
                    )
                  }
                >

                  Villa Plot

                </Dropdown.Item>


              </Dropdown.Menu>

            </Dropdown>

          </div>


          {/* Search Button */}

          <button
            type="button"
            className="submit-button"
            onClick={handleSearch}
          >

            Search

          </button>


        </div>


      </section>


      {/* ================= FEATURED PROJECTS ================= */}

      <section className="home-featured-section">


        <div className="featured-content">


          <div className="h1-left">

            <h2>
              Featured Projects
            </h2>

          </div>


          <div className="h1-right">

            <Link to="/projects">
              View All
            </Link>

          </div>


        </div>


        {/* Project Cards */}

        <div className="home-project-card-container">


          {filteredProjects.length > 0 ? (

            filteredProjects.map(
              (project) => (

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

              )
            )

          ) : (

            <div className="no-projects">

              <h3>
                No Projects Found
              </h3>


              <p>
                Try changing your search or filters.
              </p>

            </div>

          )}


        </div>


      </section>


    </>

  );

}


export default Home;
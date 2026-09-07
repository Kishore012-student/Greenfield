import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Dropdown } from "react-bootstrap";
import "../css/Home.css";
import ProjectCard from "../components/ProjectCard";
import plot1 from "../assets/1.jpg";
import plot2 from "../assets/2.jpg";

function Home() {
  const bgvideo =
    "https://res.cloudinary.com/dexbuzgwo/video/upload/v1788592535/bg-video.mp4";

  const projects = [
    {
      image: plot1,
      name: "Green Valley",
      location: "Madurai",
      fullLocation: "Madurai, Tamil Nadu",
      price: "₹10 Lakhs",
      status: "Available",
      plotType: "Residential Plot",
    },
    {
      image: plot2,
      name: "Green Meadows",
      location: "Dindigul",
      fullLocation: "Dindigul, Tamil Nadu",
      price: "₹12 Lakhs",
      status: "Available",
      plotType: "Villa Plot",
    },
    {
      image: plot2,
      name: "Green City",
      location: "Trichy",
      fullLocation: "Trichy, Tamil Nadu",
      price: "₹15 Lakhs",
      status: "Available",
      plotType: "Commercial Plot",
    },
    {
      image: plot1,
      name: "Green Garden",
      location: "Madurai",
      fullLocation: "Madurai, Tamil Nadu",
      price: "₹9 Lakhs",
      status: "Available",
      plotType: "Villa Plot",
    },
    {
      image: plot2,
      name: "Sunshine Valley",
      location: "Dindigul",
      fullLocation: "Dindigul, Tamil Nadu",
      price: "₹11 Lakhs",
      status: "Available",
      plotType: "Residential Plot",
    },
    {
      image: plot1,
      name: "Royal Greens",
      location: "Trichy",
      fullLocation: "Trichy, Tamil Nadu",
      price: "₹18 Lakhs",
      status: "Available",
      plotType: "Commercial Plot",
    },
    {
      image: plot1,
      name: "Green Garden",
      location: "Madurai",
      fullLocation: "Madurai, Tamil Nadu",
      price: "₹9 Lakhs",
      status: "Available",
      plotType: "Villa Plot",
    },
    {
      image: plot1,
      name: "Green Valley",
      location: "Madurai",
      fullLocation: "Madurai, Tamil Nadu",
      price: "₹10 Lakhs",
      status: "Available",
      plotType: "Residential Plot",
    }
  ];

  const [searchText, setSearchText] = useState("");
  const [selectedLocation, setSelectedLocation] =
    useState("Location");
  const [selectedPlotType, setSelectedPlotType] =
    useState("Plot Type");

  const [filteredProjects, setFilteredProjects] =
    useState(projects);

  const handleSearch = () => {
    const filtered = projects.filter((project) => {
      const matchesSearch =
        project.name
          .toLowerCase()
          .includes(searchText.toLowerCase()) ||
        project.location
          .toLowerCase()
          .includes(searchText.toLowerCase());

      const matchesLocation =
        selectedLocation === "Location" ||
        project.location === selectedLocation;

      const matchesPlotType =
        selectedPlotType === "Plot Type" ||
        project.plotType === selectedPlotType;

      return (
        matchesSearch &&
        matchesLocation &&
        matchesPlotType
      );
    });

    setFilteredProjects(filtered);
  };

  return (
    <>
      <section className="hero-section">

        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={bgvideo} type="video/mp4" />
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

        <div className="search-box">

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
                setSearchText(event.target.value)
              }
            />

          </div>

          <div className="location-filter">

            <Dropdown>

              <Dropdown.Toggle
                variant="success"
                className="filter-dropdown-button"
              >
                {selectedLocation}
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu">

                <Dropdown.Item
                  onClick={() =>
                    setSelectedLocation("Madurai")
                  }
                >
                  Madurai
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() =>
                    setSelectedLocation("Dindigul")
                  }
                >
                  Dindigul
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() =>
                    setSelectedLocation("Trichy")
                  }
                >
                  Trichy
                </Dropdown.Item>

              </Dropdown.Menu>

            </Dropdown>

          </div>

          <div className="plot-type">

            <Dropdown>

              <Dropdown.Toggle
                variant="success"
                className="filter-dropdown-button"
              >
                {selectedPlotType}
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu">

                <Dropdown.Item
                  onClick={() =>
                    setSelectedPlotType(
                      "Residential Plot"
                    )
                  }
                >
                  Residential Plot
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() =>
                    setSelectedPlotType(
                      "Commercial Plot"
                    )
                  }
                >
                  Commercial Plot
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() =>
                    setSelectedPlotType(
                      "Villa Plot"
                    )
                  }
                >
                  Villa Plot
                </Dropdown.Item>

              </Dropdown.Menu>

            </Dropdown>

          </div>

          <button
            type="button"
            className="submit-button"
            onClick={handleSearch}
          >
            Search
          </button>

        </div>

      </section>

      <section className="home-featured-section">

        <div className="featured-content">

          <div className="h1-left">
            <h2>
              Featured Projects
            </h2>
          </div>

          <div className="h1-right">
            <a href="/projects">
              View All
            </a>
          </div>

        </div>

        <div className="home-project-card-container">

          {filteredProjects.length > 0 ? (

            filteredProjects.map(
              (project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  image={project.image}
                  name={project.name}
                  location={project.fullLocation}
                  price={project.price}
                  status={project.status}
                />
              )
            )

          ) : (

            <div className="no-projects">
              <h3>No Projects Found</h3>

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
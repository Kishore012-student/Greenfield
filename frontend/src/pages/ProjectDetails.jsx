import { useLocation, useNavigate } from "react-router-dom";
import "../css/ProjectDetails.css";

function ProjectDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const project = location.state;

  if (!project) {
    return <h2>Project details not found</h2>;
  }

  const handleBooking = () => {
    navigate("/booking", {
      state: project,
    });
  };

  return (
    <main className="project-details-page">

      <section className="project-details-header">
        <h1>{project.name}</h1>
        <p>{project.location}</p>
      </section>

      <section className="project-details-content">

        <div className="project-details-image">
          <img
            src={project.image}
            alt={project.name}
          />
        </div>

        <div className="project-details-info">

          <h2>{project.name}</h2>

          <p>
            {project.name} is a premium plotted development
            located in {project.location}.
          </p>

          <div className="project-info">

            <div>
              <span>Location</span>
              <strong>{project.location}</strong>
            </div>

            <div>
              <span>Starting Price</span>
              <strong>{project.price}</strong>
            </div>

            <div>
              <span>Status</span>
              <strong>{project.status}</strong>
            </div>

          </div>

          <button
            className="booking-button"
            onClick={handleBooking}
          >
            Book Now
          </button>

        </div>

      </section>

    </main>
  );
}

export default ProjectDetails;
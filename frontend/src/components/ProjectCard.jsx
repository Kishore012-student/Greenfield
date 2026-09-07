import "../css/Projectcard.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ProjectCard({
  project,
  id,
  image,
  name,
  location,
  price,
  status
}) {
  const navigate = useNavigate();

  const [isWishlisted, setIsWishlisted] = useState(() => {
    const wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    return wishlist.some((item) => item.name === name);
  });

  const handleWishlist = () => {
    const wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const existingItem = wishlist.find(
      (item) => item.id === id
    );

    if (existingItem) {

      const updatedWishlist = wishlist.filter(
        (item) => item.id !== id
      );

      localStorage.setItem(
        "wishlist",
        JSON.stringify(updatedWishlist)
      );

      setIsWishlisted(false);

    } else {

      const wishlistItem = {
        id,
        image,
        name,
        location,
        price,
        status
      };

      const updatedWishlist = [
        ...wishlist,
        wishlistItem
      ];

      localStorage.setItem(
        "wishlist",
        JSON.stringify(updatedWishlist)
      );

      setIsWishlisted(true);
    }
  };

  return (
    <div className="project-card">

      <div className="project-image">

        <img
          src={image}
          alt={name}
        />

        <button
          type="button"
          className={`wishlist-button ${isWishlisted ? "wishlist-active" : ""
            }`}
          onClick={handleWishlist}
        >
          {isWishlisted ? "♥" : "♡"}
        </button>

      </div>

      <div className="project-content">

        <h3>{name}</h3>

        <p className="project-location">
          {location}
        </p>

        <p className="project-price">
          Starting from {price}
        </p>

        <div className="project-footer">

          <span className="project-status">
            {status}
          </span>

          <button
            type="button"
            className="project-button"
            onClick={() =>
              navigate("/project-details", {
                state: project || {
                  id,
                  image,
                  name,
                  location,
                  price,
                  status
                }
              })
            }
          >
            View Details
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;
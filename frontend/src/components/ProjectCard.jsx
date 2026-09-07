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


  // Get logged in user
  const user = JSON.parse(
    localStorage.getItem("user")
  );


  // Get user ID
  const userId =
    user?.id || user?._id;


  // Create unique wishlist key for each user
  const wishlistKey =
    userId
      ? `wishlist_${userId}`
      : null;


  // Create unique project ID
  const projectId =
    id ||
    project?._id ||
    project?.id ||
    name;


  // Check wishlist status
  const [isWishlisted, setIsWishlisted] =
    useState(() => {

      if (!wishlistKey) {
        return false;
      }

      const wishlist =
        JSON.parse(
          localStorage.getItem(wishlistKey)
        ) || [];


      return wishlist.some(
        (item) =>
          item.id === projectId
      );

    });


  // Handle Wishlist
  const handleWishlist = (event) => {

    // Prevent other click events
    event.stopPropagation();


    // Check login
    if (!user) {

      alert(
        "Please login to add projects to wishlist"
      );

      navigate("/login");

      return;

    }


    const currentWishlist =
      JSON.parse(
        localStorage.getItem(wishlistKey)
      ) || [];


    const existingItem =
      currentWishlist.find(
        (item) =>
          item.id === projectId
      );


    // Remove from wishlist
    if (existingItem) {

      const updatedWishlist =
        currentWishlist.filter(
          (item) =>
            item.id !== projectId
        );


      localStorage.setItem(
        wishlistKey,
        JSON.stringify(updatedWishlist)
      );


      setIsWishlisted(false);


    } else {

      // Add to wishlist
      const wishlistItem = {

        id: projectId,

        image,

        name,

        location,

        price,

        status,

      };


      const updatedWishlist = [

        ...currentWishlist,

        wishlistItem,

      ];


      localStorage.setItem(
        wishlistKey,
        JSON.stringify(updatedWishlist)
      );


      setIsWishlisted(true);

    }

  };


  // Navigate to project details
  const handleCardClick = () => {

    navigate(
      "/project-details",
      {

        state:

          project || {

            id: projectId,

            image,

            name,

            location,

            price,

            status,

          },

      }
    );

  };


  return (

    <div
      className="project-card"
      onClick={handleCardClick}
    >


      <div className="project-image">


        <img
          src={image}
          alt={name}
        />


        <button

          type="button"

          className={`wishlist-button ${
            isWishlisted
              ? "wishlist-active"
              : ""
          }`}

          onClick={handleWishlist}

        >

          {isWishlisted
            ? "♥"
            : "♡"
          }

        </button>


      </div>


      <div className="project-content">


        <h3>
          {name}
        </h3>


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


        </div>


      </div>


    </div>

  );

}


export default ProjectCard;
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


  // Create unique wishlist key
  const wishlistKey =
    userId
      ? `wishlist_${userId}`
      : null;


  const [isWishlisted, setIsWishlisted] =
    useState(() => {

      if (!wishlistKey) {
        return false;
      }


      const wishlist =
        JSON.parse(
          localStorage.getItem(
            wishlistKey
          )
        ) || [];


      return wishlist.some(
        (item) => item.id === id
      );

    });


  const handleWishlist = () => {


    // Check login
    if (!user) {

      alert(
        "Please login to add projects to wishlist"
      );

      navigate("/login");

      return;

    }


    const wishlist =
      JSON.parse(
        localStorage.getItem(
          wishlistKey
        )
      ) || [];


    const existingItem =
      wishlist.find(
        (item) =>
          item.id === id
      );


    // Remove from wishlist
    if (existingItem) {


      const updatedWishlist =
        wishlist.filter(
          (item) =>
            item.id !== id
        );


      localStorage.setItem(
        wishlistKey,
        JSON.stringify(
          updatedWishlist
        )
      );


      setIsWishlisted(false);


    } else {


      // Add to wishlist
      const wishlistItem = {

        id,

        image,

        name,

        location,

        price,

        status,

      };


      const updatedWishlist = [

        ...wishlist,

        wishlistItem,

      ];


      localStorage.setItem(

        wishlistKey,

        JSON.stringify(
          updatedWishlist
        )

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

          className={`
            wishlist-button 
            ${isWishlisted
              ? "wishlist-active"
              : ""
            }
          `}

          onClick={
            handleWishlist
          }

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


          <button

            type="button"

            className="project-button"

            onClick={() =>

              navigate(
                "/project-details",
                {

                  state:

                    project || {

                      id,

                      image,

                      name,

                      location,

                      price,

                      status,

                    },

                }
              )

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
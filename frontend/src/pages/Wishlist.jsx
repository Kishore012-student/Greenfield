import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Wishlist.css";

function Wishlist() {
  const navigate = useNavigate();

  // Get logged in user
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  // Get user ID
  const userId = user?.id || user?._id;

  // Create unique wishlist key for each user
  const wishlistKey = userId
    ? `wishlist_${userId}`
    : null;

  // Get current user's wishlist
  const [wishlist, setWishlist] = useState(() => {
    if (!wishlistKey) {
      return [];
    }

    return JSON.parse(
      localStorage.getItem(wishlistKey)
    ) || [];
  });


  // Remove wishlist item
  const handleRemove = (id) => {

    const updatedWishlist =
      wishlist.filter(
        (item) => item.id !== id
      );

    localStorage.setItem(
      wishlistKey,
      JSON.stringify(updatedWishlist)
    );

    setWishlist(updatedWishlist);
  };


  // View project details
  const handleViewDetails = (item) => {

    navigate(
      "/project-details",
      {
        state: item,
      }
    );

  };


  // If user not logged in
  if (!user) {

    return (
      <main className="wishlist-page">

        <section className="wishlist-header">

          <h1>My Wishlist</h1>

          <p>
            Please login to view your wishlist
          </p>

        </section>


        <section className="wishlist-content">

          <div className="empty-wishlist">

            <h2>
              Please Login
            </h2>

            <p>
              Login to view your saved projects.
            </p>


            <button
              onClick={() =>
                navigate("/login")
              }
            >
              Login
            </button>

          </div>

        </section>

      </main>
    );

  }


  return (

    <main className="wishlist-page">


      <section className="wishlist-header">

        <h1>My Wishlist</h1>

        <p>
          Your saved projects and plots
        </p>

      </section>


      <section className="wishlist-content">


        {wishlist.length === 0 ? (

          <div className="empty-wishlist">

            <h2>
              Your wishlist is empty
            </h2>

            <p>
              Save your favourite projects and plots to see them here.
            </p>

          </div>

        ) : (

          <div className="wishlist-container">


            {wishlist.map((item, index) => (

              <div
                className="wishlist-card"
                key={item.id || index}
              >


                <img
                  src={item.image}
                  alt={item.name}
                />


                <div className="wishlist-card-content">


                  <h3>
                    {item.name}
                  </h3>


                  <p>
                    {item.location}
                  </p>


                  <strong>
                    {item.price}
                  </strong>


                  <div className="wishlist-card-actions">


                    <button
                      className="wishlist-view-button"

                      onClick={() =>
                        handleViewDetails(item)
                      }
                    >

                      View Details

                    </button>


                    <button
                      className="wishlist-remove-button"

                      onClick={() =>
                        handleRemove(item.id)
                      }
                    >

                      Remove

                    </button>


                  </div>


                </div>


              </div>

            ))}


          </div>

        )}


      </section>


    </main>

  );

}

export default Wishlist;
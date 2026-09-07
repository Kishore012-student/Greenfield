import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Wishlist.css";

function Wishlist() {
  const navigate = useNavigate();

  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  const handleRemove = (name) => {
    const updatedWishlist = wishlist.filter(
      (item) => item.name !== name
    );

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );

    setWishlist(updatedWishlist);
  };

  const handleViewDetails = (item) => {
    navigate("/project-details", {
      state: item,
    });
  };

  return (
    <main className="wishlist-page">
      <section className="wishlist-header">
        <h1>My Wishlist</h1>
        <p>Your saved projects and plots</p>
      </section>

      <section className="wishlist-content">
        {wishlist.length === 0 ? (
          <div className="empty-wishlist">
            <h2>Your wishlist is empty</h2>
            <p>
              Save your favourite projects and plots to see them here.
            </p>
          </div>
        ) : (
          <div className="wishlist-container">
            {wishlist.map((item, index) => (
              <div className="wishlist-card" key={index}>
                <img src={item.image} alt={item.name} />

                <div className="wishlist-card-content">
                  <h3>{item.name}</h3>

                  <p>{item.location}</p>

                  <strong>{item.price}</strong>

                  <div className="wishlist-card-actions">
                    <button
                      className="wishlist-view-button"
                      onClick={() => handleViewDetails(item)}
                    >
                      View Details
                    </button>

                    <button
                      className="wishlist-remove-button"
                      onClick={() => handleRemove(item.name)}
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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/MyBookings.css";

function MyBookings() {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState(() => {
    return JSON.parse(localStorage.getItem("bookings")) || [];
  });

  const handleCancelBooking = (indexToRemove) => {
    const updatedBookings = bookings.filter(
      (_, index) => index !== indexToRemove
    );

    setBookings(updatedBookings);

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );

    toast.success("Booking cancelled successfully!", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <main className="my-bookings-page">

      <ToastContainer />

      <section className="my-bookings-header">
        <h1>My Bookings</h1>

        <p>
          View and manage your property booking requests
        </p>
      </section>

      <section className="my-bookings-content">

        {bookings.length === 0 ? (

          <div className="empty-bookings">

            <h2>No Bookings Yet</h2>

            <p>
              You haven't booked any properties yet.
            </p>

            <button
              onClick={() => navigate("/projects")}
            >
              Explore Projects
            </button>

          </div>

        ) : (

          <div className="bookings-container">

            {bookings.map((booking, index) => (

              <div
                className="booking-card"
                key={index}
              >

                <img
                  src={booking.image}
                  alt={booking.name}
                />

                <div className="booking-card-content">

                  <div className="booking-card-top">

                    <div>
                      <h3>{booking.name}</h3>

                      <p className="booking-location">
                        {booking.location}
                      </p>
                    </div>

                    <span className="booking-pending">
                      {booking.bookingStatus}
                    </span>

                  </div>

                  <div className="booking-details">

                    <div>
                      <span>Customer Name</span>
                      <strong>{booking.customerName}</strong>
                    </div>

                    <div>
                      <span>Phone</span>
                      <strong>{booking.phone}</strong>
                    </div>

                    <div>
                      <span>Email</span>
                      <strong>{booking.email}</strong>
                    </div>

                    <div>
                      <span>Visit Date</span>
                      <strong>{booking.visitDate}</strong>
                    </div>

                    <div>
                      <span>Price</span>
                      <strong>{booking.price}</strong>
                    </div>

                    <div>
                      <span>Booking Date</span>
                      <strong>{booking.bookingDate}</strong>
                    </div>

                  </div>

                  <button
                    className="cancel-booking-button"
                    onClick={() =>
                      handleCancelBooking(index)
                    }
                  >
                    Cancel Booking
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>

    </main>
  );
}

export default MyBookings;
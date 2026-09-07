import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/MyBookings.css";

function MyBookings() {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // தற்போது localhost use பண்ணலாம்
  const API_URL = "http://localhost:5000/api/bookings";


  useEffect(() => {
    fetchBookings();
  }, []);


  // Fetch User Bookings
  const fetchBookings = async () => {
    try {
      const userData = JSON.parse(
        localStorage.getItem("user")
      );

      if (!userData) {
        toast.error("Please login first");

        setTimeout(() => {
          navigate("/login");
        }, 1500);

        return;
      }


      const response = await fetch(
        `${API_URL}/user/${userData._id}`
      );

      const data = await response.json();


      if (response.ok) {
        setBookings(data);
      } else {
        toast.error(
          data.message || "Failed to load bookings"
        );
      }

    } catch (error) {
      console.error("Fetch booking error:", error);

      toast.error(
        "Something went wrong while loading bookings"
      );

    } finally {
      setLoading(false);
    }
  };


  // Cancel Booking
  const handleCancelBooking = async (bookingId) => {
    try {
      const response = await fetch(
        `${API_URL}/${bookingId}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();


      if (response.ok) {

        setBookings((previousBookings) =>
          previousBookings.filter(
            (booking) =>
              booking._id !== bookingId
          )
        );

        toast.success(
          "Booking cancelled successfully!"
        );

      } else {

        toast.error(
          data.message ||
          "Failed to cancel booking"
        );

      }

    } catch (error) {

      console.error(
        "Cancel booking error:",
        error
      );

      toast.error(
        "Something went wrong while cancelling booking"
      );
    }
  };


  // Loading
  if (loading) {
    return (
      <main className="my-bookings-page">

        <ToastContainer />

        <div className="empty-bookings">
          <h2>Loading Bookings...</h2>
        </div>

      </main>
    );
  }


  return (
    <main className="my-bookings-page">

      <ToastContainer />


      {/* Header */}

      <section className="my-bookings-header">

        <h1>My Bookings</h1>

        <p>
          View and manage your property booking requests
        </p>

      </section>


      {/* Content */}

      <section className="my-bookings-content">


        {bookings.length === 0 ? (

          <div className="empty-bookings">

            <h2>No Bookings Yet</h2>

            <p>
              You haven't booked any properties yet.
            </p>


            <button
              onClick={() =>
                navigate("/projects")
              }
            >
              Explore Projects
            </button>

          </div>


        ) : (

          <div className="bookings-container">


            {bookings.map((booking) => (

              <div
                className="booking-card"
                key={booking._id}
              >


                {/* Project Image */}

                {booking.projectImage ? (

                  <img
                    src={booking.projectImage}
                    alt={booking.projectName}
                  />

                ) : (

                  <div className="booking-image-placeholder">
                    No Image Available
                  </div>

                )}


                {/* Booking Content */}

                <div className="booking-card-content">


                  <div className="booking-card-top">

                    <div>

                      <h3>
                        {booking.projectName}
                      </h3>


                      <p className="booking-location">

                        {booking.projectLocation}

                      </p>

                    </div>


                    <span className="booking-pending">

                      {booking.status || "Pending"}

                    </span>

                  </div>


                  {/* Booking Details */}

                  <div className="booking-details">


                    <div>

                      <span>
                        Customer Name
                      </span>

                      <strong>
                        {booking.customerName}
                      </strong>

                    </div>


                    <div>

                      <span>
                        Phone
                      </span>

                      <strong>
                        {booking.customerPhone}
                      </strong>

                    </div>


                    <div>

                      <span>
                        Email
                      </span>

                      <strong>
                        {booking.customerEmail}
                      </strong>

                    </div>


                    <div>

                      <span>
                        Visit Date
                      </span>

                      <strong>

                        {booking.visitDate
                          ? new Date(
                              booking.visitDate
                            ).toLocaleDateString()
                          : "Not selected"}

                      </strong>

                    </div>


                    <div>

                      <span>
                        Price
                      </span>

                      <strong>
                        {booking.projectPrice}
                      </strong>

                    </div>


                    <div>

                      <span>
                        Booking Date
                      </span>

                      <strong>

                        {booking.createdAt
                          ? new Date(
                              booking.createdAt
                            ).toLocaleDateString()
                          : "N/A"}

                      </strong>

                    </div>


                  </div>


                  {/* Cancel Button */}

                  <button
                    className="cancel-booking-button"

                    onClick={() =>
                      handleCancelBooking(
                        booking._id
                      )
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
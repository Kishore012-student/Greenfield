import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/Booking.css";

function Booking() {

  const location = useLocation();
  const navigate = useNavigate();

  const project = location.state;


  // Get logged in user
  const user = JSON.parse(
    localStorage.getItem("user")
  );


  // Form Data
  const [formData, setFormData] = useState({

    name: user?.name || "",

    email: user?.email || "",

    phone: "",

    visitDate: "",

  });


  const [loading, setLoading] =
    useState(false);


  // Handle Input Change
  const handleChange = (event) => {

    setFormData({

      ...formData,

      [event.target.name]:
        event.target.value,

    });

  };


  // Handle Booking Submit
  const handleSubmit = async (event) => {

    event.preventDefault();


    // Check User Login
    if (!user) {

      toast.error(
        "Please login before booking"
      );


      setTimeout(() => {

        navigate("/login");

      }, 1500);


      return;

    }


    setLoading(true);


    try {

      const response = await fetch(

        "https://greenfield-bwst.onrender.com/api/bookings",

        {

          method: "POST",


          headers: {

            "Content-Type":
              "application/json",

          },


          body: JSON.stringify({

            // User ID
            user:
              user._id ||
              user.id,


            // Project Details
            projectName:
              project.name,


            projectLocation:
              project.fullLocation ||
              project.location,


            projectPrice:
              project.price,


            // IMPORTANT
            projectImage:
              project.image,


            // Customer Details
            customerName:
              formData.name,


            customerEmail:
              formData.email,


            customerPhone:
              formData.phone,


            visitDate:
              formData.visitDate,

          }),

        }

      );


      const data =
        await response.json();


      if (response.ok) {


        toast.success(

          "Booking submitted successfully!",

          {

            position:
              "top-right",

            autoClose:
              2000,

          }

        );


        setTimeout(() => {

          navigate(
            "/my-bookings"
          );

        }, 2200);


      } else {


        toast.error(

          data.message ||
          "Booking failed"

        );


      }


    } catch (error) {


      console.log(

        "Booking error:",

        error

      );


      toast.error(

        "Unable to connect to server"

      );


    } finally {


      setLoading(false);


    }

  };


  // Project Not Found
  if (!project) {

    return (

      <div className="booking-not-found">

        <h2>
          Project details not found
        </h2>


        <button

          onClick={() =>
            navigate("/projects")
          }

        >

          View Projects

        </button>


      </div>

    );

  }


  return (

    <main className="booking-page">


      <ToastContainer />


      {/* Header */}

      <section className="booking-header">


        <h1>
          Book Your Property
        </h1>


        <p>
          Fill in your details and we will contact you soon.
        </p>


      </section>


      {/* Booking Content */}

      <section className="booking-content">


        {/* Project Card */}

        <div className="booking-project-card">


          <img

            src={project.image}

            alt={project.name}

          />


          <div className="booking-project-info">


            <h2>
              {project.name}
            </h2>


            <p>

              {
                project.fullLocation ||
                project.location
              }

            </p>


            <div className="booking-price">

              Starting from {project.price}

            </div>


            <div className="booking-status">

              {project.status}

            </div>


          </div>


        </div>


        {/* Booking Form */}

        <div className="booking-form-card">


          <h2>
            Booking Details
          </h2>


          <form
            onSubmit={handleSubmit}
          >


            {/* Name */}

            <div className="booking-form-group">


              <label>
                Full Name
              </label>


              <input

                type="text"

                name="name"

                placeholder="Enter your full name"

                value={formData.name}

                onChange={handleChange}

                required

              />


            </div>


            {/* Email */}

            <div className="booking-form-group">


              <label>
                Email Address
              </label>


              <input

                type="email"

                name="email"

                placeholder="Enter your email"

                value={formData.email}

                onChange={handleChange}

                required

              />


            </div>


            {/* Phone */}

            <div className="booking-form-group">


              <label>
                Phone Number
              </label>


              <input

                type="tel"

                name="phone"

                placeholder="Enter your phone number"

                value={formData.phone}

                onChange={handleChange}

                required

              />


            </div>


            {/* Visit Date */}

            <div className="booking-form-group">


              <label>
                Preferred Visit Date
              </label>


              <input

                type="date"

                name="visitDate"

                value={formData.visitDate}

                onChange={handleChange}

                required

              />


            </div>


            {/* Submit */}

            <button

              type="submit"

              className="confirm-booking-button"

              disabled={loading}

            >

              {
                loading
                  ? "Submitting..."
                  : "Confirm Booking"
              }

            </button>


          </form>


        </div>


      </section>


    </main>

  );

}


export default Booking;
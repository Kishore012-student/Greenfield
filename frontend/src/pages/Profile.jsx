import { useNavigate } from "react-router-dom";
import "../css/Profile.css";

function Profile() {

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );


  if (!user) {

    navigate("/login");

    return null;

  }


  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");

  };


  const userInitial =
    user.name
      ? user.name.charAt(0).toUpperCase()
      : "U";


  return (

    <main className="profile-page">


      <section className="profile-header">

        <h1>
          My Profile
        </h1>

        <p>
          Manage your account information
        </p>

      </section>


      <section className="profile-content">


        <div className="profile-card">


          <div className="profile-avatar">

            {userInitial}

          </div>


          <h2>

            {user.name}

          </h2>


          <p className="profile-email">

            {user.email}

          </p>


          <div className="profile-details">


            <div className="profile-detail">

              <span>
                Full Name
              </span>

              <strong>
                {user.name}
              </strong>

            </div>


            <div className="profile-detail">

              <span>
                Email Address
              </span>

              <strong>
                {user.email}
              </strong>

            </div>


          </div>


          <div className="profile-actions">


            <button
              className="profile-wishlist-button"
              onClick={() =>
                navigate("/wishlist")
              }
            >

              My Wishlist

            </button>


            <button
              className="profile-bookings-button"
              onClick={() =>
                navigate("/my-bookings")
              }
            >

              My Bookings

            </button>


            <button
              className="profile-logout-button"
              onClick={handleLogout}
            >

              Logout

            </button>


          </div>


        </div>


      </section>


    </main>

  );

}


export default Profile;
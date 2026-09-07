import {
  Container,
  Nav,
  Navbar as BootstrapNavbar,
  Button,
  Dropdown,
} from "react-bootstrap";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { useState } from "react";

import logo from "../assets/leaf-logo.png";
import "../css/Navbar.css";


function Navbardemo() {

  const navigate = useNavigate();

  // Navbar collapse state
  const [expanded, setExpanded] =
    useState(false);


  const token =
    localStorage.getItem("token");

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );


  // Close navbar after clicking link
  const handleNavClick = () => {

    setExpanded(false);

  };


  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    setExpanded(false);

    navigate("/login");

  };


  return (

    <>

      <BootstrapNavbar
        expand="lg"
        className="main-navbar"
        expanded={expanded}
        onToggle={(value) =>
          setExpanded(value)
        }
      >

        <Container>

          <BootstrapNavbar.Brand
            as={Link}
            to="/"
            className="brand-logo"
            onClick={handleNavClick}
          >

            <img
              src={logo}
              alt="Land Icon"
              className="brand-leaf-logo"
            />

            GreenField

          </BootstrapNavbar.Brand>


          <BootstrapNavbar.Toggle
            aria-controls="main-navbar-nav"
          />


          <BootstrapNavbar.Collapse
            id="main-navbar-nav"
          >

            <Nav className="mx-auto">


              <Nav.Link
                as={Link}
                to="/"
                className="nav-link-custom"
                onClick={handleNavClick}
              >
                Home
              </Nav.Link>


              <Nav.Link
                as={Link}
                to="/projects"
                className="nav-link-custom"
                onClick={handleNavClick}
              >
                Projects
              </Nav.Link>


              <Nav.Link
                as={Link}
                to="/about"
                className="nav-link-custom"
                onClick={handleNavClick}
              >
                About Us
              </Nav.Link>


              <Nav.Link
                as={Link}
                to="/contact"
                className="nav-link-custom"
                onClick={handleNavClick}
              >
                Contact Us
              </Nav.Link>


            </Nav>


            <div className="navbar-actions">


              {token && user ? (

                <Dropdown>


                  <Dropdown.Toggle
                    className="user-menu"
                  >
                    Welcome, {user.name}
                  </Dropdown.Toggle>


                  <Dropdown.Menu>


                    <Dropdown.Item
                      as={Link}
                      to="/profile"
                      onClick={handleNavClick}
                    >
                      Profile
                    </Dropdown.Item>


                    <Dropdown.Item
                      as={Link}
                      to="/wishlist"
                      onClick={handleNavClick}
                    >
                      Wishlist
                    </Dropdown.Item>


                    <Dropdown.Item
                      as={Link}
                      to="/my-bookings"
                      onClick={handleNavClick}
                    >
                      My Bookings
                    </Dropdown.Item>


                    <Dropdown.Divider />


                    <Dropdown.Item
                      onClick={handleLogout}
                    >
                      Logout
                    </Dropdown.Item>


                  </Dropdown.Menu>


                </Dropdown>

              ) : (

                <>


                  <Button
                    as={Link}
                    to="/login"
                    className="login-button1"
                    onClick={handleNavClick}
                  >
                    Login
                  </Button>


                  <Button
                    as={Link}
                    to="/register"
                    className="register-button1"
                    onClick={handleNavClick}
                  >
                    Register
                  </Button>


                </>

              )}


            </div>


          </BootstrapNavbar.Collapse>


        </Container>

      </BootstrapNavbar>

    </>

  );

}


export default Navbardemo;
import {
  Container,
  Nav,
  Navbar as BootstrapNavbar,
  Button,
  Dropdown,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/leaf-logo.png";
import "../css/Navbar.css";

function Navbardemo() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <>
      <BootstrapNavbar expand="lg" className="main-navbar">
        <Container>

          <BootstrapNavbar.Brand
            as={Link}
            to="/"
            className="brand-logo"
          >
            <img
              src={logo}
              alt="Land Icon"
              className="brand-leaf-logo"
            />
            GreenField
          </BootstrapNavbar.Brand>

          <BootstrapNavbar.Toggle aria-controls="main-navbar-nav" />

          <BootstrapNavbar.Collapse id="main-navbar-nav">

            <Nav className="mx-auto">

              <Nav.Link
                as={Link}
                to="/"
                className="nav-link-custom"
              >
                Home
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/projects"
                className="nav-link-custom"
              >
                Projects
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/about"
                className="nav-link-custom"
              >
                About Us
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/contact"
                className="nav-link-custom"
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
                    >
                      Profile
                    </Dropdown.Item>

                    <Dropdown.Item
                      as={Link}
                      to="/wishlist"
                    >
                      Wishlist
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={Link}
                      to="/my-bookings"
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
                  >
                    Login
                  </Button>

                  <Button
                    as={Link}
                    to="/register"
                    className="register-button1"
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
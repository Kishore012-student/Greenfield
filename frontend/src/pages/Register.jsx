import { useState } from "react";
import { FormGroup } from "react-bootstrap";
import "../css/Register.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      setMessage(data.message);

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      console.log(error)
      setMessage("Unable to connect to server");
    }
  };

  return (
    <main className="register-page">
      <div className="container">
        <div className="row justify-content-center align-items-center register-row">
          <div className="col-lg-5 col-md-7 col-sm-10">
            <div className="register-card">

              <div className="register-header">
                <h1>Create Account</h1>
                <p>Register to continue with your account</p>
              </div>

              <form onSubmit={handleSubmit}>

                <FormGroup>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <button
                  type="submit"
                  className="register-submit-button"
                >
                  Register
                </button>

                {message && (
                  <p className="register-message">
                    {message}
                  </p>
                )}

                <p className="login-text">
                  Already have an account?{" "}
                  <a href="/login">Login</a>
                </p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Register;
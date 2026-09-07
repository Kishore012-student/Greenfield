import { useState } from "react";
import { FormGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    try {
      const response = await fetch(
        "https://greenfield-bwst.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        navigate("/");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.log(error);
      setMessage("Unable to connect to server");
    }
  };

  return (
    <main className="login-page">
      <div className="container">
        <div className="row justify-content-center align-items-center login-row">

          <div className="col-lg-5 col-md-7 col-sm-10">
            <div className="login-card">

              <div className="login-header">
                <h1>Welcome Back</h1>
                <p>Login to continue to your account</p>
              </div>

              <form
                className="form-full"
                onSubmit={handleSubmit}
              >

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
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <button
                  type="submit"
                  className="btn-login"
                >
                  Login
                </button>

                {message && (
                  <p className="login-message">
                    {message}
                  </p>
                )}

                <p className="register-text">
                  Don't have an account?{" "}
                  <a href="/register">Register</a>
                </p>

              </form>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default Login;
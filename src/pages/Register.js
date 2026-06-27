import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import API from "../services/api";

function Register() {

  const navigate = useNavigate();

  if (localStorage.getItem("token")) {
    navigate("/dashboard");
  }

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleRegister = async (e) => {

    e.preventDefault();

    setError("");

    if (
      !form.name ||
      !form.email ||
      !form.password
    ) {
      setError(
        "All fields are required"
      );

      return;
    }

    if (form.password.length < 6) {

      setError(
        "Password must be at least 6 characters"
      );

      return;
    }

    try {

      setLoading(true);

      await API.post(
        "/auth/register",
        form
      );

      alert(
        "Registered successfully"
      );

      navigate("/login");

    } catch (err) {

      setError(
        err.response?.data
          ?.message ||
          "Registration failed"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="register-page">

      <form
        className="register-card"
        onSubmit={handleRegister}
      >

        <div className="register-heading">
          <span className="register-pill">
            Resume Builder
          </span>

          <h2>Create Account</h2>

          <p>
            Start building a sharp resume with
            animated templates and quick editing.
          </p>
        </div>

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={form.password}
          onChange={handleChange}
        />

        <button type="submit">

          {loading
            ? "Creating Account..."
            : "Register"}

        </button>

        <p className="register-login">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </form>

      <div
        className="register-showcase"
        aria-hidden="true"
      >
        <div className="orbit-ring orbit-one" />
        <div className="orbit-ring orbit-two" />

        <div className="resume-3d-card">
          <div className="resume-3d-top">
            <span />
            <span />
            <span />
          </div>

          <div className="resume-profile-row">
            <div className="resume-avatar" />
            <div>
              <div className="resume-line wide" />
              <div className="resume-line small" />
            </div>
          </div>

          <div className="resume-block">
            <div className="resume-line full" />
            <div className="resume-line wide" />
            <div className="resume-line medium" />
          </div>

          <div className="resume-split">
            <div />
            <div />
          </div>

          <div className="resume-skill-row">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Register;

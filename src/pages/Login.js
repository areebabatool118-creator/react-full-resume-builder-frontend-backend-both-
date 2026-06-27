import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {

  const navigate = useNavigate();

  if (localStorage.getItem("token")) {
    navigate("/dashboard");
  }

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    if (
      !form.email ||
      !form.password
    ) {
      setError(
        "Email and password are required"
      );

      return;
    }

    try {
      setLoading(true);

      const res = await API.post(
        "/auth/login",
        form
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(
          res.data.user
        )
      );

      alert("Login successful");

      navigate("/dashboard");

      window.location.reload();

    } catch (err) {

      setError(
        err.response?.data
          ?.message ||
          "Login failed"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="auth-page login-page">

      <form
        className="auth-card login-card"
        onSubmit={handleLogin}
      >

        <span className="register-pill">
          Welcome Back
        </span>

        <h2>Login</h2>

        {error && (
          <p className="error">
            {error}
          </p>
        )}

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
            ? "Logging in..."
            : "Login"}

        </button>

      </form>

    </div>
  );
}

export default Login;

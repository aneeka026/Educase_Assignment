import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const savedUser = JSON.parse(localStorage.getItem("popx-user"));
    if (!savedUser) {
      alert("No user found. Please signup first.");
      return;
    }
    if (savedUser.email === email && savedUser.password === password) {
      navigate("/settings");
    } else {
      alert("Invalid credentials.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Sign in to your PopX account</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;

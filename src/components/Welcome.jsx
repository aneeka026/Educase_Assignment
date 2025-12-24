import { useNavigate } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-wrapper">
      <div className="welcome-card">
        <h1 className="title-text">Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

        <button
          className="btn-primary"
          onClick={() => navigate("/signup")}
        >
          Create Account
        </button>

        <button
          className="btn-secondary"
          onClick={() => navigate("/login")}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Welcome;

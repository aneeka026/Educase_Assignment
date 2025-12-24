import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    const { fullName, phone, email, password, company, agency } = form;
    if (!fullName || !phone || !email || !password || !company || !agency) {
      alert("All fields are required");
      return;
    }
    localStorage.setItem("popx-user", JSON.stringify(form));
    navigate("/settings");
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-card">
        <h2>
          Create your <br /> PopX account
        </h2>

        <div className="form-group">
          <label>Full Name <span>*</span></label>
          <input
            name="fullName"
            placeholder="Enter full name"
            value={form.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Phone number <span>*</span></label>
          <input
            name="phone"
            placeholder="Enter phone number"
            value={form.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email address <span>*</span></label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Password <span>*</span></label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Company name <span>*</span></label>
          <input
            name="company"
            placeholder="Enter company name"
            value={form.company}
            onChange={handleChange}
          />
        </div>

        <div className="agency-section">
          <p>Are you an Agency? <span>*</span></p>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={form.agency === "yes"}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="agency"
                value="no"
                checked={form.agency === "no"}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>

        <button className="submit-btn" onClick={handleSubmit}>
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Signup;

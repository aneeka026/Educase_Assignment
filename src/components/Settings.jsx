import { useEffect, useState } from "react";
import profileImg from "../assets/profile.png";
import profileIcon from "../assets/profileIcon.png";
import "./Settings.css";

const Settings = () => {
  const [user, setUser] = useState({
    fullName: "Marry Doe",
    email: "Marry@gmail.com",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam Erat, Sed Diam",
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("popx-user"));
    if (saved) {
      setUser((prev) => ({
        ...prev,
        fullName: saved.fullName || prev.fullName,
        email: saved.email || prev.email,
      }));
    }
  }, []);

  return (
    <div className="settings-wrapper">
      <div className="settings-card">
        <div
         className="settings-title">Account Settings</div>

        <div className="profile-section">
          <div className="avatar-wrapper">
            <img src={profileImg} alt="profile" />
            <div className="edit-icon">
              <img src={profileIcon} alt="edit" />
            </div>
          </div>

          <div className="user-info">
            <h3>{user.fullName}</h3>
            <p>{user.email}</p>
          </div>
        </div>

        <p className="user-description">{user.description}</p>
      </div>
    </div>
  );
};

export default Settings;

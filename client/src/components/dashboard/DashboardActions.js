import { Link } from "react-router-dom";
import React from "react";

const DashboardActions = () => {
  return (
    <div className="dash-buttons">
      <Link to="/edit-profile" className="btn">
        <i className="fas fa-id-card text-primary"></i> Edit Profile
      </Link>

      <Link to="/add-experience" className="btn">
        <i className="fas fa-user-tie text-primary"></i> Add Experience
      </Link>

      <Link to="/add-patient" className="btn">
        <i className="fas fa-user-tie text-primary"></i> Add Patient
      </Link>
    </div>
  );
};

export default DashboardActions;

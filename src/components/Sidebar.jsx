import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <Link to="dashboard" className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="nav-item active">
          <Link to="demo" className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Demo</span>
          </Link>
        </li>
        <hr className="sidebar-divider" />
      </ul>
    </>
  );
}

export default Sidebar;

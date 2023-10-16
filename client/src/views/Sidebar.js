import React from "react";
import { Nav } from "react-bootstrap";
import { FaChevronLeft, FaBars, FaHome, FaChartLine, FaMoneyBillAlt, FaExclamationCircle, FaHeart } from "react-icons/fa";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div className={isOpen ? "sidebar is-open" : "sidebar"}>
      <div className="sidebar-header">
        <span color="info" onClick={toggle}>
          <FaChevronLeft />
        </span>
        <h3>Dashboard</h3>
      </div>
      <div className="side-menu">
        <Nav>
          <Nav.Item>
            <Nav.Link href="/dashboard">
              <FaHome /> Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/charts">
              <FaChartLine /> Charts
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/transactions">
              <FaMoneyBillAlt /> Transactions
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/alerts">
              <FaExclamationCircle /> Alerts
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/favorites">
              <FaHeart /> Favorites
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;

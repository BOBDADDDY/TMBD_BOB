import React from "react";
import { Navbar, Sidebar } from "./";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="d-lg-flex">
        <div
          className="d-none d-lg-block"
          style={{
            width: "200px",
            minHeight: "100vh",
            backgroundColor: "#lalbld",
          }}
        >
          <div className="position-fixed top-0 start-0 sideAdust scrollbody">
            <Sidebar />
          </div>
        </div>

        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/moleculs/Footer";
import {
  BellIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { SysValidateForm, showToast } from "../utils/global_store";
import { useEffect } from "react";
import ActionModal from "../components/moleculs/ActionModal";
import { Popconfirm } from "antd";
import { routes_name } from "../route/static_route";

const AdminDashboard = ({ label, subHeading, children }) => {
  const [user, set_user] = useState({
    full_name: "User01",
    email: "user01@mail.co.id",
  });
  const [is_notification, set_is_notification] = useState(true);
  const data = [];
  return (
    <div id="main" className="layout-navbar navbar-fixed">
      <header>
        <nav className="navbar navbar-expand navbar-light navbar-top">
          <div className="container-fluid  justify-content-center">
            <a
              href="#"
              className="burger-btn d-block"
              style={{ color: "#828282" }}
            >
              <Bars3Icon className="fs-3" width="30" height="30" />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-lg-0">
                <li className="nav-item dropdown me-3">
                  <a
                    className="nav-link active dropdown-toggle text-gray-600"
                    href="#"
                    data-bs-toggle="dropdown"
                    data-bs-display="static"
                    aria-expanded="false"
                  >
                    <BellIcon width="30" height="30" />
                    <span
                      className={`badge badge-notification ${
                        is_notification ? " bg-danger rounded-circle" : ""
                      }`}
                      style={{ width: "13px", height: "13px" }}
                    >
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end notification-dropdown"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li className="dropdown-header">
                      <h6>Approval</h6>
                    </li>
                    {data.length > 0 &&
                      data.map((val) => {
                        return (
                          <li className="dropdown-item notification-item">
                            <div className="d-flex align-items-center">
                              <div className="notification-icon bg-success">
                                <i className="bi bi-file-earmark-check"></i>
                              </div>
                              <div className="notification-text ms-4">
                                <p className="notification-title font-bold">
                                  {val?.worklist_title ?? ""}
                                </p>
                                <p className="notification-subtitle font-thin text-sm">
                                  {val?.requester_name ?? ""}
                                </p>
                                <div className="d-flex justify-content-between">
                                  <div className="btn-group" role="group">
                                    <a
                                      className="btn btn-sm btn-primary btn-icon text-white"
                                      // onClick={() =>
                                      //   handleApprove(
                                      //     val?.worklist_journey_id ?? ""
                                      //   )
                                      // }
                                    >
                                      Approve
                                    </a>
                                    <a
                                      className="btn btn-sm btn-danger btn-icon text-white"
                                      // onClick={() =>
                                      //   openModal(
                                      //     val?.worklist_journey_id ?? ""
                                      //   )
                                      // }
                                    >
                                      Reject
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}

                    <li>
                      <p className="text-center py-2 mb-0">
                        See all notification
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="dropdown">
                <a href="#" data-bs-toggle="dropdown" aria-expanded="false">
                  <div className="user-menu d-flex">
                    <div className="user-name text-end me-3">
                      <h6 className="mb-0 text-gray-600">{user.full_name}</h6>
                      <p className="mb-0 text-sm text-gray-600">{user.email}</p>
                    </div>
                    <div className="user-img d-flex align-items-center">
                      <div className="avatar avatar-md">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/faces/1.jpg"
                          }
                        />
                      </div>
                    </div>
                  </div>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="dropdownMenuButton"
                  style={{ minWidth: "11rem" }}
                >
                  <li>
                    <h6 className="dropdown-header">
                      Hello, {user.full_name}!
                    </h6>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      to={routes_name.AUTH_LOGOUT}
                      className="dropdown-item"
                    >
                      <i className="icon-mid bi bi-box-arrow-left me-2"></i>
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div id="main-content">
        <div className="page-content">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;

import clsx from "clsx";
import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import isEmpty from "../../utils/is-empty";
import HeroIcon from "../../components/HeroIcon";
import {sys_images, sys_labels } from "../../utils/constants";
import GlobalLoadingBlock from "../../components/Loading";
import { routes_name } from "../../route/static_route";

const defaultNav = [
  {
    icon: "HomeIcon",
    iconType: "outline",
    label: sys_labels.menus.DASHBOARD,
    link: routes_name.DASHBOARD,
  },
  {
    icon: "DesktopComputerIcon",
    iconType: "outline",
    label: sys_labels.menus.MASTER,
    dir: routes_name.MASTER,
    subMenu: [
      {
        label: sys_labels.menus.USER,
        link: routes_name.MASTER_USER,
      },
    ],
  },
 
  {
    icon: "TableIcon",
    iconType: "solid",
    label: sys_labels.menus.TRANSACTION,
    dir: routes_name.TRANSACTION,
    subMenu: [
      {
        label: sys_labels.menus.USER,
        link: routes_name.TRANSACTION_USER,
      },
    ],
  },
  {
    icon: "PresentationChartBarIcon",
    iconType: "outline",
    label: sys_labels.menus.REPORT,
    dir: routes_name.REPORT,
    subMenu: [
      {
        label: sys_labels.menus.USER,
        link: routes_name.REPORT_USER,
      }
    ],
  },
 
];
const AdminDashboardLayout = () => {
  const location = useLocation();
  // const { isLoading } = useLoadingContext();
  const addScript = (src, id) => {
    const el = document.getElementById(id);
    if (el) return;
    const script = document.createElement("script");
    script.src = src;
    script.charset = "utf-8";
    script.async = true;
    script.id = id;
    document.head.appendChild(script);
  };
  useEffect(() => {
  
  }, []);
  return (
    <div id="app">
      <Helmet>
        <script src="/assets/js/initTheme.js"></script>
        <script src="/assets/js/bootstrap.js"></script>
        <script src="/assets/js/mazer.js"></script>
        <script src="/assets/js/app.js"></script>
      </Helmet>
      {/* {isLoading && <GlobalLoadingBlock />} */}
      <div id="sidebar" className="active">
        <div className="sidebar-wrapper active">
          <div className="sidebar-header position-relative">
            <div className="d-flex justify-content-between">
              <Link to="/">
                <img
                  src={sys_images.img_logo}
                  alt="Logo"
                />
              </Link>

              <div className="sidebar-toggler x">
                <a href="#" className="sidebar-hide d-xl-none d-block">
                  <i className="bi bi-x bi-middle"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="sidebar-menu">
            <ul className="menu">
              { defaultNav.length > 0 &&
                defaultNav.map((el, idx) => {
                  const link = "" + (el.link ? el.link : "");
                  if (el.heading) {
                    return (
                      <li
                        key={"sidebar-nav-item" + idx}
                        className="sidebar-title"
                      >
                        {el.label}
                      </li>
                    );
                  }
                  return (
                    <li
                      key={"sidebar-nav-item" + idx}
                      className={clsx(
                        el.heading ? "sidebar-title" : "sidebar-item",
                        !isEmpty(el.subMenu) && "has-sub",
                        location.pathname.includes(el.link) && "active",
                        !isEmpty(el.subMenu) &&
                          el.dir &&
                          location.pathname.includes(el.dir) &&
                          "active"
                      )}
                    >
                      <Link to={link} className="sidebar-link">
                        <HeroIcon iconName={el.icon} iconType={el.iconType} />
                        <span>{el.label}</span>
                      </Link>
                      {!isEmpty(el.subMenu) && (
                        <ul className="submenu">
                          {el.subMenu.map((el2, idx2) => {
                            const link2 = "" + (el2.link ? el2.link : "");
                            return (
                              <li
                                key={"sub-menu" + idx + idx2}
                                className={clsx(
                                  "submenu-item",
                                  location.pathname === link2 && "active"
                                )}
                              >
                                <Link to={link2}>{el2.label}</Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
      <header id="hamburger" className="mb-3">
        <a href="#" className="burger-btn d-block d-xl-none">
          <i className="bi bi-justify fs-3"></i>
        </a>
      </header>
      <Outlet />
    </div>
  );
};

export default AdminDashboardLayout;

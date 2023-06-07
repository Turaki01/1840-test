import NavComponent from "components/Nav";
import React from "react";
import { FaCog, FaGraduationCap, FaHome, FaRegCalendarAlt, FaSchool, FaShoppingBag, FaSignOutAlt, FaUserAlt, FaUserFriends, FaUsers, FaWpforms } from "react-icons/fa";
import { Redirect, Route, Switch } from "react-router";
import { NavLink } from "react-router-dom";
import { MenuList } from "routes/MenuList";
import { Routes } from "routes/routes-constants";
import AppRoutes from "routes/routes.config";
import { handleLogout } from "utils/auth-util";

const AppLayout = () => {
  const authenticated = AppRoutes.filter((route) => route.isPrivate);
  const getMenuIcons = (name: string) => {
    switch (name.toLowerCase()) {
      case "home":
        return <FaHome />;
      case "my profile":
        return <FaUserAlt />;
      case "connections":
        return <FaUserFriends />;
      case "events":
        return <FaSchool />;
      case "calender":
        return <FaRegCalendarAlt />;
      case "groups":
        return <FaUsers />;
      case "marketplace":
        return <FaShoppingBag />;
      case "courses":
        return <FaGraduationCap />;
      case "messages":
        return <FaWpforms />;
      case "settings":
        return <FaCog />;
      default:
        return "HomeIcon";
    }
  };

  return (
    <div>
      <NavComponent />
      <div className="min-h-[100vh] bg-[#f5f7f8] p-6 app-layout">
        <div className="bg-white min-h-[70vh] w-[300px] py-4 px-10 rounded-md">
          {MenuList.map((menu, index: number) => (
            <NavLink
              key={menu.name + index}
              to={menu.path}
              activeClassName="activeMenu"
              className="flex mb-2 py-3 px-5 rounded-md text-[14px] font-[300] items-center"
            >
              {getMenuIcons(menu.name)}
              <span className="ml-3">{menu.name}</span>
            </NavLink>
          ))}

          <div
            className="flex mb-2 py-3 px-5 rounded-md text-[14px] font-[300] cursor-pointer items-center"
            onClick={handleLogout}
          >
            <FaSignOutAlt className="mr-3" />
            Logout
          </div>
        </div>

        <div>
          <Switch>
            {authenticated.map((path) => (
              <Route
                key={path.path}
                exact={path.exact}
                path={path.path}
                component={path.component}
              />
            ))}

            <Redirect to={Routes.Dashboard} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;

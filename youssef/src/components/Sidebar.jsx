import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaBlog,
  FaBars,
} from "react-icons/fa";

const SidebarMenu = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="h-screen flex">
      <Sidebar
        collapsed={collapsed}
        backgroundColor="#1f2937" // Tailwind's gray-800
        className="!text-white"
      >
        <Menu>
          <MenuItem
            icon={<FaBars />}
            onClick={() => setCollapsed(!collapsed)}
            className="!mb-4"
          >
            {!collapsed && "Toggle"}
          </MenuItem>

          <MenuItem icon={<FaHome />} component={<Link to="/" />}>
            Home
          </MenuItem>
          <MenuItem icon={<FaUser />} component={<Link to="/about" />}>
            About
          </MenuItem>
          <MenuItem icon={<FaProjectDiagram />} component={<Link to="/projects" />}>
            Projects
          </MenuItem>
          <MenuItem icon={<FaEnvelope />} component={<Link to="/contact" />}>
            Contact
          </MenuItem>
          <MenuItem icon={<FaBlog />} component={<Link to="/blog" />}>
            Blog
          </MenuItem>
        </Menu>
      </Sidebar>

      <div className="flex-1 p-4 overflow-auto">
        {/* Page content will be rendered here */}
      </div>
    </div>
  );
};

export default SidebarMenu;

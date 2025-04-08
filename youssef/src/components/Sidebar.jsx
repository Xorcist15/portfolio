import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link as ScrollLink } from 'react-scroll';
import { useState } from 'react';
import {
  Info,
  FolderKanban,
  Mail,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';

export default function SideNav() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sidebar
      collapsed={collapsed}
      className="h-screen bg-gray-800 text-white border-r border-gray-700"
      rootStyles={{ color: 'white' }}
    >
      <Menu menuItemStyles={{
        button: {
          className: 'hover:bg-gray-700 transition-all',
        },
        label: {
          className: 'ml-2',
        },
        icon: {
          className: 'text-white',
        },
      }}>
        <MenuItem
          onClick={() => setCollapsed(!collapsed)}
          icon={collapsed ? <ChevronsRight /> : <ChevronsLeft />}
        >
          {!collapsed && 'Collapse'}
        </MenuItem>

        <MenuItem
          icon={<Info size={18} />}
          component={
            <ScrollLink
              to="about"
              smooth
              duration={500}
              containerId="container"
              className="block w-full h-full cursor-pointer"
            />
          }
        >
          About
        </MenuItem>

        <MenuItem
          icon={<FolderKanban size={18} />}
          component={
            <ScrollLink
              to="projects"
              smooth
              duration={500}
              containerId="container"
              className="block w-full h-full cursor-pointer"
            />
          }
        >
          Projects
        </MenuItem>

        <MenuItem
          icon={<Mail size={18} />}
          component={
            <ScrollLink
              to="contact"
              smooth
              duration={500}
              containerId="container"
              className="block w-full h-full cursor-pointer"
            />
          }
        >
          Contact
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}

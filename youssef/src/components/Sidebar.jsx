import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link as ScrollLink } from 'react-scroll';
import { useState } from 'react';
import {
  Home,
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
        backgroundColor="black" // Tailwind's gray-900
        rootStyles={{
          color: 'white',
        }}
      >
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              return {
                color: 'white',
                backgroundColor: active ? '#7f1d1d' : 'transparent', // dark red when active
                '&:hover': {
                  backgroundColor: '#991b1b', // Tailwind's red-800
                },
              };
            },
            icon: {
              color: 'white',
            },
            label: {
              marginLeft: '8px',
            },
          }}
        >
          <MenuItem
            onClick={() => setCollapsed(!collapsed)}
            icon={collapsed ? <ChevronsRight /> : <ChevronsLeft />}
          >
            {!collapsed && 'Collapse'}
          </MenuItem>

          <MenuItem
            icon={<Home size={18} />}
            component={
              <ScrollLink
                to="home"
                smooth
                duration={1000}
                containerId="container"
                className="block w-full h-full cursor-pointer"
              />
            }
          >
            Home 
          </MenuItem>

          <MenuItem
            icon={<Info size={18} />}
            component={
              <ScrollLink
                to="about"
                smooth
                duration={1000}
                containerId="container"
                className="block w-full h-full cursor-pointer"
              />
            }
          >
            About me
          </MenuItem>

          <MenuItem
            icon={<FolderKanban size={18} />}
            component={
              <ScrollLink
                to="projects"
                smooth
                duration={1000}
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
                duration={1000}
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

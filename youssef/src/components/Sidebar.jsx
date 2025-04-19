import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { scroller } from 'react-scroll';
import { Link as ScrollLink } from 'react-scroll';
import { useEffect, useState } from 'react';
import {
  Home,
  Info,
  FolderKanban,
  Mail,
  ChevronsLeft,
  ChevronsRight,
  BarChart2,
} from 'lucide-react';

export default function SideNav() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveItem(entry.target.id);
        }
      });
    }, options);

    document.querySelectorAll('.section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Sidebar
      collapsed={collapsed}
      backgroundColor="#0f0f0f"
      rootStyles={{ color: 'white', }}
    >
      <Menu
        menuItemStyles={{
          button: ({ active }) => ({
            color: 'white',
            backgroundColor: active ? '#7f1d1d' : 'transparent',
            transition: 'background-color 0.3s ease, color 0.3s ease',
            '&:hover': {
              backgroundColor: '#991b1b',
              color: '#fff',
            },
            '&:active': {
              backgroundColor: '#b91c1c',
              color: '#fff',
            },
          }),
          icon: {
            color: 'white',
            transition: 'color 0.3s ease',
          },
          label: {
            marginLeft: '8px',
            transition: 'color 0.3s ease',
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
          active={activeItem === 'home'}
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
          active={activeItem === 'about'}
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
          active={activeItem === 'skills'}
          icon={<BarChart2 size={18} />}
          component={
            <ScrollLink
              to="skills"
              smooth
              duration={1000}
              containerId="container"
              className="block w-full h-full cursor-pointer"
            />
          }
        >
          Skills
        </MenuItem>

        <MenuItem
          active={activeItem === 'projects'}
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
          active={activeItem === 'contact'}
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

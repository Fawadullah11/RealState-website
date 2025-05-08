import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdOutlineDehaze, MdClose } from "react-icons/md";
import { FaMoon, FaSun } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import logo from "/logo.png";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return JSON.parse(savedMode);
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const { user, logout } = useAuth();
  const location = useLocation();

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Check if we're on a project page
  const isProjectPage = location.pathname.startsWith('/projects/');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        (isScrolled || isMenuOpen) && !isProjectPage
          ? 'bg-white/90 dark:bg-secondary/90 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Left side - Logo and Dark Mode Toggle */}
          <div className="flex items-center space-x-4">
            <Link to="/">
              <img src={logo} alt="Real Estate Logo" className="w-[60px]" />
            </Link>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-lightGray text-white hover:bg-primary/90 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
            </button>
          </div>

          {/* Right side - Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-black dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-200 ${
                  isActive ? 'text-primary dark:text-primary' : ''
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-black dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-200 ${
                  isActive ? 'text-primary dark:text-primary' : ''
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `text-black dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-200 ${
                  isActive ? 'text-primary dark:text-primary' : ''
                }`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-black dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-200 ${
                  isActive ? 'text-primary dark:text-primary' : ''
                }`
              }
            >
              Contact
            </NavLink>
            {user ? (
              <button
                onClick={handleLogout}
                className="text-black dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-200"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `text-black dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-200 ${
                    isActive ? 'text-primary dark:text-primary' : ''
                  }`
                }
              >
                Login
              </NavLink>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isMenuOpen ? <MdClose className="h-6 w-6" /> : <MdOutlineDehaze className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 dark:bg-secondary/90 backdrop-blur-sm">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'text-primary dark:text-primary'
                      : 'text-black dark:text-white hover:text-primary dark:hover:text-primary'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'text-primary dark:text-primary'
                      : 'text-black dark:text-white hover:text-primary dark:hover:text-primary'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'text-primary dark:text-primary'
                      : 'text-black dark:text-white hover:text-primary dark:hover:text-primary'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'text-primary dark:text-primary'
                      : 'text-black dark:text-white hover:text-primary dark:hover:text-primary'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
              {user ? (
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-black dark:text-white hover:text-primary dark:hover:text-primary"
                >
                  Logout
                </button>
              ) : (
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? 'text-primary dark:text-primary'
                        : 'text-black dark:text-white hover:text-primary dark:hover:text-primary'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </NavLink>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;

import React from "react";

const Navbar = ({
  isDarkMode,
  setIsDarkMode,
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollToSection,
  activeSection,
}) => {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isDarkMode
          ? "bg-gray-900/90 backdrop-blur-sm"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo - Button instead of Link */}
        <button
          onClick={() => scrollToSection("home")}
          className="text-xl font-bold hover:opacity-80 transition md:mx-10"
        >
          Danny Cheng
        </button>

        {/* Desktop Navigation - Buttons instead of Links */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`hover:text-blue-400 transition-colors ${
                activeSection === item.id
                  ? "text-blue-400 font-medium"
                  : isDarkMode
                  ? "text-gray-300"
                  : "text-gray-700"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`p-2 rounded-full ${
            isDarkMode
              ? "bg-gray-700 hover:bg-gray-600"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {isDarkMode ? "🌙" : "☀️"}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-4"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="space-y-1">
            <span
              className={`block w-6 h-0.5 ${
                isDarkMode ? "bg-white" : "bg-gray-900"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 ${
                isDarkMode ? "bg-white" : "bg-gray-900"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 ${
                isDarkMode ? "bg-white" : "bg-gray-900"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className={`md:hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
          <div className="flex flex-col p-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`py-2 text-left hover:text-blue-400 transition-colors ${
                  activeSection === item.id
                    ? "text-blue-400 font-medium"
                    : isDarkMode
                    ? "text-gray-300"
                    : "text-gray-700"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import { navItems } from "../constants/Navbar/navItems";
import developerImg from "../assets/developer.png";

const Navbar = ({
  isDarkMode,
  setIsDarkMode,
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollToSection,
  activeSection,
}) => {
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isDarkMode
          ? "bg-gray-900/90 backdrop-blur-sm"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center text-xl font-bold hover:opacity-80 transition md:mx-10"
        >
          <img src={developerImg} alt="Logo" className="w-10 h-10 mr-3" />
          <span className="md:mt-1">Danny Cheng</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 absolute left-1/2 -translate-x-1/2">
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

        {/* Right side: Theme Toggle (desktop only) + Mobile Menu Button */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle — 只在桌面端显示 */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label="Toggle theme"
            className={`hidden md:block p-2 rounded-full transition-colors ${
              isDarkMode
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-white hover:bg-gray-50 shadow-sm ring-1 ring-gray-200"
            }`}
          >
            {isDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-yellow-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </button>

          {/* Mobile Menu Button — 只在移动端显示 */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-6 h-6 transition-transform duration-300 rotate-90 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-6 h-6 transition-transform duration-300 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown — 主题切换放进来 */}
      {mobileMenuOpen && (
        <div className={`md:hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
          <div className="flex flex-col p-4 space-y-3">
            {/* Theme toggle inside mobile menu */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`flex items-center justify-between w-full py-2 px-3 rounded-lg transition-colors ${
                isDarkMode
                  ? "bg-gray-700 hover:bg-gray-600 text-gray-200"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              <span className="font-medium">
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </span>
              {isDarkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-yellow-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                  />
                </svg>
              )}
            </button>

            {/* Nav items */}
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

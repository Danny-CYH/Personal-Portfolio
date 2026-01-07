export function Footer({ isDarkMode }) {
  return (
    <footer
      className={`py-8 ${isDarkMode ? "bg-gray-900" : "bg-gray-100"} ${
        isDarkMode ? "border-gray-800" : "border-gray-200"
      }`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`mt-8 pt-8 text-center ${
            isDarkMode
              ? "text-gray-500 border-gray-800"
              : "text-gray-500 border-gray-300"
          } border-t`}
        >
          <p>
            © {new Date().getFullYear()} Danny Cheng. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

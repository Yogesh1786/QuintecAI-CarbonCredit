import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900 shadow-lg" : "bg-slate-900 shadow-lg"
      }`}
      role="navigation"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 flex items-center justify-between h-20">
        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center gap-4 group"
          aria-label="Go to homepage"
        >
          <div className="relative">
            <img
              src="/src/assets/logo_1.png"
              alt="Logo"
              className="h-10 w-12 sm:h-14 sm:w-14 rounded-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <span className="font-bold text-xl sm:text-2xl md:text-3xl tracking-wider text-white">
            Quintessence <br /> Technologies
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12 items-center space-x-6 lg:space-x-8 text-lg font-semibold text-white">
          <Link
            to="/"
            className="relative group hover:text-blue-500 transition-all duration-300"
            aria-label="Navigate to Home"
          >
            Home
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-all duration-300" />
          </Link>
          <Link
            to="/dashboard"
            className="relative group hover:text-blue-500 transition-all duration-300"
            aria-label="Navigate to Research"
          >
            Dashboard
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-all duration-300" />
          </Link>
          <Link
            to="/cart"
            className="relative group hover:text-blue-500 transition-all duration-300"
            aria-label="Go to Cart"
          >
            Cart
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-all duration-300" />
          </Link>

          {/* Login/Signup Icon */}
          <Link
            to="/login"
            className="ml-4 text-white hover:text-blue-500 relative"
            aria-label="Login/Signup"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A10.97 10.97 0 0112 15c2.482 0 4.774.81 6.879 2.196M15 11h.01M9 11h.01M12 12v2m-7 6a10.97 10.97 0 0014 0M12 5a3 3 0 110 6 3 3 0 010-6z"
              />
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-gray-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-slate-900 shadow-lg z-40">
          <ul className="flex flex-col items-center space-y-4 py-6 font-semibold text-white">
            <Link
              to="/"
              className="hover:text-blue-500 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Go to Home"
            >
              Home
            </Link>
            <Link
              to="/research"
              className="hover:text-blue-500 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Go to Research"
            >
              Dashboard
            </Link>
            <Link
              to="/cart"
              className="hover:text-blue-500 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Go to Cart"
            >
              Cart
            </Link>
            <Link
              to="/login"
              className="hover:text-blue-500 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Login"
            >
              Login
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

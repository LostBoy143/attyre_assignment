import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200  fixed top-0 z-10 w-full">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Logo */}
        <div className="h-[30px]">
          <img
            src="./src/assets/logo.png"
            alt=""
            className="h-full"
          />
        </div>

        {/* Spacer for alignment on mobile */}
        <div className="md:hidden w-6"></div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-800 font-semibold">
          <a
            href="#explore"
            className="hover:text-pink-600"
          >
            Explore
          </a>
          <a
            href="#color-analysis"
            className="hover:text-pink-600"
          >
            Color Analysis
          </a>
          <a
            href="#curations"
            className="hover:text-pink-600"
          >
            Curations
          </a>
          <a
            href="#find-the-fit"
            className="hover:text-pink-600"
          >
            Find the Fit
          </a>
          <a
            href="#marketplace"
            className="hover:text-pink-600"
          >
            Marketplace
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col items-start px-4 py-2 space-y-2 text-gray-800 font-semibold">
            <a
              href="#explore"
              className="hover:text-pink-600 w-full"
            >
              Explore
            </a>
            <a
              href="#color-analysis"
              className="hover:text-pink-600 w-full"
            >
              Color Analysis
            </a>
            <a
              href="#curations"
              className="hover:text-pink-600 w-full"
            >
              Curations
            </a>
            <a
              href="#find-the-fit"
              className="hover:text-pink-600 w-full"
            >
              Find the Fit
            </a>
            <a
              href="#marketplace"
              className="hover:text-pink-600 w-full"
            >
              Marketplace
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

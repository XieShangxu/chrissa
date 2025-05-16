"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TypedText from "./components/TypedText";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden text-white">
      {/* Full-screen background image WITHOUT any overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Portrait container - NO overlay divs */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/portrait.jpg"
            alt="Chrissa's portrait"
            fill
            priority
            sizes="100vw"
            quality={90}
            className="object-contain md:object-center object-bottom"
          />
        </div>
      </div>

      {/* Text content container - Add text-shadow to ensure readability */}
      <div className="relative z-20 min-h-screen flex flex-col">
        {/* Top Navigation with increased text shadow for readability */}
        <nav className="flex justify-between items-center p-4 md:p-8">
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="flex items-center">
              <h1 className="text-xl md:text-2xl font-bold text-shadow-lg">
                Chrissa
              </h1>
              <span className="text-orange-500 ml-1 text-shadow-lg">→</span>
            </div>
            <p className="text-sm md:text-base text-white text-shadow-lg truncate max-w-[120px] md:max-w-none">
              chrissa@example.com
            </p>
          </div>

          {/* Menu icon with shadow for visibility */}
          <button
            className="text-white p-2 drop-shadow-lg"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          {/* Mobile menu with background for readability */}
          {menuOpen && (
            <div className="absolute top-16 right-4 bg-black/80 backdrop-blur-md p-4 rounded-lg w-48 z-50 shadow-xl">
              <ul className="space-y-3">
                <li>
                  <a href="#" className="block py-1">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-1">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-1">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-1">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </nav>

        {/* Main Content - Enhance text shadow for readability without overlay */}
        <main className="flex-1 flex flex-col px-4 py-6 md:p-8">
          {/* Introduction section - Stronger shadow for readability */}
          <div className="mb-12 md:mb-0 text-center md:text-left md:max-w-md">
            <h2 className="text-4xl md:text-5xl font-bold text-shadow-xl mb-4">
              <div className="h-[70px] md:h-[80px] flex justify-center md:justify-start">
                <TypedText
                  strings={[
                    'Hi,^1000\nI\'m <span class="text-orange-500 text-shadow-xl">Chrissa</span>',
                  ]}
                  typeSpeed={70}
                  startDelay={500}
                  loop={false}
                  hideCursorAfterTyping={true}
                  className="whitespace-pre-line"
                />
              </div>
            </h2>
            <p className="text-xl md:text-2xl text-white text-shadow-lg">
              Creative Portfolio
            </p>

            <div className="pt-6 md:pt-8">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-full flex items-center mx-auto md:mx-0 transition-all shadow-lg">
                <span className="mx-auto md:mx-0">
                  Hire Me <span className="ml-1">→</span>
                </span>
              </button>
            </div>
          </div>

          {/* Decorative elements - Add drop shadow for visibility */}
          <div className="hidden sm:block absolute top-1/4 right-10 w-12 h-12 md:w-16 md:h-16 border-2 border-cyan-400 rounded-full opacity-80 shadow-lg"></div>
          <div className="hidden sm:block absolute top-1/4 right-12 w-3 h-3 md:w-4 md:h-4 bg-orange-500 rounded-full shadow-lg"></div>
          <div className="hidden sm:block absolute bottom-1/4 right-16 w-6 h-6 md:w-8 md:h-8 bg-cyan-400 rounded-full opacity-80 shadow-lg"></div>

          {/* Info section with enhanced shadow for readability */}
          <div className="hidden md:block mt-12 text-right absolute top-1/2 right-8 transform -translate-y-1/2 max-w-md">
            <div className="mb-6">
              <p className="text-orange-500 text-shadow-lg">Expert on</p>
              <h3 className="text-xl font-semibold text-shadow-lg">
                Based in [Your Location]
                <br />
                I'm a creative student and
                <br />
                artist.
              </h3>
            </div>

            <p className="text-white text-shadow-lg mb-6">
              Hey, are you looking for someone to showcase
              <br />
              your projects and creative journey?
              <br />
              Let's connect!
            </p>

            <Link
              href="#"
              className="inline-block text-orange-500 border-b border-orange-500 pb-1 text-shadow-lg"
            >
              Download CV ↓
            </Link>
          </div>
        </main>

        {/* Footer with shadow for readability */}
        <footer className="p-4 md:p-8 mt-auto">
          <div className="flex justify-center md:justify-between items-center flex-wrap gap-4">
            <div className="flex space-x-6">
              <Link href="#" className="text-white text-shadow-lg">
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-white text-shadow-lg">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-white text-shadow-lg">
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
            </div>

            {/* Website URL */}
            <div className="hidden md:flex items-center">
              <div className="h-5 w-5 rounded-full bg-pink-500 flex items-center justify-center text-xs mr-2 shadow-md">
                D
              </div>
              <span className="text-sm text-shadow-lg">
                www.portfolio.com/chrissa
              </span>
            </div>

            {/* Chat button - Add background for readability */}
            <div className="w-full md:w-auto mt-6 md:mt-0">
              <button className="w-full md:w-auto bg-black/40 backdrop-blur-sm border border-gray-700 text-white px-4 py-2 rounded-md flex items-center justify-center shadow-lg">
                Let's Chat
                <span className="ml-2 relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span className="absolute -top-1 -right-1 bg-green-500 w-2 h-2 rounded-full"></span>
                </span>
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TypedText from "./components/TypedText";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden text-white">
      {/* Full-screen background image - WITHOUT overlay */}
      <div className="absolute inset-0 z-0">
        {/* Removed the overlay div that was using bg-black/70 */}
        <div className="w-full h-full bg-black">
          {/* When you add your actual image: */}
          <Image
            src="/portrait.jpg"
            alt="Chrissa's portrait"
            fill
            className="object-contain object-center"
            priority
          />
        </div>
      </div>

      {/* Content container - Add text shadow to ensure readability without the overlay */}
      <div className="relative z-20 min-h-screen flex flex-col">
        {/* Update navigation with text shadow for better readability */}
        <nav className="flex justify-between items-center p-6 md:p-8">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-shadow-sm">Chrissa</h1>
              <span className="text-orange-500 ml-1">→</span>
            </div>
            <p className="text-gray-200 text-shadow-sm">chrissa@example.com</p>
          </div>

          {/* Menu icon in top right corner */}
          <button className="text-white p-2">
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
        </nav>

        {/* Update main content with text shadows for better readability */}
        <main className="flex-1 grid grid-cols-1 lg:grid-cols-2 p-6 md:p-8 gap-8">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center">
            <div className="space-y-4 max-w-md">
              <h2 className="text-5xl font-bold text-shadow-md">
                <div className="h-[80px] flex">
                  {/* Typed.js effect for the entire greeting */}
                  <TypedText
                    strings={[
                      'Hi,^1000\nI\'m <span class="text-orange-500">Chrissa</span>',
                    ]}
                    typeSpeed={70}
                    startDelay={500}
                    loop={false}
                    className="whitespace-pre-line"
                  />
                </div>
              </h2>
              <p className="text-2xl text-gray-200 text-shadow-sm">
                Creative Portfolio
              </p>

              <div className="pt-8">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full flex items-center transition-all">
                  Hire Me <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="relative flex flex-col items-end justify-center">
            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-16 h-16 border-2 border-cyan-400 rounded-full opacity-80"></div>
            <div className="absolute top-12 right-12 w-4 h-4 bg-orange-500 rounded-full"></div>
            <div className="absolute bottom-32 right-20 w-8 h-8 bg-cyan-400 rounded-full opacity-80"></div>

            {/* Right side content with text shadows */}
            <div className="mt-8 text-right space-y-4">
              <div>
                <p className="text-orange-500 text-shadow-sm">Expert on</p>
                <h3 className="text-xl font-semibold text-shadow-sm">
                  Based in [Your Location]
                  <br />
                  I'm a creative student and
                  <br />
                  artist.
                </h3>
              </div>

              <p className="text-gray-200 text-shadow-sm">
                Hey, are you looking for someone to showcase
                <br />
                your projects and creative journey?
                <br />
                Let's connect!
              </p>

              <Link
                href="#"
                className="inline-block text-orange-500 border-b border-orange-500 pb-1 text-shadow-sm"
              >
                Download CV ↓
              </Link>
            </div>
          </div>
        </main>

        {/* Footer with text shadows */}
        <footer className="p-6 md:p-8 flex justify-between items-center">
          {/* Social Links */}
          <div className="space-x-6">
            <Link href="#" className="inline-block text-white text-shadow-sm">
              <span className="sr-only">Facebook</span>
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
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </Link>
            <Link href="#" className="inline-block">
              <span className="sr-only">Twitter</span>
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
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
            <Link href="#" className="inline-block">
              <span className="sr-only">Instagram</span>
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
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </Link>
          </div>

          <div className="flex items-center">
            <div className="h-6 w-6 rounded-full bg-pink-500 flex items-center justify-center text-xs mr-2">
              D
            </div>
            <span className="text-sm text-shadow-sm">
              www.portfolio.com/chrissa
            </span>
          </div>

          <div>
            <button className="bg-black/30 backdrop-blur-sm border border-gray-700 text-white px-4 py-2 rounded-md flex items-center">
              Let's Chat
              <span className="ml-2 relative">
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
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <span className="absolute -top-1 -right-1 bg-green-500 w-3 h-3 rounded-full"></span>
              </span>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

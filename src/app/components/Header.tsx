"use client";

import React from "react";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="mb-8">
      <h1 className="colorful-heading">{title}</h1>
      {subtitle && <p className="text-xl mb-8">{subtitle}</p>}
    </header>
  );
};

export default Header;

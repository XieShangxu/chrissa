import React from "react";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: "about", label: "About Me" },
    { id: "projects", label: "My Projects" },
    { id: "growth", label: "My Growth Path" },
    { id: "fun", label: "Fun Stuff" },
  ];

  return (
    <nav className="mb-8">
      <div className="flex flex-wrap gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`btn ${activeTab === tab.id ? "" : "btn-light"}`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;

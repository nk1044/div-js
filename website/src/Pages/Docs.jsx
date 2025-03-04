import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import Buttons from "../DivUi/Buttons";
import Forms from "../DivUi/Forms";
import Navbars from "../DivUi/Navbars";
import Card from "../DivUi/Card";
import Slider from "../DivUi/Slider";
import Sidebars from "../DivUi/Sidebars";
import Dashboards from "../DivUi/Dashboards";
import ExpressDoc from "../DivUi/ExpressDoc";
import Loaders from "../DivUi/Loaders";

const components = [
  { name: "Card", component: Card },
  { name: "Dashboards", component: Dashboards },
  { name: "Forms", component: Forms },
  { name: "Slider", component: Slider },
  { name: "Navbars", component: Navbars },
  { name: "Buttons", component: Buttons },
  { name: "Sidebars", component: Sidebars },
  { name: "Loaders", component: Loaders },
  { name: "ExpressDoc", component: ExpressDoc },
];

function Docs() {
  const [activeComponent, setActiveComponent] = useState(
    localStorage.getItem("activeComponent") || "Card"
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isComponentsOpen, setIsComponentsOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const handleThemeChange = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    // Set initial theme on component mount
    const savedTheme = localStorage.getItem("theme") === "dark";
    setIsDarkMode(savedTheme);
    
    if (savedTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    localStorage.setItem("activeComponent", activeComponent);
  }, [activeComponent]);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full h-screen 
      bg-gradient-to-r from-gray-100 to-gray-300 
      dark:bg-gradient-to-r dark:from-neutral-800 dark:to-neutral-900 
      overflow-hidden text-gray-800 dark:text-neutral-200">
      
      {/* Header */}
      <header className="w-full bg-white dark:bg-neutral-800 shadow-md p-4 flex items-center justify-between md:hidden">
        <button onClick={() => setIsSidebarOpen(true)}>
          <img
            src="https://img.icons8.com/?size=100&id=etGODVD6wRIR&format=png&color=000000"
            alt="Menu"
            className="w-8 h-8 dark:invert"
          />
        </button>
        <h1 className="text-xl font-bold text-gray-800 dark:text-neutral-200">Docs</h1>
        <div className="w-8" />
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`fixed md:relative top-0 left-0 h-screen md:h-full 
            w-[75vw] md:w-[15vw] 
            bg-white dark:bg-neutral-800 
            shadow-lg border border-gray-300 dark:border-neutral-700 
            flex flex-col z-50
            transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 overflow-hidden`}
        >
          {/* Sidebar Header with Close and Back buttons */}
          <div className="flex items-center justify-between p-4 border-b border-gray-300 dark:border-neutral-700">
            <button
              className="flex-1 bg-gray-800 dark:bg-neutral-700 text-white dark:text-neutral-200 py-3 cursor-pointer rounded-lg text-center font-medium hover:bg-gray-700 dark:hover:bg-neutral-600 transition-all duration-300"
              onClick={() => navigate("/")}
            >
              ⬅ Back to Home
            </button>
            <button
              className="ml-4 md:hidden"
              onClick={() => setIsSidebarOpen(false)}
            >
              <div className="w-8 h-8 flex items-center justify-center border rounded-lg bg-gray-200 dark:bg-neutral-700 border-gray-300 dark:border-neutral-600 text-gray-800 dark:text-neutral-200">
                ❌
              </div>
            </button>
          </div>

          {/* Sidebar Content */}
          <div className="flex-1 overflow-y-auto p-4">
            {/* Components Section */}
            <div className="mb-6">
              <button
                onClick={() => setIsComponentsOpen(!isComponentsOpen)}
                className={`w-full flex items-center justify-between text-2xl font-semibold text-gray-800 dark:text-neutral-200 mb-2 
                  hover:bg-gray-100 dark:hover:bg-neutral-700 p-2 rounded-md
                  ${activeComponent != 'ExpressDoc'
                    ? "bg-gradient-to-r from-gray-100 to-gray-200 dark:from-neutral-700 dark:to-neutral-800 shadow-md transform scale-[0.98]"
                    : "text-gray-700 dark:text-neutral-300 hover:bg-gray-50 dark:hover:bg-neutral-700 hover:shadow-sm hover:translate-x-1"
                  } 
                `}
              >
                <span className="overflow-hidden cursor-pointer">Components</span>
                {isComponentsOpen ? (
                  <svg
                    className={`w-4 h-4 transition-transform text-gray-800 dark:text-neutral-200 ${isComponentsOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                ) : (
                  <svg
                    className={`w-4 h-4 transition-transform text-gray-800 dark:text-neutral-200 ${isComponentsOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </button>

              {isComponentsOpen && (
                <ul className="space-y-2 ml-4">
                  {components.map(({ name }) => {
                    if (name == "ExpressDoc") return null;
                    return (
                      <li key={name} className="border-b border-gray-300 dark:border-neutral-700">
                        <button
                          className={`w-full text-left cursor-pointer px-5 py-3 rounded-md font-medium transition-all duration-300
                          ${activeComponent === name
                              ? "bg-blue-600 dark:bg-blue-800 text-white shadow-lg"
                              : "text-gray-700 dark:text-neutral-300 hover:bg-gray-200 dark:hover:bg-neutral-700"
                            }`}
                          onClick={() => {
                            setActiveComponent(name);
                            setIsSidebarOpen(false);
                          }}
                        >
                          {name}
                        </button>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>

            <button
              className={`w-full text-left text-2xl font-semibold cursor-pointer p-2 rounded-md transition-all duration-300 ease-in-out
                ${activeComponent === 'ExpressDoc'
                  ? "bg-gradient-to-r from-gray-100 to-gray-200 dark:from-neutral-700 dark:to-neutral-800 shadow-md transform scale-[0.98]"
                  : "text-gray-700 dark:text-neutral-300 hover:bg-gray-50 dark:hover:bg-neutral-700 hover:shadow-sm hover:translate-x-1"
                } `}
              onClick={() => {
                setActiveComponent("ExpressDoc");
                setIsSidebarOpen(false);
              }}
            >
              Express Starter
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto dark:bg-neutral-900">
          <div className="sm:p-6 p-3">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="sm:block hidden text-4xl font-bold text-gray-800 dark:text-neutral-200 text-center flex-1">
                Documentation
              </h1>

              {/* Dark Mode Toggle */}
              <button
                onClick={handleThemeChange}
                className="p-2 rounded-full bg-gray-200 dark:bg-neutral-700 hover:bg-gray-300 dark:hover:bg-neutral-600 transition"
              >
                {isDarkMode ? (
                  <Sun size={20} className="text-yellow-400" />
                ) : (
                  <Moon size={20} className="text-gray-800" />
                )}
              </button>
            </div>

            {/* Documentation Content */}
            <div className="p-4 sm:p-6 bg-white rounded-2xl shadow-xl border border-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:border-neutral-700">
              {activeComponent === "ExpressDoc" ? (
                <ExpressDoc />
              ) : (
                components.map(({ name, component: Component }) => 
                  activeComponent === name ? <Component key={name} /> : null
                )
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Docs;
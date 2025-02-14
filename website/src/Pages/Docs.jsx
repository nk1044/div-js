import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Buttons from "../DivUi/Buttons";
import Forms from "../DivUi/Forms";
import Navbars from "../DivUi/Navbars";
import Card from "../DivUi/Card";
import Slider from "../DivUi/Slider";
import Sidebars from "../DivUi/Sidebars";
import Dashboards from "../DivUi/Dashboards";

const components = [
  { name: "Card", component: Card },
  { name: "Buttons", component: Buttons },
  { name: "Forms", component: Forms },
  { name: "Navbars", component: Navbars },
  { name: "Slider", component: Slider },
  { name: "Sidebars", component: Sidebars },
  { name: "Dashboards", component: Dashboards },
];

function Docs() {
  const [activeComponent, setActiveComponent] = useState(
    localStorage.getItem("activeComponent") || "Buttons"
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("activeComponent", activeComponent);
  }, [activeComponent]);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full h-screen bg-gradient-to-r from-gray-100 to-gray-300 overflow-hidden">
      {/* Header */}
      <header className="w-full bg-white shadow-md p-4 flex items-center justify-between md:hidden">
        <button onClick={() => setIsSidebarOpen(true)}>
          <img
            src="https://img.icons8.com/?size=100&id=etGODVD6wRIR&format=png&color=000000"
            alt="Menu"
            className="w-8 h-8"
          />
        </button>
        <h1 className="text-xl font-bold text-gray-800">Docs</h1>
        <div className="w-8" /> {/* Placeholder for alignment */}
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`fixed md:relative top-0 left-0 h-screen md:h-full w-[75vw] md:w-[15vw] bg-white shadow-lg rounded-xl border border-gray-300 flex flex-col z-50
            transition-transform duration-300 ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 overflow-hidden`}
        >
          {/* Sidebar Header with Close and Back buttons */}
          <div className="flex items-center justify-between p-4 border-b border-gray-300">
            <button
              onClick={() => navigate("/")}
              className="flex-1 bg-gray-800 text-white py-3 cursor-pointer rounded-lg text-center font-medium hover:bg-gray-700 transition-all duration-300"
            >
              ⬅ Back to Home
            </button>
            <button
              className="ml-4 md:hidden"
              onClick={() => setIsSidebarOpen(false)}
            >
              <img
                src="https://img.icons8.com/?size=100&id=71200&format=png&color=000000"
                alt="Close"
                className="w-6 h-6"
              />
            </button>
          </div>

          {/* Sidebar Content */}
          <div className="flex-1 overflow-y-auto p-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Components
            </h2>
            <ul className="space-y-2">
              {components.map(({ name }) => (
                <li key={name} className="border-b border-gray-300">
                  <button
                    className={`w-full text-left px-5 py-3 rounded-md font-medium transition-all duration-300
                      ${
                        activeComponent === name
                          ? "bg-blue-600 text-white shadow-lg"
                          : "text-gray-700 hover:bg-gray-200"
                      }`}
                    onClick={() => {
                      setActiveComponent(name);
                      setIsSidebarOpen(false);
                    }}
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="sm:p-3">
            <h1 className=" sm:block hidden text-5xl font-extrabold text-gray-800 text-center mb-10">
              UI Components Documentation
            </h1>
            <div className="sm:p-2 grid grid-cols-1 place-items-center bg-white rounded-2xl shadow-xl border border-gray-200">
              {components.map(({ name, component: Component }) =>
                activeComponent === name ? <Component key={name} /> : null
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Docs;
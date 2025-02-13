import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Buttons from "../DivUi/Buttons";
import Forms from "../DivUi/Forms";
import Navbars from "../DivUi/Navbars";
import Card from "../DivUi/Card";
import Slider from "../DivUi/Slider";

const components = [
  { name: "Buttons", component: Buttons },
  { name: "Forms", component: Forms },
  { name: "Navbars", component: Navbars },
  { name: "Card", component: Card },
  { name: "Slider", component: Slider },
];

function Docs() {
  const [activeComponent, setActiveComponent] = useState(
    localStorage.getItem("activeComponent") || "Buttons"
  );

  useEffect(() => {
    localStorage.setItem("activeComponent", activeComponent);
  }, [activeComponent]);

  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="flex w-full min-h-screen bg-gradient-to-r from-gray-100 to-gray-300">
      {/* Sidebar */}
      <aside className="w-[22vw] p-6 bg-white shadow-lg rounded-xl sticky top-6 h-[90vh] border border-gray-300 ml-3 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Components
          </h2>
          <ul className="space-y-4">
            {components.map(({ name }) => (
              <li key={name}>
                <button
                  className={`w-full text-left px-6 py-3 rounded-lg font-medium transition-all duration-300
                    ${
                      activeComponent === name
                        ? "bg-blue-600 text-white shadow-lg scale-105"
                        : "text-gray-700 hover:bg-gray-200 hover:scale-105"
                    }`}
                  onClick={() => setActiveComponent(name)}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Back to Home Button */}
        <button
          onClick={() => navigate("/")}
          className="mt-6 w-full bg-gray-800 text-white py-3 cursor-pointer rounded-lg text-center font-medium hover:bg-gray-700 transition-all duration-300"
        >
          ⬅ Back to Home
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-5xl font-extrabold text-gray-800 text-center mb-10">
          UI Components Documentation
        </h1>
        <div className="p-8 grid grid-cols-1 place-items-center bg-white rounded-2xl shadow-xl border border-gray-200">
          {components.map(({ name, component: Component }) =>
            activeComponent === name ? <Component key={name} /> : null
          )}
        </div>
      </main>
    </div>
  );
}

export default Docs;

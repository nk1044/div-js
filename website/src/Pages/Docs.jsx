import React, { useEffect, useState } from 'react';
import Buttons from './Buttons';
import Forms from './Forms';
import Navbars from './Navbars';

const components = [
  { name: "Buttons", component: Buttons },
  { name: "Forms", component: Forms },
  { name: "Navbars", component: Navbars },
];

function Docs() {
  const [activeComponent, setActiveComponent] = useState(
    localStorage.getItem("activeComponent") || "Buttons"
  );

  useEffect(() => {
    localStorage.setItem("activeComponent", activeComponent);
  }, [activeComponent]);

  return (
    <div className="flex w-full min-h-screen bg-neutral-100">
      {/* Left Sidebar */}
      <aside className="w-[20vw] p-6 bg-white shadow-lg sticky top-0 h-screen border-r border-gray-300">
        <h2 className="text-2xl font-bold text-neutral-700 mb-6 text-center">Components</h2>
        <ul className="space-y-3">
          {components.map(({ name }) => (
            <li key={name}>
              <button
                className={`w-full text-left px-5 py-3 rounded-lg font-medium transition-all duration-300
                  ${
                    activeComponent === name
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-neutral-700 hover:bg-gray-200"
                  }`}
                onClick={() => setActiveComponent(name)}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-4xl font-bold text-neutral-800 text-center mb-8">
          UI Components Documentation
        </h1>
        <div className="p-6 bg-white rounded-xl shadow-lg">
          {components.map(({ name, component: Component }) =>
            activeComponent === name ? <Component key={name} /> : null
          )}
        </div>
      </main>
    </div>
  );
}

export default Docs;

import React, { useState } from 'react';
import Buttons from './Buttons';
import Forms from './Forms';

const components = [
  { name: "Buttons", component: Buttons },
  { name: "Forms", component: Forms }
];

function Docs() {
  const [activeComponent, setActiveComponent] = useState("Buttons");

  return (
    <div className="flex w-full min-h-screen bg-neutral-100">
      
      {/* Left Sidebar */}
      <aside className="w-1/4 p-6 bg-white shadow-lg sticky top-0 h-screen">
        <h2 className="text-2xl font-bold text-neutral-700 mb-6">Components</h2>
        <ul className="space-y-3">
          {components.map(({ name }) => (
            <li key={name}>
              <button
                className={`w-full text-left px-4 py-2 rounded-lg font-medium transition ${
                  activeComponent === name
                    ? "bg-blue-500 text-white"
                    : "text-neutral-700 hover:bg-neutral-200"
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
      <main className="w-3/4 p-10">
        <h1 className="text-4xl font-bold text-neutral-800 text-center mb-8">
          UI Components Documentation
        </h1>
        {components.map(({ name, component: Component }) =>
          activeComponent === name ? <Component key={name} /> : null
        )}
      </main>
      
    </div>
  );
}

export default Docs;

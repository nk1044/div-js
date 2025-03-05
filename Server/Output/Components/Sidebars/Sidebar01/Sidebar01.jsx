import React, { useState, useEffect } from 'react';

const Sidebar01 = ({ tree }) => {
  const [openMenus, setOpenMenus] = useState({});
  const [SelectedComponent, setSelectedComponent] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = (index) => {
    setOpenMenus((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-100 text-gray-800">
      {/* Mobile Header */}
      <div className="flex flex-col md:flex-row">
        {isMobile ? (
          <header className="w-full bg-gray-900 text-gray-100 p-4 flex justify-between items-center fixed top-0 z-50 shadow-lg">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold tracking-tight">Documentation</h1>
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl focus:outline-none hover:text-gray-300 transition-colors"
            >
              {menuOpen ? '×' : '☰'}
            </button>
          </header>
        ) : (
          // Desktop Sidebar (Responsive)
          <aside className="fixed left-0 top-0 h-screen bg-gray-900 text-gray-100 p-6 w-1/5 min-w-[200px] max-w-[300px] overflow-y-auto">
            <div className="mb-8">
              <button
                className="flex items-center text-gray-300 hover:text-gray-100 px-3 py-2 rounded-lg w-full text-left transition-colors bg-gray-800 hover:bg-gray-800"
                onClick={() => (window.location.href = '/')}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Back
              </button>
            </div>
            <nav>
              <ul className="space-y-2">
                {tree.map((item, index) => (
                  <li key={index}>
                    <div
                      className="group flex justify-between items-center bg-gray-800 hover:bg-gray-700 p-3 rounded-lg cursor-pointer transition-all"
                      onClick={() => setSelectedComponent(() => item.Component)}
                    >
                      <span className="font-medium group-hover:text-gray-100 transition-colors">
                        {item.name}
                      </span>
                      {item.children.length > 0 && (
                        <button
                          className="p-1 hover:bg-gray-700 rounded transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleMenu(index);
                          }}
                        >
                          <svg
                            className={`w-4 h-4 transition-transform ${
                              openMenus[index] ? 'rotate-180' : ''
                            }`}
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
                        </button>
                      )}
                    </div>
                    {openMenus[index] && item.children.length > 0 && (
                      <ul className="mt-2 ml-4 pl-4 border-l border-gray-700 space-y-2">
                        {item.children.map((child, childIndex) => (
                          <li key={childIndex}>
                            <button
                              onClick={() => {
                                setSelectedComponent(() => item.Component);
                                if (child.id) scrollToSection(child.id);
                              }}
                              className="w-full text-left text-gray-400 hover:text-gray-100 p-2 rounded-md text-sm transition-colors hover:bg-gray-800"
                            >
                              {child.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        )}

        {/* Mobile Fullscreen Menu */}
        {menuOpen && isMobile && (
          <div className="fixed inset-0 bg-gray-900/95 backdrop-blur-sm z-40">
            <div className="pt-20 p-6">
              <nav className="space-y-4">
                {tree.map((item, index) => (
                  <div key={index} className="border-b border-gray-800 pb-4">
                    <button
                      className="w-full text-left text-gray-100 p-3 rounded-lg hover:bg-gray-800 transition-colors"
                      onClick={() => {
                        setSelectedComponent(() => item.Component);
                        setMenuOpen(false);
                      }}
                    >
                      {item.name}
                    </button>
                    {item.children.length > 0 && openMenus[index] && (
                      <div className="mt-2 ml-4 space-y-2">
                        {item.children.map((child, childIndex) => (
                          <button
                            key={childIndex}
                            className="w-full text-left text-gray-400 p-2 text-sm hover:bg-gray-800 rounded transition-colors"
                            onClick={() => {
                              setSelectedComponent(() => item.Component);
                              if (child.id) scrollToSection(child.id);
                              setMenuOpen(false);
                            }}
                          >
                            {child.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          isMobile ? 'mt-16 w-full' : 'ml-[21%]'
        } `}
      >
        <div className="w-full">
          {SelectedComponent ? (
            <div className="w-full shadow-lg p-2 rounded-2xl bg-white">
              <SelectedComponent />
            </div>
          ) : (
            <div className="bg-gray-200 rounded-xl shadow-lg p-10 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Welcome to the Documentation
              </h2>
              <p className="text-lg text-gray-700">
                Select a topic from the sidebar to get started with our comprehensive documentation.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar01;

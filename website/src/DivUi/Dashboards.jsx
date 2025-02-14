import React from 'react';
import Preview from '../Components/Preview';
import Dashboard01 from '../../utils/Dashboards/Dashboard01/Dashboard01';

// ComponentArray for Dashboards
const ComponentArray = [
  {
    name: 'Dashboard01',
    component: Dashboard01,
    code: `import { DivUi } from "trydivjs";
const divUi = new DivUi();

divUi.GetComponent("Dashboard01");`,
    docs: `Dashboard01 is a futuristic dashboard component featuring animated backgrounds, sparkles, and a dynamic navbar.  
To generate the code automatically, add the line \`divUi.GetComponent("Dashboard01")\` to script.js and run \`node utils/script.js\`.

Dashboard01 is identified by the id "Dashboard01".`,
    variants: [
      {
        props: {}
      }
    ]
  }
];

function Dashboards() {
  return (
    <div className="flex flex-col sm:flex-row w-full min-h-screen p-2 space-y-6 sm:space-y-0">
      {/* Main Content */}
      <div className="sm:w-4/5 w-full space-y-12">
        {ComponentArray.map(({ name, component: Component, variants, code, docs }, index) => (
          <Preview key={index} name={name} code={code} docs={docs}>
            <div className="flex flex-wrap w-full items-center justify-center gap-6">
              {variants.map((variant, idx) => (
                <div key={idx} className="flex w-full flex-col items-center space-y-2">
                  <Component {...variant.props} />
                </div>
              ))}
            </div>
          </Preview>
        ))}
      </div>
      
      {/* Sidebar */}
      <div className="sm:w-1/5 w-full sm:block hidden pl-4">
        <div className="border border-neutral-300 rounded-xl shadow-lg p-6 bg-white sticky top-8">
          <h2 className="text-xl font-semibold text-neutral-700 mb-4">Dashboards List</h2>
          <ul className="space-y-3">
            {ComponentArray.map(({ name }, index) => (
              <li key={index}>
                <a href={`#${name}`} className="text-blue-500 hover:underline">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboards;

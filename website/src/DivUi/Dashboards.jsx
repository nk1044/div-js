import React from 'react';
import Preview from '../Components/Preview';
import Dashboard01 from '../../utils/Dashboards/Dashboard01/Dashboard01';
import Dashboard02 from '../../utils/Dashboards/Dashboard02/Dashboard02';
import Dashboard03 from '../../utils/Dashboards/Dashboard03/Dashboard03';

// ComponentArray for Dashboards
const ComponentArray = [
  {
    name: 'Dashboard01',
    component: Dashboard01,
    code: `npx trydivjs add Dashboard01`,
    docs: `
  #### Name of the component:- ***Dashboard01***
  
  Dashboard01 is a customizable Dashboard component for data input.
  
 - **To generate the code automatically, run the command:- **
  \`\`\`sh
npx trydivjs add Dashboard01
  \`\`\`
Dashboard01 is identified by the id "Dashboard01".`,
    variants: [
      {
        props: {}
      }
    ]
  },
  {
    name: 'Dashboard02',
    component: Dashboard02,
    code: `npx trydivjs add Dashboard02`,
    docs: `
  #### Name of the component:- ***Dashboard02***
  
  Dashboard02 is a customizable Dashboard component for data input.
  
 - **To generate the code automatically, run the command:- **
  \`\`\`sh
npx trydivjs add Dashboard02
  \`\`\`
Dashboard02 is identified by the id "Dashboard02".`,
    variants: [
      {
        props: {}
      }
    ]
  },
  {
    name: 'Dashboard03',
    component: Dashboard03,
    code: `npx trydivjs add Dashboard03`,
    docs: `
  #### Name of the component:- ***Dashboard03***
  
  Dashboard03 is a customizable Dashboard component for data input.
  
 - **To generate the code automatically, run the command:- **
  \`\`\`sh
npx trydivjs add Dashboard03
  \`\`\`
Dashboard03 is identified by the id "Dashboard03".`,
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
          <Preview name={name} code={code} docs={docs}>
          <div className="flex flex-col sm:flex-row flex-wrap w-full items-center justify-center gap-4 sm:gap-6 px-2 sm:px-4">
              {variants.map((variant, idx) => (
                  <div 
                      key={idx} 
                      className="flex w-full sm:w-auto flex-col items-center space-y-2 p-2 sm:p-4 bg-white dark:bg-neutral-900 rounded-lg"
                  >
                      <Component {...variant.props} />
                      {variant.name && (
                          <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 font-medium">
                              {variant.name}
                          </span>
                      )}
                  </div>
              ))}
          </div>
      </Preview>
        ))}
      </div>
      
      {/* Sidebar */}
      <div className="sm:w-1/5 w-full sm:block hidden pl-4">
        <div className="border border-neutral-300 rounded-xl shadow-lg p-6 bg-white dark:border-neutral-700 dark:bg-neutral-900 sticky top-8">
          <h2 className="text-xl font-semibold text-neutral-700 dark:text-neutral-400 mb-4">Dashboards List</h2>
          <ul className="space-y-3">
            {ComponentArray.map(({ name }, index) => (
              <li key={index}>
                <a href={`#${name}`} className="text-blue-500 dark:text-orange-700 hover:underline">
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

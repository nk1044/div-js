import React from 'react';
import Preview from '../Components/Preview';
import Slider01 from '../../utils/Sliders/Slider01/Slider01';
import Slider02 from '../../utils/Sliders/Slider02/Slider02';
import Slider03 from '../../utils/Sliders/Slider03/Slider03';
import Slider04 from '../../utils/Sliders/Slider04/Slider04';

const ComponentArray = [
  {
    name: 'Slider01',
    component: Slider01,
    code: `npx trydivjs add Slider01`,
    docs: `Slider01 is a modern slider component designed to display content in a responsive carousel format.
 - **To generate the code automatically, run command:-** 

\`npx trydivjs add Slider01\` 
`,
  },
  {
    name: 'Slider02',
    component: Slider02,
    code: `npx trydivjs add Slider02`,
    docs: `Slider02 provides a sleek and interactive slider interface with smooth transitions.
 - **To generate the code automatically, run command:-**

\`npx trydivjs add Slider02\` 
`,
  },
  {
    name: 'Slider03',
    component: Slider03,
    code: `npx trydivjs add Slider03`,
    docs: `Slider03 offers a dynamic slider experience with advanced navigation features.
 - **To generate the code automatically, run command:-**
 
\`npx trydivjs add Slider03\`
`,
  },
  {
    name: 'Slider04',
    component: Slider04,
    code: `npx trydivjs add Slider04`,
    docs: `Slider04 is a highly customizable slider component ideal for showcasing featured content.
 - **To generate the code automatically, add the line:**
 
\`npx trydivjs add Slider04\` 
`,
  },
];

function Slider() {
  return (
    <div className="flex flex-col sm:flex-row w-full min-h-screen bg-gray-50 dark:bg-neutral-900 p-6">
      {/* Main Content - Full width on small screens */}
      <div className="sm:w-4/5 w-full space-y-12">
        {ComponentArray.map(({ name, component: SliderComponent, code, docs }, index) => (
          <Preview key={index} name={name} code={code} docs={docs}>
            <div className="w-full min-h-[400px] flex items-center justify-center bg-neutral-50 dark:bg-neutral-800 rounded-xl p-4">
              <SliderComponent />
            </div>
          </Preview>
        ))}
      </div>
      
      {/* Sidebar - Only visible on sm and up */}
      <div className="sm:w-1/5 hidden sm:block pl-4">
        <div className="border border-neutral-300 rounded-xl shadow-lg p-6 bg-white dark:border-neutral-700 dark:bg-neutral-900 sticky top-8">
          <h2 className="text-xl font-semibold text-neutral-700 dark:text-neutral-400 mb-4">Sliders List</h2>
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

export default Slider;

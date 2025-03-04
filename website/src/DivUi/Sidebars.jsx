import React from 'react';
import Preview from '../Components/Preview';

import Item01 from '../../utils/Sidebars/Item01';
import Item02 from '../../utils/Sidebars/Item02';
import Item03 from '../../utils/Sidebars/Item03';

import Sidebar01 from '../../utils/Sidebars/Sidebar01/Sidebar01';


const sidebarTree = [
    { name: 'Item 1', Component: Item01, children: [] },
    { 
      name: 'Item 2', Component: Item02, children: [
        { name: 'Subitem1', id: 'subitem1' },
        { name: 'Subitem2', id: 'subitem2' }
      ] 
    },
    { name: 'Item 3', Component: Item03, children: [] }
  ];
  
  const SidebarPreview = () => (
    // This container simulates a screen with fixed dimensions and allows scrolling if needed.
    <div className="relative w-full border border-gray-300 mx-auto shadow-lg overflow-auto">
      <Sidebar01 tree={sidebarTree} />
    </div>
  );
  
  



  const ComponentArray = [
    {
      name: 'Sidebar01',
      component: SidebarPreview,
      code: `npx trydivjs add Sidebar01`,
      docs: `
  **Sidebar01** is a comprehensive documentation sidebar component that renders a navigation tree.
  
  - **To generate the code automatically, run the command:-** 
  \`\`\`sh
  npx trydivjs add Sidebar01
\`\`\`

---
  # **The sidebar expects a **\`tree\`** prop in the following structure:**

  - a. Each item in the tree should have a **name** and a **Component** property.
  - b. The **Component** property should be a React component.
  - c. Each item can have a **children** property which is an array of items.

  **Example:**
  \`\`\`js
  const sidebarTree = [
    { name: 'Item 1', Component: Item01, children: [] },
    { 
      name: 'Item 2', Component: Item02, children: [
        { name: 'Subitem1', id: 'subitem1' },
        { name: 'Subitem2', id: 'subitem2' }
      ] 
    },
    { name: 'Item 3', Component: Item03, children: [] }
  ];
  
  <Sidebar01 tree={sidebarTree} />
  `,
      variants: [
        {
          props: {
            tree: sidebarTree
          }
        }
      ],
    },
  ];

function Sidebars() {
  return (
    <div className="flex flex-col sm:flex-row w-full min-h-screen p-2 space-y-6 sm:space-y-0 dark:bg-neutral-900">
      {/* Main Content */}
      <div className="sm:w-4/5 w-full space-y-12">
        {ComponentArray.map(({ name, component: Sidebar, variants, code, docs }, index) => (
          <Preview key={index} name={name} code={code} docs={docs}>
            <div className="flex flex-wrap w-full items-center dark:bg-neutral-900 justify-center gap-6">
              {variants.map((variant, idx) => (
                <div key={idx} className="flex w-full h-[80vh] overflow-auto flex-col items-center space-y-2">
                <Sidebar {...variant.props} />
              </div>
              ))}
            </div>
          </Preview>
        ))}
      </div>
      
      {/* Sidebar */}
      <div className="sm:w-1/5 w-full sm:block hidden pl-4">
        <div className="border border-neutral-300 rounded-xl shadow-lg p-6 bg-white dark:border-neutral-700 dark:bg-neutral-900 sticky top-8">
          <h2 className="text-xl font-semibold text-neutral-700 dark:text-neutral-400 mb-4">Forms List</h2>
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
  )
}

export default Sidebars
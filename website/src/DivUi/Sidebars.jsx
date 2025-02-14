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
      code: `import { DivUi } from "trydivjs";
  const divUi = new DivUi();
  
  divUi.GetComponent("Sidebar01");`,
      docs: `Sidebar01 is a comprehensive documentation sidebar component that renders a navigation tree.
  To generate the code automatically, add the line \`divUi.GetComponent("Sidebar01")\` to script.js and run \`node utils/script.js\`.
  
  The sidebar expects a \`tree\` prop in the following structure:
    
  \`\`\`js
  [
    {
      name: 'Item01',
      Component: Item01, // React component to render the content for this item
      children: [ 
        // Optional sub-items (each with a name and optionally an id for scrolling)
      ]
    },
    // ... more items
  ]
  \`\`\`
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
    <div className="flex flex-col sm:flex-row w-full min-h-screen p-2 space-y-6 sm:space-y-0">
      {/* Main Content */}
      <div className="sm:w-4/5 w-full space-y-12">
        {ComponentArray.map(({ name, component: Form, variants, code, docs }, index) => (
          <Preview key={index} name={name} code={code} docs={docs}>
            <div className="flex flex-wrap w-full items-center justify-center gap-6">
              {variants.map((variant, idx) => (
                <div key={idx} className="flex w-full flex-col items-center space-y-2">
                  <Form {...variant.props} />
                </div>
              ))}
            </div>
          </Preview>
        ))}
      </div>
      
      {/* Sidebar */}
      <div className="sm:w-1/5 w-full sm:block hidden pl-4">
        <div className="border border-neutral-300 rounded-xl shadow-lg p-6 bg-white sticky top-8">
          <h2 className="text-xl font-semibold text-neutral-700 mb-4">Forms List</h2>
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
  )
}

export default Sidebars
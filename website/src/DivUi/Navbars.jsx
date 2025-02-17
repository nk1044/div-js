import React from 'react';
import Navbar01 from '../../utils/Navbars/Navbar01/Navbar01';
import Navbar02 from '../../utils/Navbars/Navbar02/Navbar02';
import Navbar03 from '../../utils/Navbars/Navbar03/Navbar03';
import Navbar04 from '../../utils/Navbars/Navbar04/Navbar04';
import Navbar05 from '../../utils/Navbars/Navbar05/Navbar05';
import Preview from '../Components/Preview';

const Navbar03Preview = () => (
  <div className="relative w-full h-52 border border-dashed border-gray-400">
    {/* Set previewMode to true so the navbar is positioned absolutely within this div */}
    <Navbar03 previewMode />
  </div>
);
const Navbar04Preview = () => (
  <div className="relative w-full h-52 border border-dashed border-gray-400">
    {/* Set previewMode to true so the navbar is positioned absolutely within this div */}
    <Navbar04 previewMode />
  </div>
);
const Navbar05Preview = () => (
  <div className="relative w-full h-52 border border-dashed border-gray-400">
    {/* Set previewMode to true so the navbar is positioned absolutely within this div */}
    <Navbar05 previewMode />
  </div>
);

const ComponentArray = [
    {
      name: 'Navbar01',
      component: Navbar01,
      code: `import { DivUi } from "trydivjs";\nconst divUi = new DivUi();\n\ndivUi.GetComponent("Navbar01");`,
      docs: `
  #### Name of the component:- ***Navbar01***
  
  Navbar01 is a customizable component for data input.
  
  - **To generate the code automatically, add the line:**

  \`\`\`javascript
  divUi.GetComponent("Navbar01")
  \`\`\`
  **to script.js and run:**
  \`\`\`sh
  node utils/script.js
  \`\`\``,
      variants: [
        { props: {} },
      ],
    },
    {
      name: 'Navbar02',
      component: Navbar02,
      code: `import { DivUi } from "trydivjs";\nconst divUi = new DivUi();\n\ndivUi.GetComponent("Navbar02");`,
      docs: `
  #### Name of the component:- ***Navbar02***
  
  Navbar02 is a customizable component for data input.
  
  - **To generate the code automatically, add the line:**
  \`\`\`javascript
  divUi.GetComponent("Navbar02")
  \`\`\`

  **to script.js and run:**

  \`\`\`sh
  node utils/script.js
  \`\`\``,
      variants: [
        { props: {} },
      ],
    },
    {
      name: 'Navbar03',
      component: Navbar03Preview,
      code: `import { DivUi } from "trydivjs";\nconst divUi = new DivUi();\n\ndivUi.GetComponent("Navbar03");`,
      docs: `
  #### Name of the component:- ***Navbar03***
  
  Navbar03 is a customizable component for data input.
  
  - **To generate the code automatically, add the line** 
  \`\`\`sh
  divUi.GetComponent("Navbar03")
\`\`\`

  **to script.js and run**

  \`\`\`node utils/script.js\`\`\`.
`,
      variants: [
        { props: {} },
      ],
    },
    {
      name: 'Navbar04',
      component: Navbar04Preview,
      code: `import { DivUi } from "trydivjs";\nconst divUi = new DivUi();\n\ndivUi.GetComponent("Navbar04");`,
      docs: `
  #### Name of the component:- ***Navbar04***
  
  Navbar04 is a customizable component for data input.
  
  - **To generate the code automatically, add the line** 
  \`\`\`sh
  divUi.GetComponent("Navbar04")
\`\`\`

  **to script.js and run**

  \`\`\`node utils/script.js\`\`\`.
`,
      variants: [
        { props: {} },
      ],
    },
    {
      name: 'Navbar05',
      component: Navbar05Preview,
      code: `import { DivUi } from "trydivjs";\nconst divUi = new DivUi();\n\ndivUi.GetComponent("Navbar05");`,
      docs: `
  #### Name of the component:- ***Navbar05***
  
  Navbar05 is a customizable component for data input.
  
  - **To generate the code automatically, add the line** 
  \`\`\`sh
  divUi.GetComponent("Navbar05")
\`\`\`

  **to script.js and run**

  \`\`\`node utils/script.js\`\`\`.
`,
      variants: [
        { props: {} },
      ],
    },
  ];
  

function Navbars() {
    return (
        <div className="flex flex-col sm:flex-row w-full min-h-screen p-2 space-y-6 sm:space-y-0">
      {/* Main Content */}
      <div className="sm:w-4/5 w-full space-y-12">
        {ComponentArray.map(({ name, component: Navbar, variants, code, docs }, index) => (
          <Preview
            key={index}
            name={name}
            code={code}
            docs={docs}
          >
            <div className=" w-full items-center justify-center gap-6">
            {variants.map((variant, idx) => (
              <div key={idx}>
                <Navbar />
              </div>
            ))}
          </div>

          </Preview>
        ))}
      </div>
      
      {/* Sidebar */}
      <div className="sm:w-1/5 w-full sm:block hidden pl-4">
        <div className="border border-neutral-300 rounded-xl shadow-lg p-6 bg-white sticky top-8">
          <h2 className="text-xl font-semibold text-neutral-700 mb-4">Buttons List</h2>
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

export default Navbars;
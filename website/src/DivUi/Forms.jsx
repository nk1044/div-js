import React from 'react';
import Form01 from '../../utils/Forms/Form01/Form01';
import Form02 from '../../utils/Forms/Form02/Form02';
import Form03 from '../../utils/Forms/Form03/Form03';
import Form04 from '../../utils/Forms/Form04/Form04';
import Preview from '../Components/Preview';

// {
//   name: 'Button01',
//   component: Button01,
//   code: `import { DivUi } from "trydivjs";
// const divUi = new DivUi();

// divUi.GetComponent("Button01");`,
//   docs: `
// ## Button01

// Button01 is a customizable button component designed for modern UI interactions with multiple variants.

// To generate the code automatically, add the line:
// \`\`\`javascript
// divUi.GetComponent("Button01")
// \`\`\`
// to script.js and run:
// \`\`\`sh
// node utils/script.js
// \`\`\`

// ---

// ## **Pass these props to your component:**

// | Variant              | Properties |
// | -------------------- | ---------- |
// | **1. Default**       | \`{}\` |

// ---
// `,
//   variants: [
//     { props: {} }, // default variant; extend with more variants if needed
//   ],
// },

const ComponentArray = [
  {
    name: 'Form01',
    component: Form01,
    code: `import { DivUi } from "trydivjs";
  const divUi = new DivUi();
  
  divUi.GetComponent("Form01");`,
    docs: `
  #### Name of the component:- ***Form01***
  
  Form01 is a customizable form component for data input.
  
  - **To generate the code automatically, add the line:**
  \`\`\`javascript
  divUi.GetComponent("Form01")
  \`\`\`
  **to script.js and run:**
  \`\`\`sh
  node utils/script.js
  \`\`\`
  `,
  variants: [
    { props: {} },
  ],
  },
  {
    name: 'Form02',
    component: Form02,
    code: `import { DivUi } from "trydivjs";
  const divUi = new DivUi();
  
  divUi.GetComponent("Form02");`,
    docs: `
  ## ## Name of the component:- ***Form02***
  
  Form02 is a modern form component designed for sleek UI interactions.
  
  - **To generate the code automatically, add the line:**
  \`\`\`javascript
  divUi.GetComponent("Form02")
  \`\`\`
  **to script.js and run:**
  \`\`\`sh
  node utils/script.js
  \`\`\`
  `,
  variants: [
    { props: {} },
  ],
  },
  {
    name: 'Form03',
    component: Form03,
    code: `import { DivUi } from "trydivjs";
  const divUi = new DivUi();
  
  divUi.GetComponent("Form03");`,
    docs: `
  ## ## Name of the component:- ***Form03***
  
  Form03 is an interactive form component with enhanced validation and styling.
  
 - **To generate the code automatically, add the line:**
  \`\`\`javascript
  divUi.GetComponent("Form03")
  \`\`\`
  to script.js and run:
  \`\`\`sh
  node utils/script.js
  \`\`\`
  `,
  variants: [
    { props: {} },
  ],
  },
  {
    name: 'Form04',
    component: Form04,
    code: `import { DivUi } from "trydivjs";
  const divUi = new DivUi();
  
  divUi.GetComponent("Form04");`,
    docs: `
  ## Name of the component:- ***Form04***
  
  Form04 offers a streamlined, minimalist form design for quick data entry.
  
 - **To generate the code automatically, add the line:**
  \`\`\`javascript
  divUi.GetComponent("Form04")
  \`\`\`
  to script.js and run:
  \`\`\`sh
  node utils/script.js
  \`\`\`
  `,
  variants: [
    { props: {} },
  ],
  }  
];

function Forms() {
  return (
    <div className="flex flex-col sm:flex-row w-full min-h-screen p-2 space-y-6 sm:space-y-0">
      {/* Main Content */}
      <div className="sm:w-4/5 w-full space-y-12">
        {ComponentArray.map(({ name, component: Form, variants, code, docs }, index) => (
          <Preview key={index} name={name} code={code} docs={docs}>
            <div className="flex flex-wrap w-full items-center justify-center gap-6">
              {variants.map((variant, idx) => (
                <div key={idx} className="flex w-full flex-col items-center space-y-2">
                  <Form  />
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
  );
}

export default Forms;

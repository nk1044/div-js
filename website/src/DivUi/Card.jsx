import React from 'react';
import Preview from '../Components/Preview';
import Card01 from '../../utils/Cards/Card01/Card01';
import Card02 from '../../utils/Cards/Card02/Card02';
import Card03 from '../../utils/Cards/Card03/Card03';
import Card04 from '../../utils/Cards/Card04/Card04';
import Card05 from '../../utils/Cards/Card05/Card05';

const ComponentArray = [
  {
    name: 'Card01',
    component: Card01,
    code: `import { DivUi } from "trydivjs";\nconst divUi = new DivUi();\n\ndivUi.GetComponent("Card01");`,
    docs: `
  #### Name of the component:- ***Card01***
  
  Card01 is a customizable component for data input.
  
 - **To generate the code automatically, add the line:**
  \`\`\`javascript
  divUi.GetComponent("Card01")
  \`\`\`
**to script.js and run**
  \`\`\`sh
  node utils/script.js
  \`\`\`
  `,
    variants: [{ props: {} }],
  },
  {
    name: 'Card02',
    component: Card02,
    code: `import { DivUi } from "trydivjs";\nconst divUi = new DivUi();\n\ndivUi.GetComponent("Card02");`,
    docs: `
  #### Name of the component:- ***Card02***
  
  Card02 is a customizable component for data input.
  
 - **To generate the code automatically, add the line:**
  \`\`\`javascript
  divUi.GetComponent("Card02")
  \`\`\`
**to script.js and run**
  \`\`\`sh
  node utils/script.js
  \`\`\`
  `,
    variants: [{ props: {} }],
  },
  {
    name: 'Card03',
    component: Card03,
    code: `import { DivUi } from "trydivjs";\nconst divUi = new DivUi();\n\ndivUi.GetComponent("Card03");`,
    docs: `
  #### Name of the component:- ***Card03***
  
  Card03 is a customizable component for data input.
  
 - **To generate the code automatically, add the line:**
  \`\`\`javascript
  divUi.GetComponent("Card03")
  \`\`\`
**to script.js and run**
  \`\`\`sh
  node utils/script.js
  \`\`\`
  `,
    variants: [{ props: {} }],
  },
  {
    name: 'Card04',
    component: Card04,
    code: `import { DivUi } from "trydivjs";\nconst divUi = new DivUi();\n\ndivUi.GetComponent("Card04");`,
    docs: `
  #### Name of the component:- ***Card04***
  
  Card04 is a customizable component for data input.
  
 - **To generate the code automatically, add the line:**
  \`\`\`javascript
  divUi.GetComponent("Card04")
  \`\`\`
**to script.js and run**
  \`\`\`sh
  node utils/script.js
  \`\`\`
  `,
    variants: [{ props: {} }],
  },
  {
    name: 'Card05',
    component: Card05,
    code: `import { DivUi } from "trydivjs";\nconst divUi = new DivUi();\n\ndivUi.GetComponent("Card05");`,
    docs: `
  #### Name of the component:- ***Card05***
  
  Card05 is a customizable component for data input.
  
  - **To generate the code automatically, add the line:**

  \`\`\`javascript
  divUi.GetComponent("Card05")
  \`\`\`
  **to script.js and run:**
  \`\`\`sh
  node utils/script.js
  \`\`\``,

    variants: [{ props: {} }],
  },
];

function Card() {
  return (
    <div className="flex flex-col sm:flex-row w-full min-h-screen p-2 space-y-6 sm:space-y-0">
      {/* Main Content */}
      <div className="sm:w-4/5 w-full space-y-12">
        {ComponentArray.map(({ name, component: CardComponent, variants, code, docs }, index) => (
          <Preview
            key={index}
            name={name}
            code={code}
            docs={docs}
          >
            <div className="flex flex-wrap items-center justify-center gap-6">
              {variants.map((variant, idx) => (
                <div key={idx}>
                  <CardComponent />
                </div>
              ))}
            </div>
          </Preview>
        ))}
      </div>
      
      {/* Sidebar */}
      <div className="sm:w-1/5 w-full sm:block hidden pl-4">
        <div className="border border-neutral-300 rounded-xl shadow-lg p-6 bg-white sticky top-8">
          <h2 className="text-xl font-semibold text-neutral-700 mb-4">Cards List</h2>
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

export default Card;

import React from 'react';
import Loader01 from '../../utils/Loaders/Loader01/Loader01';
import Loader02 from '../../utils/Loaders/Loader02/Loader02';
import Loader03 from '../../utils/Loaders/Loader03/Loader03';
import Preview from '../Components/Preview';

const ComponentArray = [
  {
    name: 'Loader01',
    component: Loader01,
    code: `import { DivUi } from "trydivjs";
const divUi = new DivUi();

divUi.GetComponent("Loader01");`,
    docs: `
## Loader01

Loader01 is a customizable Loader component designed for modern UI interactions with multiple variants.

 - **To generate the code automatically, add the line:**
\`\`\`javascript
divUi.GetComponent("Loader01")
\`\`\`
to script.js and run:
\`\`\`sh
node utils/script.js
\`\`\`

---

## **Pass these props to your component:**

| Variant              | Properties |
| -------------------- | ---------- |
| **1. Default**       | \`{}\` |
| **2. Red**    | { color: 'border-red-600'} |
| **3. Green**   | { color: 'border-green-600' } |
| **4. Gray**    | { color: 'border-gray-600' } |


---

**Example**:

For **Red** color variant:

***<Loader01 color: 'border-red-600' />***
`,
    variants: [
      { props: {} },
      { props: { color: 'border-red-600' } },
      { props: { color: 'border-green-600' } },
      { props: { color: 'border-gray-600' } },
     
    ],
  },
  {
    name: 'Loader02',
    component: Loader02,
    code: `import { DivUi } from "trydivjs";
const divUi = new DivUi();

divUi.GetComponent("Loader02");`,
    docs: `
## Loader02

Loader02 is a customizable Loader component designed for modern UI interactions with multiple variants.

 - **To generate the code automatically, add the line:**
\`\`\`javascript
divUi.GetComponent("Loader02")
\`\`\`
to script.js and run:
\`\`\`sh
node utils/script.js
\`\`\`

---

**Example**:

For **Red** color variant:

***<Loader02  />***
`,
    variants: [
      { props: {} },
    ],
  },
  {
    name: 'Loader03',
    component: Loader03,
    code: `import { DivUi } from "trydivjs";
const divUi = new DivUi();

divUi.GetComponent("Loader03");`,
    docs: `
## Loader03

Loader03 is a customizable Loader component designed for modern UI interactions with multiple variants.

 - **To generate the code automatically, add the line:**
\`\`\`javascript
divUi.GetComponent("Loader03")
\`\`\`
to script.js and run:
\`\`\`sh
node utils/script.js
\`\`\`

---

## **Pass these props to your component:**

| Variant              | Properties |
| -------------------- | ---------- |
| **1. Default**       | \`{}\` |
| **2. Red**    | { color: 'red-500'} |
| **3. Green**   | { color: 'green-400' } |
| **4. Black**    | { color: 'black' } |


---

**Example**:

For **Red** color variant:

***<Loader03 color: 'red-500' />***
`,
    variants: [
      { props: {} },
      { props: { color: 'red-500' } },
      { props: { color: 'green-400' } },
      { props: { color: 'black' } },
     
    ],
  },
];


function Loaders() {
  return (
    <div className="flex flex-col sm:flex-row w-full min-h-screen sm:p-2 space-y-6 sm:space-y-0">
      {/* Main Content */}
      <div className="sm:w-4/5 w-full space-y-12">
        {ComponentArray.map(({ name, component: Loader, variants, code, docs }, index) => (
          <Preview
            key={index}
            name={name}
            code={code}
            docs={docs}
          >
            <div className="flex flex-wrap w-full items-center justify-center gap-6">
            {variants.map((variant, idx) => (
              <div key={idx}>
                <Loader {...variant.props} />
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

export default Loaders;
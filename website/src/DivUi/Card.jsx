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
    docs: `Card01 is a versatile card component designed to display content with a modern and clean layout.
To generate the code automatically, add the line \`divUi.GetComponent("Card01")\` to your script.js and run \`node utils/script.js\`.`,
    variants: [{ props: {} }],
  },
  {
    name: 'Card02',
    component: Card02,
    code: `import { DivUi } from "trydivjs";\nconst divUi = new DivUi();\n\ndivUi.GetComponent("Card02");`,
    docs: `Card02 offers a sleek design with emphasis on visual hierarchy and spacing.
To generate the code automatically, insert \`divUi.GetComponent("Card02")\` in script.js and execute \`node utils/script.js\`.`,
    variants: [{ props: {} }],
  },
  {
    name: 'Card03',
    component: Card03,
    code: `import { DivUi } from "trydivjs";\nconst divUi = new DivUi();\n\ndivUi.GetComponent("Card03");`,
    docs: `Card03 features a dynamic layout ideal for showcasing images and text together.
To auto-generate the code, add \`divUi.GetComponent("Card03")\` to script.js and run \`node utils/script.js\`.`,
    variants: [{ props: {} }],
  },
  {
    name: 'Card04',
    component: Card04,
    code: `import { DivUi } from "trydivjs";\nconst divUi = new DivUi();\n\ndivUi.GetComponent("Card04");`,
    docs: `Card04 provides a modern, minimalistic design for content display.
To generate its code automatically, add \`divUi.GetComponent("Card04")\` to script.js and run \`node utils/script.js\`.`,
    variants: [{ props: {} }],
  },
  {
    name: 'Card05',
    component: Card05,
    code: `import { DivUi } from "trydivjs";\nconst divUi = new DivUi();\n\ndivUi.GetComponent("Card05");`,
    docs: `Card05 is a highly customizable card component ideal for a variety of content types.
To generate the code automatically, add \`divUi.GetComponent("Card05")\` to script.js and run \`node utils/script.js\`.
`,
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

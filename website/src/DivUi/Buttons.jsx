import React from 'react';
import Button01 from '../../utils/Buttons/Button01/Button01';
import Button02 from '../../utils/Buttons/Button02/Button02';
import Button03 from '../../utils/Buttons/Button03/Button03';
import Button04 from '../../utils/Buttons/Button04/Button04';
import Button05 from '../../utils/Buttons/Button05/Button05';
import Button06 from '../../utils/Buttons/Button06/Button06';
import Preview from '../Components/Preview';

const ComponentArray = [
  {
    name: 'Button01',
    component: Button01,
    code: `import { DivUi } from "trydivjs";
const divUi = new DivUi();

divUi.GetComponent("Button01");`,
    docs: `
## Button01

Button01 is a customizable button component designed for modern UI interactions with multiple variants.

 - **To generate the code automatically, add the line:**
\`\`\`javascript
divUi.GetComponent("Button01")
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
| **2. Aqua Burst**    | { customClass: 'bg-gradient-to-r from-[#00e6ff] via-[#00aaff] to-[#00ffcc] hover:from-[#00d5f7] hover:via-[#0099dd] hover:to-[#00d5aa]', text: 'Aqua Burst' } |
| **3. Sunset Glow**   | { customClass: 'bg-gradient-to-r from-[#ff7e5f] via-[#feb47b] to-[#ff7e5f] hover:from-[#ff6c4a] hover:via-[#fda770] hover:to-[#ff6c4a]', text: 'Sunset Glow' } |
| **4. Ocean Blue**    | { customClass: 'bg-gradient-to-r from-[#2193b0] via-[#6dd5ed] to-[#2193b0] hover:from-[#1e90ff] hover:via-[#57c1e8] hover:to-[#1e90ff]', text: 'Ocean Blue' } |
| **5. Lush Green**    | { customClass: 'bg-gradient-to-r from-[#56ab2f] via-[#a8e063] to-[#56ab2f] hover:from-[#4CAF50] hover:via-[#8BC34A] hover:to-[#4CAF50]', text: 'Lush Green' } |
| **6. Royal Purple**  | { customClass: 'bg-gradient-to-r from-[#8e2de2] via-[#4a00e0] to-[#8e2de2] hover:from-[#7b1fa2] hover:via-[#512da8] hover:to-[#7b1fa2]', text: 'Royal Purple' } |

---

**Example**:

For Aqua Burst variant:

***<Button01 customClass="bg-gradient-to-r from-[#00e6ff] via-[#00aaff] to-[#00ffcc]" text="Aqua Burst" />***
`,
    variants: [
      { props: {} },
      { props: { customClass: 'bg-gradient-to-r from-[#00e6ff] via-[#00aaff] to-[#00ffcc] hover:from-[#00d5f7] hover:via-[#0099dd] hover:to-[#00d5aa]', text: 'Aqua Burst' } },
      { props: { customClass: 'bg-gradient-to-r from-[#ff7e5f] via-[#feb47b] to-[#ff7e5f] hover:from-[#ff6c4a] hover:via-[#fda770] hover:to-[#ff6c4a]', text: 'Sunset Glow' } },
      { props: { customClass: 'bg-gradient-to-r from-[#2193b0] via-[#6dd5ed] to-[#2193b0] hover:from-[#1e90ff] hover:via-[#57c1e8] hover:to-[#1e90ff]', text: 'Ocean Blue' } },
      { props: { customClass: 'bg-gradient-to-r from-[#56ab2f] via-[#a8e063] to-[#56ab2f] hover:from-[#4CAF50] hover:via-[#8BC34A] hover:to-[#4CAF50]', text: 'Lush Green' } },
      { props: { customClass: 'bg-gradient-to-r from-[#8e2de2] via-[#4a00e0] to-[#8e2de2] hover:from-[#7b1fa2] hover:via-[#512da8] hover:to-[#7b1fa2]', text: 'Royal Purple' } },
    ],
  },
  {
    name: 'Button02',
    component: Button02,
    code: `import { DivUi } from "trydivjs";
const divUi = new DivUi();

divUi.GetComponent("Button02");`,
    docs: `
## Button02

Button02 offers an animated background gradient along with customizable styles.

 - **To generate the code automatically, add the line:**
\`\`\`javascript
divUi.GetComponent("Button02")
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
| **2. Aqua Burst**    | { customClass: 'bg-gradient-to-r from-[#00e6ff] via-[#00aaff] to-[#00ffcc] hover:from-[#00d5f7] hover:via-[#0099dd] hover:to-[#00d5aa]', text: 'Aqua Burst' } |
| **3. Sunset Glow**   | { customClass: 'bg-gradient-to-r from-[#ff7e5f] via-[#feb47b] to-[#ff7e5f] hover:from-[#ff6c4a] hover:via-[#fda770] hover:to-[#ff6c4a]', text: 'Sunset Glow' } |

---

**Example**:

For Aqua Burst variant:

***<Button02 customClass="bg-gradient-to-r from-[#00e6ff] via-[#00aaff] to-[#00ffcc]" text="Aqua Burst" />***
`,
    variants: [
      { props: {} },
      { props: { customClass: 'bg-gradient-to-r from-[#00e6ff] via-[#00aaff] to-[#00ffcc] hover:from-[#00d5f7] hover:via-[#0099dd] hover:to-[#00d5aa]', text: 'Aqua Burst' } },
      { props: { customClass: 'bg-gradient-to-r from-[#ff7e5f] via-[#feb47b] to-[#ff7e5f] hover:from-[#ff6c4a] hover:via-[#fda770] hover:to-[#ff6c4a]', text: 'Sunset Glow' } },
    ],
  },
  {
    name: 'Button03',
    component: Button03,
    code: `import { DivUi } from "trydivjs";
const divUi = new DivUi();

divUi.GetComponent("Button03");`,
    docs: `
## Button03

Button03 features dynamic gradients and pulse effects.

 - **To generate the code automatically, add the line:**
\`\`\`javascript
divUi.GetComponent("Button03")
\`\`\`
to script.js and run:
\`\`\`sh
node utils/script.js
\`\`\`

---

## **Pass these props to your component:**

| Variant                | Properties |
| ---------------------- | ---------- |
| **1. Default**         | \`{}\` |
| **2. Aqua Pulse**      | { customClass: 'bg-gradient-to-r from-[#00ffcc] via-[#00aaff] to-[#ff00ff] hover:from-[#00ddaa] hover:via-[#0088dd] hover:to-[#dd00dd]', text: 'Aqua Pulse' } |
| **3. Crimson Pulse**   | { customClass: 'bg-gradient-to-r from-[#ff512f] via-[#ff0000] to-[#dd2476] hover:from-[#e64a2b] hover:via-[#d00000] hover:to-[#c11f66]', text: 'Crimson Pulse' } |
| **4. Electric Blue**   | { customClass: 'bg-gradient-to-r from-[#007cf0] via-[#00dfd8] to-[#00dfd8] hover:from-[#006ad1] hover:via-[#00cbbf] hover:to-[#00cbbf]', text: 'Electric Blue' } |
| **5. Violet Vibe**      | { customClass: 'bg-gradient-to-r from-[#8e2de2] via-[#4a00e0] to-[#8e2de2] hover:from-[#7b1fa2] hover:via-[#512da8] hover:to-[#7b1fa2]', text: 'Violet Vibe' } |
| **6. Emerald Flash**    | { customClass: 'bg-gradient-to-r from-[#56ab2f] via-[#a8e063] to-[#56ab2f] hover:from-[#4CAF50] hover:via-[#8BC34A] hover:to-[#4CAF50]', text: 'Emerald Flash' } |
| **7. Sunset Neon**      | { customClass: 'bg-gradient-to-r from-[#ff9a9e] via-[#fad0c4] to-[#ff9a9e] hover:from-[#ff6f69] hover:via-[#ffb347] hover:to-[#ff6f69]', text: 'Sunset Neon' } |
| **8. Pastel Dream**     | { customClass: 'bg-gradient-to-r from-[#a1c4fd] via-[#c2e9fb] to-[#a1c4fd] hover:from-[#91bff8] hover:via-[#b2d9f9] hover:to-[#91bff8]', text: 'Pastel Dream' } |
| **9. Deep Sea**         | { customClass: 'bg-gradient-to-r from-[#00f260] via-[#0575e6] to-[#00f260] hover:from-[#00e159] hover:via-[#0465d1] hover:to-[#00e159]', text: 'Deep Sea' } |
| **10. Cosmic Punch**    | { customClass: 'bg-gradient-to-r from-[#f7971e] via-[#ffd200] to-[#f7971e] hover:from-[#e68317] hover:via-[#e6c800] hover:to-[#e68317]', text: 'Cosmic Punch' } |

---

**Example**:

For Aqua Pulse variant:

***<Button03 customClass="bg-gradient-to-r from-[#00ffcc] via-[#00aaff] to-[#ff00ff] hover:from-[#00ddaa] hover:via-[#0088dd] hover:to-[#dd00dd]" text="Aqua Pulse" />***

`,
    variants: [
      { props: {} },
      { props: { customClass: 'bg-gradient-to-r from-[#00ffcc] via-[#00aaff] to-[#ff00ff] hover:from-[#00ddaa] hover:via-[#0088dd] hover:to-[#dd00dd]', text: 'Aqua Pulse' } },
      { props: { customClass: 'bg-gradient-to-r from-[#ff512f] via-[#ff0000] to-[#dd2476] hover:from-[#e64a2b] hover:via-[#d00000] hover:to-[#c11f66]', text: 'Crimson Pulse' } },
      { props: { customClass: 'bg-gradient-to-r from-[#007cf0] via-[#00dfd8] to-[#00dfd8] hover:from-[#006ad1] hover:via-[#00cbbf] hover:to-[#00cbbf]', text: 'Electric Blue' } },
      { props: { customClass: 'bg-gradient-to-r from-[#8e2de2] via-[#4a00e0] to-[#8e2de2] hover:from-[#7b1fa2] hover:via-[#512da8] hover:to-[#7b1fa2]', text: 'Violet Vibe' } },
      { props: { customClass: 'bg-gradient-to-r from-[#56ab2f] via-[#a8e063] to-[#56ab2f] hover:from-[#4CAF50] hover:via-[#8BC34A] hover:to-[#4CAF50]', text: 'Emerald Flash' } },
      { props: { customClass: 'bg-gradient-to-r from-[#ff9a9e] via-[#fad0c4] to-[#ff9a9e] hover:from-[#ff6f69] hover:via-[#ffb347] hover:to-[#ff6f69]', text: 'Sunset Neon' } },
      { props: { customClass: 'bg-gradient-to-r from-[#a1c4fd] via-[#c2e9fb] to-[#a1c4fd] hover:from-[#91bff8] hover:via-[#b2d9f9] hover:to-[#91bff8]', text: 'Pastel Dream' } },
      { props: { customClass: 'bg-gradient-to-r from-[#00f260] via-[#0575e6] to-[#00f260] hover:from-[#00e159] hover:via-[#0465d1] hover:to-[#00e159]', text: 'Deep Sea' } },
      { props: { customClass: 'bg-gradient-to-r from-[#f7971e] via-[#ffd200] to-[#f7971e] hover:from-[#e68317] hover:via-[#e6c800] hover:to-[#e68317]', text: 'Cosmic Punch' } },
    ],
  },
  {
    name: 'Button04',
    component: Button04,
    code: `import { DivUi } from "trydivjs";
const divUi = new DivUi();

divUi.GetComponent("Button04");`,
    docs: `
## Button04

Button04 offers sleek, modern gradients for stylish UI.

 - **To generate the code automatically, add the line:**
\`\`\`javascript
divUi.GetComponent("Button04")
\`\`\`
to script.js and run:
\`\`\`sh
node utils/script.js
\`\`\`

---

## **Pass these props to your component:**

| Variant             | Properties |
| ------------------- | ---------- |
| **1. Default**         | \`{}\` |
| **2. Sunset Glow**     | { customClass: 'bg-gradient-to-r from-[#ff9a9e] via-[#fad0c4] to-[#ff9a9e] hover:from-[#ff6f69] hover:via-[#ffb347] hover:to-[#ff6f69]', text: 'Sunset Glow' } |
| **3. Ocean Blue**      | { customClass: 'bg-gradient-to-r from-[#2193b0] via-[#6dd5ed] to-[#2193b0] hover:from-[#1e90ff] hover:via-[#87cefa] hover:to-[#1e90ff]', text: 'Ocean Blue' } |
| **4. Lush Green**      | { customClass: 'bg-gradient-to-r from-[#56ab2f] via-[#a8e063] to-[#56ab2f] hover:from-[#4CAF50] hover:via-[#8BC34A] hover:to-[#4CAF50]', text: 'Lush Green' } |
| **5. Royal Purple**    | { customClass: 'bg-gradient-to-r from-[#8e2de2] via-[#4a00e0] to-[#8e2de2] hover:from-[#7b1fa2] hover:via-[#512da8] hover:to-[#7b1fa2]', text: 'Royal Purple' } |
| **6. Fiery Red**       | { customClass: 'bg-gradient-to-r from-[#ff512f] via-[#dd2476] to-[#ff512f] hover:from-[#e64a2b] hover:via-[#c11f66] hover:to-[#e64a2b]', text: 'Fiery Red' } |
| **7. Pastel Dream**    | { customClass: 'bg-gradient-to-r from-[#a1c4fd] via-[#c2e9fb] to-[#a1c4fd] hover:from-[#91bff8] hover:via-[#b2d9f9] hover:to-[#91bff8]', text: 'Pastel Dream' } |
| **8. Neon Lights**     | { customClass: 'bg-gradient-to-r from-[#00f260] via-[#0575e6] to-[#00f260] hover:from-[#00e159] hover:via-[#0465d1] hover:to-[#00e159]', text: 'Neon Lights' } |
| **9. Citrus Punch**    | { customClass: 'bg-gradient-to-r from-[#f7971e] via-[#ffd200] to-[#f7971e] hover:from-[#e68317] hover:via-[#e6c800] hover:to-[#e68317]', text: 'Citrus Punch' } |

---

**Example**:

For Sunset Glow variant:

***<Button04 customClass="bg-gradient-to-r from-[#ff9a9e] via-[#fad0c4] to-[#ff9a9e]" text="Sunset Glow" />***
`,
    variants: [
      { props: {} },
      { props: { customClass: 'bg-gradient-to-r from-[#ff9a9e] via-[#fad0c4] to-[#ff9a9e] hover:from-[#ff6f69] hover:via-[#ffb347] hover:to-[#ff6f69]', text: 'Sunset Glow' } },
      { props: { customClass: 'bg-gradient-to-r from-[#2193b0] via-[#6dd5ed] to-[#2193b0] hover:from-[#1e90ff] hover:via-[#87cefa] hover:to-[#1e90ff]', text: 'Ocean Blue' } },
      { props: { customClass: 'bg-gradient-to-r from-[#56ab2f] via-[#a8e063] to-[#56ab2f] hover:from-[#4CAF50] hover:via-[#8BC34A] hover:to-[#4CAF50]', text: 'Lush Green' } },
      { props: { customClass: 'bg-gradient-to-r from-[#8e2de2] via-[#4a00e0] to-[#8e2de2] hover:from-[#7b1fa2] hover:via-[#512da8] hover:to-[#7b1fa2]', text: 'Royal Purple' } },
      { props: { customClass: 'bg-gradient-to-r from-[#ff512f] via-[#dd2476] to-[#ff512f] hover:from-[#e64a2b] hover:via-[#c11f66] hover:to-[#e64a2b]', text: 'Fiery Red' } },
      { props: { customClass: 'bg-gradient-to-r from-[#a1c4fd] via-[#c2e9fb] to-[#a1c4fd] hover:from-[#91bff8] hover:via-[#b2d9f9] hover:to-[#91bff8]', text: 'Pastel Dream' } },
      { props: { customClass: 'bg-gradient-to-r from-[#00f260] via-[#0575e6] to-[#00f260] hover:from-[#00e159] hover:via-[#0465d1] hover:to-[#00e159]', text: 'Neon Lights' } },
      { props: { customClass: 'bg-gradient-to-r from-[#f7971e] via-[#ffd200] to-[#f7971e] hover:from-[#e68317] hover:via-[#e6c800] hover:to-[#e68317]', text: 'Citrus Punch' } },
    ],
  },
  {
    name: 'Button05',
    component: Button05,
    code: `import { DivUi } from "trydivjs";
const divUi = new DivUi();

divUi.GetComponent("Button05");`,
    docs: `
## Button05

Button05 is a dynamic button that transitions between text and image on hover.

 - **To generate the code automatically, add the line:**
\`\`\`javascript
divUi.GetComponent("Button05")
\`\`\`
to script.js and run:
\`\`\`sh
node utils/script.js
\`\`\`

---

## **Pass these props to your component:**

| Variant             | Properties |
| ------------------- | ---------- |
| **1. Default**         | \`{}\` |
| **2. Vibrant Sunset**  | { customClass: 'bg-gradient-to-r from-[#FF6B00] to-[#D62828] hover:from-[#FF7F00] hover:to-[#C62828]', text: 'Vibrant Sunset', imageSrc: 'https://img.icons8.com/?size=100&id=40258&format=png&color=000000' } |
| **3. Elegant Purple**  | { customClass: 'bg-gradient-to-r from-[#8e44ad] to-[#3498db] hover:from-[#9b59b6] hover:to-[#2980b9]', text: 'Elegant Purple' } |
| **4. Pastel Dream**    | { customClass: 'bg-gradient-to-r from-[#fbc2eb] to-[#a6c1ee] hover:from-[#f9a8d4] hover:to-[#91b7e3]', text: 'Pastel Dream' } |
| **5. Modern Slate**    | { customClass: 'bg-gray-800 hover:bg-gray-900', text: 'Modern Slate' } |
| **6. Neon Glow**       | { customClass: 'bg-gradient-to-r from-[#00f260] to-[#0575e6] hover:from-[#00e159] hover:to-[#0465d1]', text: 'Neon Glow' } |

---

**Example**:

For Vibrant Sunset variant:

***<Button05 customClass="bg-gradient-to-r from-[#FF6B00] to-[#D62828] hover:from-[#FF7F00] hover:to-[#C62828]" text="Vibrant Sunset" imageSrc="https://img.icons8.com/?size=100&id=40258&format=png&color=000000" />***
`,
    variants: [
      { props: {} },
      { props: { customClass: 'bg-gradient-to-r from-[#FF6B00] to-[#D62828] hover:from-[#FF7F00] hover:to-[#C62828]', text: 'Vibrant Sunset', imageSrc:'https://img.icons8.com/?size=100&id=40258&format=png&color=000000' } },
      { props: { customClass: 'bg-gradient-to-r from-[#8e44ad] to-[#3498db] hover:from-[#9b59b6] hover:to-[#2980b9]', text: 'Elegant Purple' } },
      { props: { customClass: 'bg-gradient-to-r from-[#fbc2eb] to-[#a6c1ee] hover:from-[#f9a8d4] hover:to-[#91b7e3]', text: 'Pastel Dream' } },
      { props: { customClass: 'bg-gray-800 hover:bg-gray-900', text: 'Modern Slate' } },
      { props: { customClass: 'bg-gradient-to-r from-[#00f260] to-[#0575e6] hover:from-[#00e159] hover:to-[#0465d1]', text: 'Neon Glow' } },
    ],
  },
  {
    name: 'Button06',
    component: Button06,
    code: `import { DivUi } from "trydivjs";
const divUi = new DivUi();

divUi.GetComponent("Button06");`,
    docs: `
## Button06

Button06 is a sleek, modern button with a subtle animated background effect.

 - **To generate the code automatically, add the line:**
\`\`\`javascript
divUi.GetComponent("Button06")
\`\`\`
to script.js and run:
\`\`\`sh
node utils/script.js
\`\`\`

---

## **Pass these props to your component:**

| Variant              | Properties |
| -------------------- | ---------- |
| **1. Default**          | \`{}\` |
| **2. Gradient Blue**    | { customClass: 'bg-gradient-to-r from-[#007BFF] to-[#00A8FF] hover:from-[#0056b3] hover:to-[#0082d1]', text: 'Gradient Blue' } |
| **3. Elegant Gradient** | { customClass: 'bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC] hover:from-[#0041B3] hover:via-[#3659d9] hover:to-[#5aa8f2] shadow-xl hover:shadow-2xl', text: 'Elegant Gradient' } |
| **4. Neon Glow**        | { customClass: 'bg-[#1B98E0] hover:bg-[#1572a1] shadow-lg hover:shadow-[0_0_20px_2px_#1B98E0]', text: 'Neon Glow' } |
| **5. Dark Minimal**     | { customClass: 'bg-gray-800 hover:bg-gray-900 focus:ring-gray-500', text: 'Dark Minimal' } |

---

**Example**:

For Gradient Blue variant:

***<Button06 customClass="bg-gradient-to-r from-[#007BFF] to-[#00A8FF] hover:from-[#0056b3] hover:to-[#0082d1]" text="Gradient Blue" />***
`,
    variants: [
      { props: {} },
      { props: { customClass: 'bg-gradient-to-r from-[#007BFF] to-[#00A8FF] hover:from-[#0056b3] hover:to-[#0082d1]', text: 'Gradient Blue' } },
      { props: { customClass: 'bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC] hover:from-[#0041B3] hover:via-[#3659d9] hover:to-[#5aa8f2] shadow-xl hover:shadow-2xl', text: 'Elegant Gradient' } },
      { props: { customClass: 'bg-[#1B98E0] hover:bg-[#1572a1] shadow-lg hover:shadow-[0_0_20px_2px_#1B98E0]', text: 'Neon Glow' } },
      { props: { customClass: 'bg-gray-800 hover:bg-gray-900 focus:ring-gray-500', text: 'Dark Minimal' } },
    ],
  },
];


function Buttons() {
  return (
    <div className="flex flex-col sm:flex-row w-full min-h-screen sm:p-2 space-y-6 sm:space-y-0">
      {/* Main Content */}
      <div className="sm:w-4/5 w-full space-y-12">
        {ComponentArray.map(({ name, component: Button, variants, code, docs }, index) => (
          <Preview
            key={index}
            name={name}
            code={code}
            docs={docs}
          >
            <div className="flex flex-wrap w-full items-center justify-center gap-6">
            {variants.map((variant, idx) => (
              <div key={idx}>
                <Button {...variant.props} />
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

export default Buttons;

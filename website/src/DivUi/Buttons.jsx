import React from 'react';
import Button01 from '../../utils/Buttons/Button01/Button01';
import Button02 from '../../utils/Buttons/Button02/Button02';
import Button03 from '../../utils/Buttons/Button03/Button03';
import Button04 from '../../utils/Buttons/Button04/Button04';
import Button05 from '../../utils/Buttons/Button05/Button05';
import Button06 from '../../utils/Buttons/Button06/Button06';
import Preview from '../Components/Preview';

const ComponentArray = [
    { name: 'Button01', component: Button01 },
    { name: 'Button02', component: Button02 },
    { name: 'Button03', component: Button03 },
    { name: 'Button04', component: Button04 },
    { name: 'Button05', component: Button05 },
    { name: 'Button06', component: Button06 },
];

function Buttons() {
    return (
        <div className="flex w-full min-h-screen p-6">
            {/* Main Content */}
            <div className="w-4/5 space-y-12">
                {ComponentArray.map(({ name, component: Button }, index) => (
                    <Preview
                        key={index}
                        name={name}
                        code={`import { DivUi } from "trydivjs";\nconst divUi = new DivUi();\n\ndivUi.GetComponent("${name}");`}
                        docs={`${name} is a customizable button component designed for modern UI interactions.`}
                    >
                        <Button />
                    </Preview>
                ))}
            </div>
            
            {/* Sidebar */}
            <div className="w-1/5 pl-4">
                <div className="border border-neutral-300 rounded-xl shadow-lg p-6 bg-white sticky top-8">
                    <h2 className="text-xl font-semibold text-neutral-700 mb-4">Buttons List</h2>
                    <ul className="space-y-3">
                        {ComponentArray.map(({ name }, index) => (
                            <li key={index}>
                                <a href={`#${name}`} className="text-blue-500 hover:underline">{name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Buttons;
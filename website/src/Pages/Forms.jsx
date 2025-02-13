import React from 'react';
import Form01 from '../../utils/Forms/Form01/Form01';
import Form02 from '../../utils/Forms/Form02/Form02';
import Form03 from '../../utils/Forms/Form03/Form03';
import Form04 from '../../utils/Forms/Form04/Form04';
import Preview from '../Components/Preview';

const buttonComponents = [
    { name: 'Form01', component: Form01 },
    { name: 'Form02', component: Form02 },
    { name: 'Form03', component: Form03 },
    { name: 'Form04', component: Form04 },
];

function Forms() {
    return (
        <div className="flex w-full min-h-screen p-8 space-x-8">
            {/* Main Content */}
            <div className="w-3/4 space-y-12">
                {buttonComponents.map(({ name, component: Button }, index) => (
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
            <div className="w-1/4">
                <div className="border border-neutral-300 rounded-xl shadow-lg p-6 bg-white sticky top-8">
                    <h2 className="text-xl font-semibold text-neutral-700 mb-4">Forms List</h2>
                    <ul className="space-y-3">
                        {buttonComponents.map(({ name }, index) => (
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

export default Forms;

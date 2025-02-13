import React from 'react';
import Navbar01 from '../../utils/Navbars/Navbar01/Navbar01';
import Preview from '../Components/Preview';

const buttonComponents = [
    { name: 'Navbar01', component: Navbar01 },
];

function Navbars() {
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

export default Navbars;
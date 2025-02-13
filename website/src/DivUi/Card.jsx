import React from 'react';
import Preview from '../Components/Preview';
import Card01 from '../../utils/Cards/Card01/Card01';
import Card02 from '../../utils/Cards/Card02/Card02';
import Card03 from '../../utils/Cards/Card03/Card03';
import Card04 from '../../utils/Cards/Card04/Card04';
import Card05 from '../../utils/Cards/Card05/Card05';

const ComponentArray = [
    { name: 'Card01', component: Card01 },
    { name: 'Card02', component: Card02 },
    { name: 'Card03', component: Card03 },
    { name: 'Card04', component: Card04 },
    { name: 'Card05', component: Card05 },
];

function Card() {
    return (
        <div className="flex w-full min-h-screen p-6">
            {/* Main Content */}
            <div className="w-4/5 space-y-12 grid grid-cols-1 place-items-center">
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

export default Card;
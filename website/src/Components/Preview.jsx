import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Preview({ children, name, code, docs }) {
    return (
        <div id={name} className="border w-full border-neutral-300 rounded-xl shadow-lg p-6 bg-white">
            <h2 className="text-2xl font-semibold text-neutral-700 mb-4 text-center">{name}</h2>
            
            <div className="grid grid-cols-1 place-items-center w-full py-6 bg-neutral-100 rounded-lg">
                <div className="w-full  max-w-3xl grid grid-cols-1 place-items-center">
                    {children}
                </div>
            </div>

            <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 mb-3">Code Example</h3>
                <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded-lg max-w-xl">
                    {code}
                </SyntaxHighlighter>
            </div>

            {/* Documentation */}
            <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 mb-3">Documentation</h3>
                <p className="text-neutral-600 leading-relaxed">{docs}</p>
            </div>
        </div>
    );
}

export default Preview;

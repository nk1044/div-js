import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Preview({ children, name, code, docs }) {
    return (
        <div id={name} className="border border-neutral-300 rounded-xl shadow-lg p-6 bg-white">
            <h2 className="text-2xl font-semibold text-neutral-700 mb-4 text-center">{name}</h2>
            {/* Component Preview */}
            <div className="flex justify-center items-center py-6 bg-neutral-100 rounded-lg">
                {children}
            </div>
            {/* Code Block */}
            <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 mb-3">Code Example</h3>
                <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded-lg">
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

import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

function Preview({ children, name, code, docs }) {
    const [activeTab, setActiveTab] = useState('preview');
    const markdownContent = String(docs);

    return (
        <div id={name} className="border border-neutral-200 w-full rounded-2xl shadow-lg bg-white overflow-hidden">
            {/* Component Header */}
            <div className="bg-gray-50 border-b border-neutral-200 p-6">
                <h2 className="text-2xl font-semibold text-neutral-800">{name}</h2>
            </div>

            {/* Tab Navigation */}
            <div className="bg-white border-b border-neutral-200">
                <div className="flex">
                    {['preview', 'code', 'docs'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 px-4 py-3 text-center font-medium transition-colors duration-200 
                                ${activeTab === tab
                                    ? 'border-b-4 border-blue-500 text-blue-700 bg-blue-50'
                                    : 'text-neutral-600 hover:bg-neutral-100'}`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div className="py-2">
                {activeTab === 'preview' && (
                    <div className="w-full bg-neutral-50 rounded-xl sm:py-8 py-2 flex items-center justify-center">
                        <div className="w-full flex items-center justify-center">
                            {children}
                        </div>
                    </div>
                )}

                {activeTab === 'code' && (
                    <div className="overflow-x-auto py-3">
                        <SyntaxHighlighter
                            language="javascript"
                            style={vscDarkPlus}
                            className="rounded-xl"
                            customStyle={{
                                margin: 0,
                                padding: '1.5rem',
                                background: '#1e1e1e',
                                fontSize: '0.875rem'
                            }}
                        >
                            {code}
                        </SyntaxHighlighter>
                    </div>
                )}

                {activeTab === 'docs' && (
                    <div className="bg-gray-100 p-6 rounded-lg shadow-inner my-4">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Documentation</h3>
                        <div className="prose max-w-full">
                        <Markdown remarkPlugins={[remarkGfm]}>{markdownContent}</Markdown>
                    </div>
                    </div>
                )}
                

            </div>
        </div>
    );
}

export default Preview;

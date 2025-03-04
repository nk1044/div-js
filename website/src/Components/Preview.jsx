import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

function Preview({ children, name, code, docs }) {
    const [activeTab, setActiveTab] = useState('preview');
    const markdownContent = String(docs);
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div id={name} className="border border-neutral-200 dark:border-neutral-700 w-full rounded-2xl shadow-lg bg-white dark:bg-neutral-900 overflow-hidden">
            {/* Component Header */}
            <div className="bg-gray-50 border-b border-neutral-200 p-6 dark:bg-neutral-900 dark:border-neutral-800">
                <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-300">{name}</h2>
            </div>

            {/* Tab Navigation */}
            <div className="bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
                <div className="flex">
                    {['preview', 'code', 'docs'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 px-4 py-3 text-center font-medium transition-colors duration-200 
                                ${activeTab === tab
                                    ? 'border-b-4 border-blue-500 dark:border-orange-600 dark:text-white text-blue-700 bg-blue-50 dark:bg-neutral-950'
                                    : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700'}`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div className="py-2">
                {activeTab === 'preview' && (
                    <div className="w-full bg-neutral-50 dark:bg-neutral-800 rounded-xl sm:py-8 py-2 flex items-center justify-center">
                        <div className="w-full flex items-center justify-center">
                            {children}
                        </div>
                    </div>
                )}

{activeTab === 'code' && (
    <div className="relative overflow-x-auto py-3 px-3  rounded-lg">
        {/* Copy Button */}
        <button
            onClick={() => {
                navigator.clipboard.writeText(code);
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
            }}
            className="absolute top-9 right-4 cursor-pointer bg-gray-700 text-white text-xs px-2 py-1 rounded hover:bg-gray-600 transition"
        >
            {copied ? "Copied!" : "Copy"}
        </button>

        {/* Code Block */}
        <SyntaxHighlighter language="bash" style={oneDark} className="rounded-md px-2">
            {code}
        </SyntaxHighlighter>
    </div>
)}


                {activeTab === 'docs' && (
                    <div className="bg-gray-100 dark:bg-neutral-800 p-6 rounded-lg shadow-inner my-4">
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-neutral-300 mb-4">Documentation</h3>
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

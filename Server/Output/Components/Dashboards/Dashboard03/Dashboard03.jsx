import React, { useState } from 'react'

function Dashboard03() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navigationItems = [
        { name: 'Home', route: '/home' },
        { name: 'About', route: '/about' },
        { name: 'Contact', route: '/contact' },
        { name: 'Services', route: '/services' },
    ]

    const HandleNavigation = (route) => {
        console.log(`Navigating to ${route}`);
        setMenuOpen(false);
    }

    const HandleAuth = (auth) => {
        console.log(`Authenticating ${auth}`);
    }

    return (
        <div className='w-full min-h-screen pb-10 bg-gradient-to-b from-neutral-950 to-neutral-800'>
            <div className='h-full w-full'>
                {/* Header */}
                <nav className="w-full pt-4 px-4 text-white">
                    <div className="flex justify-between items-center p-4">
                        {/* Logo */}
                        <div className='flex items-center'>

                            <img src="/logo2.png" alt="logo" className='w-15' />
                            <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent text-3xl font-bold">
                                TrydivJS
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <ul className="hidden sm:flex gap-5 bg-neutral-900 rounded-3xl px-3 py-2 ml-4 md:ml-20">
                            {navigationItems.map((item) => (
                                <li
                                    key={item.name}
                                    className="text-white cursor-pointer transition duration-300 
                                    hover:scale-110 rounded-3xl border border-transparent 
                                    hover:border-neutral-300 hover:bg-neutral-300 hover:text-neutral-900 px-4 py-1"
                                    onClick={() => HandleNavigation(item.route)}
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>

                        {/* Buttons */}
                        <div className="hidden sm:flex items-center gap-2">
                            <button className="border border-neutral-800 cursor-pointer rounded-3xl px-6 py-2 bg-neutral-800 
                                transition duration-300 hover:scale-105"
                                onClick={() => HandleAuth('Login')}>
                                Login
                            </button>
                            <button className="border border-neutral-800 hidden md:block cursor-pointer rounded-3xl px-6 py-2 bg-neutral-200 text-neutral-800 
                                transition duration-300 hover:scale-105"
                                onClick={() => HandleAuth('Signup')}>
                                Signup
                            </button>
                        </div>

                        {/* Mobile Menu Icon (SVG) */}
                        <div className="sm:hidden">
                            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
                                {menuOpen ? (
                                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                ) : (
                                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="4" y1="6" x2="20" y2="6" />
                                        <line x1="4" y1="12" x2="20" y2="12" />
                                        <line x1="4" y1="18" x2="20" y2="18" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`sm:hidden ${menuOpen ? "block" : "hidden"} transition duration-300`}>
                        <ul className="flex flex-col gap-4 bg-neutral-800 rounded-3xl p-4">
                            {navigationItems.map((item) => (
                                <li
                                    key={item.name}
                                    className="text-white cursor-pointer transition duration-300 
                                    hover:scale-105 rounded-3xl border border-transparent 
                                    hover:border-neutral-300 hover:bg-neutral-300 hover:text-neutral-900 px-4 py-2"
                                    onClick={() => HandleNavigation(item.route)}
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>

                        {/* Mobile Buttons */}
                        <div className="flex flex-col gap-2 p-4">
                            <button className="border border-neutral-700 rounded-3xl px-6 py-2 bg-neutral-800 
                                transition duration-300 hover:scale-105"
                                onClick={() => HandleAuth('Login')}>
                                Login
                            </button>
                            <button className="border border-neutral-700 rounded-3xl px-6 py-2 bg-neutral-200 text-neutral-800 
                                transition duration-300 hover:scale-105"
                                onClick={() => HandleAuth('Signup')}>
                                Signup
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Main Content */}
                <main className="w-full px-4 mt-12">
                    <div className="flex items-center justify-center h-full">
                        <div className="relative inline-block">
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r 
                                from-purple-500 via-pink-500 to-purple-500 p-0.5 max-w-xs mx-auto">
                                <div className="h-full w-full bg-neutral-950 rounded-3xl"></div>
                            </div>
                            <h1 className="relative text-md text-neutral-400 cursor-pointer rounded-3xl px-7 py-2"
                                onClick={() => HandleNavigation('services')}>
                                try the fastest ui library <span className=' hover:text-white transition-colors duration-300'>→</span>
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-col items-center h-full mt-10 text-white">
                        <h1 className="text-4xl md:text-6xl font-light text-center">Welcome to TrydivJS</h1>
                        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl text-center pt-4">trydivjs - The laziest way to build UI components with just one line. No setup, no hassle, just powerful UI components instantly!</p>
                    </div>
                    <div className="flex justify-center mt-10">
                        <button className="group w-40 h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
                            transform transition duration-300 hover:scale-110 cursor-pointer rounded-3xl">
                            <span className="text-white text-lg font-medium">Get Started!</span>
                        </button>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 gap-8 place-items-center mt-16 sm:grid-cols-2 lg:grid-cols-3 px-4 md:px-8 lg:px-16">
                        <div className="group max-w-full md:max-w-[90%] bg-neutral-800/60 backdrop-blur-sm border border-neutral-700/50 p-8 rounded-2xl shadow-xl transition-all duration-300 hover:border-blue-500/30 hover:translate-y-[-5px]">
                            <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M21 7L15.4 12.6L11.7 8.9L7 13.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-white group-hover:text-blue-400 transition-colors">One-Liner Magic</h3>
                            <p className="text-neutral-400 overflow-hidden">
                                No setup, no headaches—just import and use. Build beautiful UI components with just one line of code. It's that simple!
                            </p>
                            <div className="mt-6 pt-6 border-t border-neutral-700/50">
                                <div className="inline-flex items-center cursor-pointer text-blue-400 hover:text-blue-300 font-medium"
                                    onClick={() => HandleNavigation('services')}>
                                    Learn more
                                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="group max-w-full md:max-w-[90%] bg-neutral-800/60 backdrop-blur-sm border border-neutral-700/50 p-8 rounded-2xl shadow-xl transition-all duration-300 hover:border-purple-500/30 hover:translate-y-[-5px]">
                            <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20">
                                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 21V16.6C10 16.0399 10 15.7599 10.109 15.546C10.2049 15.3578 10.3578 15.2049 10.546 15.109C10.7599 15 11.0399 15 11.6 15H12.4C12.9601 15 13.2401 15 13.454 15.109C13.6422 15.2049 13.7951 15.3578 13.891 15.546C14 15.7599 14 16.0399 14 16.6V21M21 21V10.2C21 9.0799 21 8.51984 20.782 8.09202C20.5903 7.71569 20.2843 7.40973 19.908 7.21799C19.4802 7 18.9201 7 17.8 7H6.2C5.07989 7 4.51984 7 4.09202 7.21799C3.71569 7.40973 3.40973 7.71569 3.21799 8.09202C3 8.51984 3 9.0799 3 10.2V21M22 21H2M7 7V4M17 7V4M7.5 11H16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-white group-hover:text-purple-400 transition-colors">Insanely Fast</h3>
                            <p className="text-neutral-400 overflow-hidden">
                                Super lightweight, zero dependencies, and optimized for speed. Build and deploy your projects faster than ever before.
                            </p>
                            <div className="mt-6 pt-6 border-t border-neutral-700/50">
                                <div className="inline-flex cursor-pointer items-center text-purple-400 hover:text-purple-300 font-medium"
                                    onClick={() => HandleNavigation('services')}>
                                    Learn more
                                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="group max-w-full md:max-w-[90%] bg-neutral-800/60 backdrop-blur-sm border border-neutral-700/50 p-8 rounded-2xl shadow-xl transition-all duration-300 hover:border-cyan-500/30 hover:translate-y-[-5px]">
                            <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20">
                                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 16.01V16M12 8V12M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-white group-hover:text-cyan-400 transition-colors">Pre Built Components</h3>
                            <p className="text-neutral-400 overflow-hidden">
                                Choose from a wide range of pre-built components to kickstart your project. Customize and style them to fit your needs.
                            </p>
                            <div className="mt-6 pt-6 border-t border-neutral-700/50">
                                <div className="inline-flex cursor-pointer items-center text-cyan-400 hover:text-cyan-300 font-medium"
                                    onClick={() => HandleNavigation('services')}>
                                    Learn more
                                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="w-full mt-20 pt-10 pb-6 border-t border-neutral-800 bg-neutral-900/50">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
                            {/* Brand Column */}
                            <div className="col-span-1 md:col-span-1">
                                <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent text-2xl font-bold mb-4">
                                    TrydivJS
                                </div>
                                <p className="text-neutral-400 mb-4">
                                    The laziest way to build UI components with just one line. No setup, no hassle, just powerful UI components instantly!
                                </p>
                                <div className="flex space-x-4 mt-4">
                                    <a href="https://github.com/nk1044" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition duration-300">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                    <a href="https://linkedin.com/in/neerajkumar1044" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition duration-300">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Links Column 1 */}
                            <div className="col-span-1">
                                <h3 className="text-white text-lg font-medium mb-4">Product</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-neutral-400 hover:text-white transition duration-300">Features</a></li>
                                    <li><a href="#" className="text-neutral-400 hover:text-white transition duration-300">Documentation</a></li>
                                    <li><a href="#" className="text-neutral-400 hover:text-white transition duration-300">Pricing</a></li>
                                    <li><a href="#" className="text-neutral-400 hover:text-white transition duration-300">Examples</a></li>
                                </ul>
                            </div>

                            {/* Links Column 2 */}
                            <div className="col-span-1">
                                <h3 className="text-white text-lg font-medium mb-4">Company</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-neutral-400 hover:text-white transition duration-300">About Us</a></li>
                                    <li><a href="#" className="text-neutral-400 hover:text-white transition duration-300">Blog</a></li>
                                    <li><a href="#" className="text-neutral-400 hover:text-white transition duration-300">Careers</a></li>
                                    <li><a href="#" className="text-neutral-400 hover:text-white transition duration-300">Contact</a></li>
                                </ul>
                            </div>

                            {/* Contact/Newsletter Column */}
                            <div className="col-span-1">
                                <h3 className="text-white text-lg font-medium mb-4">Stay Updated</h3>
                                <p className="text-neutral-400 mb-4">Subscribe to our newsletter for the latest updates.</p>

                            </div>
                        </div>

                        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center">
                            <div className="text-neutral-500 text-sm mb-4 md:mb-0">
                                © 2025 TrydivJS. All rights reserved.
                            </div>
                            <div className="text-neutral-500 text-sm">
                                Designed & Developed with ❤️ by <a href="https://github.com/nk1044" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition duration-300">Neeraj Kumar</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Dashboard03
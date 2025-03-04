#!/usr/bin/env node

import { GetComponent } from "../src/script.js";
const args = process.argv.slice(2);

const welcomeMessage = 
    "\n\x1b[90m╔" + "═".repeat(50) + "╗\x1b[0m" +
    "\n\x1b[90m║\x1b[0m      \x1b[36m♦ \x1b[1mTRYDIV\x1b[33mJS\x1b[0m \x1b[90mLibrary Initialization\x1b[0m           \x1b[90m║\x1b[0m" +
    "\n\x1b[90m╠" + "═".repeat(50) + "╣\x1b[0m" +
    "\n\x1b[90m║\x1b[0m   \x1b[32m✨ Welcome to the power of component magic!  ✨\x1b[0m\x1b[90m║\x1b[0m" +
    "\n\x1b[90m║\x1b[0m                                                  \x1b[90m║\x1b[0m" +
    "\n\x1b[90m║\x1b[0m   \x1b[34m➤\x1b[0m Library: \x1b[1m\x1b[35mTRYDIVJS\x1b[0m                            \x1b[90m║\x1b[0m" +
    "\n\x1b[90m║\x1b[0m   \x1b[34m➤\x1b[0m Creator: \x1b[1m\x1b[35mNeeraj Kumar\x1b[0m                        \x1b[90m║\x1b[0m" +
    "\n\x1b[90m║\x1b[0m                                                  \x1b[90m║\x1b[0m" +
    "\n\x1b[90m║\x1b[0m   \x1b[33m🚀 Quick Start:\x1b[0m                                \x1b[90m║\x1b[0m" +
    "\n\x1b[90m║\x1b[0m   \x1b[36mnpx trydivjs add <component_name>\x1b[0m              \x1b[90m║\x1b[0m" +
    "\n\x1b[90m╚" + "═".repeat(50) + "╝\x1b[0m\n" +
    "\n\x1b[33m🚀 Quick commands:\x1b[0m" +
    "\n\x1b[36m• npx trydivjs add <component_name>\x1b[0m" +
    "\n\x1b[36m• Check out docs at: https://divjs.vercel.app/\x1b[0m\n";

const handleComponent = async (componentName) => {
    try {
        await GetComponent(componentName);
        console.log(`\x1b[34mComponent ${componentName} added to utils folder successfully!`);
        console.log(welcomeMessage);
    } catch (error) {
        console.error('\x1b[31m\x1b[1mError fetching component\x1b[37m');
        console.error(error);
    }
}

if (args.length < 2 || args[0] !== "add") {
    console.error("\x1b[31m\x1b[1mUsage: npx trydivjs add <component_name>\x1b[37m");
    process.exit(1);
}
else {
    const componentName = args[1];
    console.log(`Creating component ${componentName}...`);
    handleComponent(componentName);
}
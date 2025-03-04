#!/usr/bin/env node

import { GetComponent } from "../src/script.js";
const args = process.argv.slice(2);

const handleComponent = async (componentName) => {
    try {
        await GetComponent(componentName);
        console.log(`\x1b[34mComponent ${componentName} added to utils folder successfully!`);
    } catch (error) {
        console.error('\x1b[31m\x1b[1mError fetching component\x1b[37m');
        console.error(error);
    }
}

if (args.length < 2 || args[0] !== "add") {
    console.error("Usage: npx trydivjs add <component_name>");
    process.exit(1);
}
else {
    const componentName = args[1];
    console.log(`Creating component ${componentName}...`);
    handleComponent(componentName);
}
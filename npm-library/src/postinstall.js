#!/usr/bin/env node

import {createUtilsFolder} from './script.js';


(async () => {
    try {
        // Create utils folder
        await createUtilsFolder();

    } catch (error) {
        console.error('\x1b[31m❌ Error during TryDivJS installation:\x1b[0m', error);
    }
})();
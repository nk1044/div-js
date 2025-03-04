import fs from 'fs/promises';
import { join, extname, dirname } from 'path';
import { mkdir } from "fs/promises";
import { existsSync } from "fs";
import axios from 'axios';
import { fileURLToPath } from "url";


const SERVER_URL = 'https://divjs-02.onrender.com';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const projectRoot = join(__dirname, "../../../");
const utilsFolderPath = join(projectRoot, "utils");


async function createUtilsFolder() {
    if (!existsSync(utilsFolderPath)) {
        try {
            await mkdir(utilsFolderPath, { recursive: true });
            const {scriptContent, script_with_dev_humor} = GetScriptContent();
            
            // Write dev humor to a more prominent location
            await fs.writeFile(join(utilsFolderPath, 'dev_wisdom.txt'), script_with_dev_humor, 'utf8');
            
        } catch (error) {
            console.error("\x1b[31m\x1b[1mError creating utils folder:\x1b[0m", error);
        }
    } else {
        console.log("\x1b[32m\x1b[1mUtils folder already exists!\x1b[0m");
    }
}

const fetchData = async (name) => {

    try {
        const response = await axios.get(`${SERVER_URL}/api/component/get-component?name=${name}`);
        await createUtilsFolder();
        await setFolderStructure(response?.data, utilsFolderPath);
        return true;
    } catch (error) {
        console.error('\x1b[31m\x1b[1mError fetching component\x1b[37m');
    }
};


function GetScriptContent() {
    const scriptContent = `import { DivUi } from "trydivjs";\n\nconst divUi = new DivUi("your_api_key");\n\n// Uncomment the below line to get the component\n// divUi.GetComponent("component_name");\n`;
    
    const script_with_dev_humor = `Windows users, brace yourselves:\n
- Your PC will restart just as you finally fix a bug you've been debugging for 6 hours.\n
- Windows Update: the only thing in life that's unavoidable besides death and taxes.\n
- Clicking "Remind me later" on updates? Congratulations, you now have a second job.\n
- Task Manager crashes while trying to close an unresponsive program—oh, the irony.\n
- "Not Responding" is not a status; it’s a Windows lifestyle.\n
- Your Wi-Fi adapter goes missing like a deadbeat dad—there one moment, gone the next.\n
- Enjoy the suspense of a "Preparing Windows" screen that prepares you for nothing but regret.\n\n

Linux users, let's be real:\n
- Rebooting is for the weak.\n
- Your OS is stable—until you touch anything related to Nvidia drivers.\n
- "Arch is the best!" — said every Arch user, right before spending 3 hours fixing a dependency issue.\n
- You didn't install Linux, you signed up for a life of manually fixing everything.\n
- Half your time is spent evangelizing Linux to people who will never use it.\n\n

Developers in general:\n
- "It works on my machine" is the battle cry of broken deployments everywhere.\n
- Stack Overflow isn’t a tool—it’s your entire personality.\n
- "Just one more fix" is how you end up debugging at 4 AM with existential dread.\n
- The only thing that crashes more than your code is your will to live.\n
- If comments are documentation, then your codebase is an ancient scroll written in a lost language.\n
- Git commit messages range from "fixed stuff" to "I have no idea what’s happening anymore."\n
- Debugging is just staring at the screen until the error message magically makes sense.\n
- "AI will replace developers" — sure, right after it figures out how to center a div.\n\n

Welcome to the world of software development—where the only certainty is suffering. 😈\n`;

    return {scriptContent, script_with_dev_humor}; // Returning the script content because returning frustration isn't an option.
}


async function setFolderStructure(tree, path = '.') {
    for (const element of tree) {
        const newPath = String(join(path, element.name));
        
        if (element.type === "folder") {
            await fs.mkdir(newPath, { recursive: true });

            if (element.children.length>0) {
                await setFolderStructure(element.children, newPath);
            }
        } else {
            await fs.writeFile(newPath, element.content || '', 'utf8');
        }
    }
}


async function GetComponent(name) {
    const filePath = await fetchData(name);
    if (!filePath) return null;
    console.log('\x1b[32mComponent fetched successfully!\x1b[0m');
    return true;
}

export {
    createUtilsFolder,
    GetComponent
};

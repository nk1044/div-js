import fs from 'fs/promises';
import { join, extname, dirname } from 'path';
import { mkdir } from "fs/promises";
import { existsSync } from "fs";
import axios from 'axios';
import { fileURLToPath } from "url";


// const SERVER_URL = 'https://divjs-02.onrender.com';
const SERVER_URL = 'http://localhost:9000';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const projectRoot = join(__dirname, "../../../");
const utilsFolderPath = join(projectRoot, "utils");
console.log('projectRoot:', projectRoot);
console.log('utilsFolderPath:', utilsFolderPath);

async function createUtilsFolder() {
    if (!existsSync(utilsFolderPath)) {
        try {
            await mkdir(utilsFolderPath, { recursive: true });
            await fs.writeFile(join(utilsFolderPath, 'script.js'), GetScriptContent(), 'utf8');
            console.log("utils folder created successfully!");
        } catch (error) {
            console.error("Error creating utils folder:", error);
        }
    } else {
        console.log("utils folder already exists.");
    }
}

const fetchData = async (name) => {

    try {
        console.log('name:', name);
        const response = await axios.get(`${SERVER_URL}/api/component/get-component?name=${name}`);
        // console.log('response:', response?.data);
        await createUtilsFolder();
        await setFolderStructure(response?.data, utilsFolderPath);
        return true;
    } catch (error) {
        console.error('Error fetching component:', error);
    }
};


function GetScriptContent() {
    const script = `import { DivUi } from "trydivjs";\n\nconst divUi = new DivUi("your_api_key");`
    return script;
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


export {
    fetchData,
    createUtilsFolder,
};

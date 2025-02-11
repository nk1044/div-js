import fs from 'fs/promises';
import { join, extname , dirname} from 'path';
import { mkdir } from "fs/promises";
import { existsSync } from "fs";
import axios from 'axios';
import { fileURLToPath } from "url";


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
        const content = response?.data?.data || '';
        
        // console.log('response:', content);
        if(!existsSync(utilsFolderPath)){
            await createUtilsFolder();
        }
        const ext = extname(name) || '.txt';
        const filePath = join(utilsFolderPath, `${name}${ext}`);

        await fs.writeFile(filePath, content, 'utf8');

        return true;
    } catch (error) {
        console.error('Error fetching component:', error);
    }
};


function GetScriptContent(){
    const script = `import { DivUi } from "trydivjs";\n\nconst divUi = new DivUi("your_api_key");`
    return script;
}


export { 
    fetchData,
    createUtilsFolder,
};

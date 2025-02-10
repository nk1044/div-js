import fs from 'fs/promises';
import axios from 'axios';
import { join } from 'path';
import { pathToFileURL } from 'url';

const SERVER_URL = 'http://localhost:9000';
const SOURCE_FILE_PATH = process.cwd();

export const fetchData = async (name) => {
    try {
        const filePath = join(SOURCE_FILE_PATH, 'utils', `${name}.jsx`);
        const FileAlreadyExists = await fs.access(filePath).then(() => true).catch(() => false);
        
        if(FileAlreadyExists) return filePath;
        
        await fs.mkdir(join(SOURCE_FILE_PATH, 'utils'), { recursive: true });

        const response = await axios.get(`${SERVER_URL}/${name}`);
    
        await fs.writeFile(filePath, response.data, 'utf8');

        return filePath;
    } catch (error) {
        console.error('Error fetching or writing file:', error);
    }
};


export default Ui;

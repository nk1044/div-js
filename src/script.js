import fs from 'fs/promises';
import { join, extname } from 'path';
import { pathToFileURL } from 'url';
import axios from 'axios';

const SERVER_URL = 'http://localhost:9000';

const fetchData = async (name) => {
    try {
        console.log('name:', name);
        
        // Fetch the file content from the server
        const response = await axios.get(`${SERVER_URL}/api/component/get-component?name=${name}`);
        const content = response?.data?.data || ''; // Ensure content is not undefined
        
        console.log('response:', content);
        
        // Ensure the temp directory exists
        const tempDir = join(process.cwd(), 'temp');
        await fs.mkdir(tempDir, { recursive: true });

        // Preserve the original extension
        const ext = extname(name) || '.txt'; // Default to .js if no extension
        const filePath = join(tempDir, `${name}${ext}`);

        // Write the file
        await fs.writeFile(filePath, content, 'utf8');

        return true;
    } catch (error) {
        console.error('Error fetching component:', error);
    }
};

export { fetchData };

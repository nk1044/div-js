import { Component } from '../models/component.model.js';
import fs from 'fs/promises';
import path from 'path';

const OUTPUT_DIR = path.join(process.cwd(), 'Output');

async function getFileContent(filePath) {
    try {
        return await fs.readFile(filePath, "utf8");
    } catch (error) {
        console.error("Error reading file:", filePath, error);
        return null;
    }
}

async function GetFolderStructure(dirPath) {
    const folder = {
        name: path.basename(dirPath),
        type: "folder",
        children: [],
    };

    try {
        const files = await fs.readdir(dirPath, { withFileTypes: true });

        for (const file of files) {
            const fullPath = path.join(dirPath, file.name);

            if (file.isDirectory()) {
                const childFolder = await GetFolderStructure(fullPath);
                folder.children.push(childFolder);
            } else {
                const fileContent = await getFileContent(fullPath);
                if(file.name.includes('.DS_Store')) {
                    continue;
                }else{
                    folder.children.push({
                        name: file.name,
                        type: "file",
                        content: fileContent,
                    });
                }
                
            }
        }
    } catch (error) {
        console.error("Error reading directory:", dirPath, error);
    }

    return folder;
}

async function CreateComponent(req, res) {
    const { path, name, price } = req.body;
    if([path, name, price].includes(undefined) || [path, name, price].includes('')) {
        return res.status(400).json('All fields are required');
    }

    try {
        const findComponent = await Component.findOne({ path: path });

        if (findComponent) {
            return res.status(400).json({ message: 'Component already exists' });
        }

        const newComponent = await Component.create({ path, name, price });

        return res.status(201).json({
            message: 'Component created successfully',
            component: newComponent
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

async function GetComponentByName(req, res) {
    const name = req?.query?.name;
    if (!name) {
        return res.status(400).json({ message: 'Component name is required' });
    }
    else console.log(name);

    try {
        const component = await Component.findOne({ name: name });
        // console.log(component);
        if(!component?.path) {
            return res.status(404).json({ message: 'Component path not found' });
        }
        const folderStructure = await GetFolderStructure(`${OUTPUT_DIR}/${component?.path}`);
        res.send([folderStructure]);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}



// Export functions
export {
    CreateComponent,
    GetComponentByName
};

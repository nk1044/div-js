import { Component } from '../models/component.model.js';
import fs from 'fs/promises';
import axios from 'axios';
import path from 'path';

const OUTPUT_DIR = path.join(process.cwd(), 'output');

async function ensureOutputDir() {
    try {
        await fs.mkdir(OUTPUT_DIR, { recursive: true });
    } catch (err) {
        console.error('Error creating output directory:', err);
    }
}

async function downloadFileFromGitHub(githubUrl, fileName) {
    try {
        const fileUrl = `${process.env.FOLDER_PATH}/${githubUrl}`;
        const filePath = path.join(OUTPUT_DIR, fileName);
    
        const response = await axios.get(fileUrl, { responseType: 'arraybuffer' });
        // console.log(response);
        await ensureOutputDir();
        await fs.writeFile(filePath, response.data);
        const fileData = await fs.readFile(filePath, 'utf-8');
        await fs.unlink(filePath);

        return fileData;
    } catch (error) {
        throw new Error(`Failed to download file: ${error.message}`);
    }
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
    // console.log(req.query);
    // console.log(name);
    if (!name) {
        return res.status(400).json({ message: 'Component name is required' });
    }

    try {
        const component = await Component.findOne({ name: name });
        // console.log(component);
        if(!component?.path) {
            return res.status(404).json({ message: 'Component path not found' });
        }
        const fileContent = await downloadFileFromGitHub(component?.path, `${name}.jsx`);

        return res
        .status(200)
        .json({ message: 'Component fetched successfully', data: fileContent });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Export functions
export {
    CreateComponent,
    GetComponentByName
};

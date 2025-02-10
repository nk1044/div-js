import { Component } from '../models/component.model.js';

async function CreateComponent(req, res) {
    const { path, name, price } = req.body;
    if([path, name, price].includes(undefined) || [path, name, price].includes('')) {
        return res.status(400).json('All fields are required');
    }
    try {
        const findComponent = await Component.findOne({ path: path });
        if (findComponent) {
            return res.status(400).json('Component already exists');
        }
        const newComponent = await Component.create({
            path: path,
            name: name,
            price: price
        });

        res
            .status(201)
            .json({ message: 'Component created successfully', component: newComponent });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export {
    CreateComponent,
}
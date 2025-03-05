import mongoose, { Schema , model} from 'mongoose';

const componentSchema = new Schema({
    path:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    name:{
        type: String,
        required: true,
        trim: true
    },
    price:{
        type: Number,
        required: true
    },
}, {timestamps: true});

export const Component = model('Component', componentSchema);
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config';

const app = express();

// Basic middleware
app.use(cookieParser());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));

// import routes here
import userRoutes from './src/routes/user.routes.js';

app.use('/api/users', userRoutes);

export default app;
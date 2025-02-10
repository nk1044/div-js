import express from 'express';
import ComponentRouter from './routes/component.route.js';
import cors from 'cors';

const app = express();

const allowedOrigins = [
    'http://localhost:5173',
    '*',
];

app.use(express.json());
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS, contact the admin'));
        }
    },
    credentials: true,
}));


app.get('/health-check', (req, res) => {
    res.send('server is running fine ☠️');
});

app.use('/api/component', ComponentRouter);

export default app;

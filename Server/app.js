import express from 'express';
import ComponentRouter from './routes/component.route.js';

const app = express();

app.use(express.json());

app.get('/health-check', (req, res) => {
    res.send('server is running fine ☠️');
});

app.use('/api/component', ComponentRouter);

export default app;

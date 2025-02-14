import express from 'express';
import app from './app.js';
import { connectDB } from './src/config/db.js';
import 'dotenv/config';
import { startAdmin } from './src/config/admin.js';
import bodyParser from 'body-parser';



const port = process.env.PORT || 3000;


app.get('/health-check', (req, res) => {
    res.send('Server is running healthy 👍');
});
connectDB()
    .then(async () => {
        const { admin, adminRouter } = await startAdmin(app);

        app.use(admin.options.rootPath, adminRouter);

        // Add body parsing middleware
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.use(bodyParser.json());

        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    })
    .catch((error) => {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    });

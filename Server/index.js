import 'dotenv/config';
import app from './app.js';
import connectDb from './config/db.js';

const port = process.env.PORT || 3000;

connectDb().then(()=>{
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch((error)=>{
    console.log(`Unable to connect to database`);
});


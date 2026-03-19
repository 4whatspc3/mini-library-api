import express from 'express';
import bookRouter from './routes/bookRouter.js';

const app = express();

app.use('/books', bookRouter);

app.get("/", (req, res) => {
    res.send("Olá mundo!");
});

const PORT = 3000;

app.listen(PORT, (error) => {
    if(error){
        throw error;
    }

    console.log(`Listening on port ${PORT}`);
});
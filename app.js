import express from 'express';
import bookRouter from './routes/bookRouter.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();

app.use(logger)

app.use('/books', bookRouter);

app.get("/", (req, res) => {
    res.send("Olá mundo!");
});

app.use(errorHandler);

const PORT = 3000;

app.listen(PORT, (error) => {
    if(error){
        throw error;
    }

    console.log(`Listening on port ${PORT}`);
});
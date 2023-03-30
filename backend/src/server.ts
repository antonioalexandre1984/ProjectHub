import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import AppError from './errors/AppError';
import 'express-async-errors';
import './database';
import cors from 'cors';
import routes from './routes';

const app = express();
const port = 3010;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);


app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
        return response
            .status(err.statusCode)
            .json({ status: 'error', message: err.message });
    }
    console.log(err);
    return response
        .status(500)
        .json({ status: 'error', message: 'Internal server error 😌' });
});


app.listen(port, () => {
    console.log(`Server running on port ${port}!Happy coding!😁`);
});

import {NextFunction, Request, Response} from 'express';

export const requestLogger = (req: Request, res: Response, next: NextFunction): void => {
    console.log(`${req.method} ${req.url}`);
    next();
};

export const responseLogger = (err: any, req: Request, res: Response, next: NextFunction): void => {
    if (res.statusCode >= 400) {
        console.error(`Error ${res.statusCode}: ${err.message || 'Unknown error'} at ${req.method} ${req.url}`);
    }
    next(err);
};

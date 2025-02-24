import {NextFunction, Request, Response} from 'express';
import {validationResult} from 'express-validator';

export const validateRequest = (req: Request, res: Response, next: NextFunction): void => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({errors: errors.array()});
        return;
    }
    next();
};

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction): void => {
    console.error('Internal Server Error:', err);
    res.status(500).json({message: 'Internal server error'});
};

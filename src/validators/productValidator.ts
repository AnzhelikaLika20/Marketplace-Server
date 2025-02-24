import {body} from 'express-validator';

export const validateProduct = [
    body('name')
        .notEmpty().withMessage('Name is required')
        .isString().withMessage('Name must be a string'),
    body('price')
        .notEmpty().withMessage('Price is required')
        .isNumeric().withMessage('Price must be a number'),
    body('category')
        .optional()
        .isMongoId().withMessage('Category must be a valid MongoDB ObjectId'),
    body('stock')
        .optional()
        .isInt({min: 0}).withMessage('Stock must be a non-negative integer'),
];

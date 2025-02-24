import {Request, Response} from 'express';
import Product from '../models/product';

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find().populate('category');
        res.json(products);
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error message:', error.message);
        } else {
            console.error('Unexpected error:', error);
        }
    }
};

export const createProduct = async (req: Request, res: Response) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error message:', error.message);
        } else {
            console.error('Unexpected error:', error);
        }
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(updatedProduct);
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error message:', error.message);
        } else {
            console.error('Unexpected error:', error);
        }
    }
};

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({message: 'Product deleted'});
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error message:', error.message);
        } else {
            console.error('Unexpected error:', error);
        }
    }
};

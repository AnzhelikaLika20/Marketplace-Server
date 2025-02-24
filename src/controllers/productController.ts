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

export const getProductById = async (req: Request, res: Response): Promise<void> => {
    try {
        const product = await Product.findById(req.params.id).populate('category');
        if (!product) {
            res.status(404).json({message: 'Product not found'});
            return;
        }
        res.json(product);
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error message:', error.message);
            res.status(500).json({message: 'Internal server error'});
        } else {
            console.error('Unexpected error:', error);
        }
    }
};


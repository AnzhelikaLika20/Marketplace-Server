import {Request, Response} from 'express';
import Category from '../models/category';

export const getCategories = async (req: Request, res: Response) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error message:', error.message);
            res.status(500).json({error: error.message});
        } else {
            console.error('Unexpected error:', error);
            res.status(500).json({error: 'Unexpected error'});
        }
    }
};

export const createCategory = async (req: Request, res: Response) => {
    try {
        const newCategory = new Category(req.body);
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error message:', error.message);
            res.status(400).json({error: error.message});
        } else {
            console.error('Unexpected error:', error);
            res.status(500).json({error: 'Unexpected error'});
        }
    }
};

export const updateCategory = async (req: Request, res: Response) => {
    try {
        const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(updatedCategory);
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error message:', error.message);
            res.status(400).json({error: error.message});
        } else {
            console.error('Unexpected error:', error);
            res.status(500).json({error: 'Unexpected error'});
        }
    }
};

export const deleteCategory = async (req: Request, res: Response) => {
    try {
        await Category.findByIdAndDelete(req.params.id);
        res.json({message: 'Category deleted'});
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error message:', error.message);
            res.status(500).json({error: error.message});
        } else {
            console.error('Unexpected error:', error);
            res.status(500).json({error: 'Unexpected error'});
        }
    }
};

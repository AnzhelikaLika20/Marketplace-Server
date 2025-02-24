import express from 'express';
import {
    createProduct,
    deleteProduct,
    getProductById,
    getProducts,
    updateProduct
} from '../controllers/productController';
import {validateProduct} from "../validators/productValidator";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: CRUD для продуктов
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Получить список всех продуктов
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Список продуктов успешно получен
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: "65d8bfc123456789abcdef01"
 *                   name:
 *                     type: string
 *                     example: "Wireless Mouse"
 *                   price:
 *                     type: number
 *                     example: 29.99
 *                   category:
 *                     type: string
 *                     format: ObjectId
 *                     example: "65d8bfc123456789abcdef02"
 *                   stock:
 *                     type: number
 *                     example: 100
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 */
router.get('/', getProducts);

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Создать новый продукт
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Wireless Mouse"
 *               price:
 *                 type: number
 *                 example: 29.99
 *               category:
 *                 type: string
 *                 format: ObjectId
 *                 description: ID категории, к которой относится продукт
 *                 example: "65d8bfc123456789abcdef02"
 *               stock:
 *                 type: number
 *                 default: 0
 *                 example: 100
 *     responses:
 *       201:
 *         description: Продукт успешно создан
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "65d8bfc123456789abcdef03"
 *                 name:
 *                   type: string
 *                   example: "Wireless Mouse"
 *                 price:
 *                   type: number
 *                   example: 29.99
 *                 category:
 *                   type: string
 *                   example: "65d8bfc123456789abcdef02"
 *                 stock:
 *                   type: number
 *                   example: 100
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       400:
 *         description: Ошибка валидации данных
 */
router.post('/', validateProduct, createProduct);

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Обновить продукт по ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID продукта для обновления
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Updated Mouse"
 *               price:
 *                 type: number
 *                 example: 39.99
 *               category:
 *                 type: string
 *                 example: "65d8bfc123456789abcdef02"
 *               stock:
 *                 type: number
 *                 example: 150
 *     responses:
 *       200:
 *         description: Продукт успешно обновлен
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "65d8bfc123456789abcdef01"
 *                 name:
 *                   type: string
 *                   example: "Updated Mouse"
 *                 price:
 *                   type: number
 *                   example: 39.99
 *                 category:
 *                   type: string
 *                   example: "65d8bfc123456789abcdef02"
 *                 stock:
 *                   type: number
 *                   example: 150
 *       400:
 *         description: Ошибка валидации данных
 */
router.put('/:id', validateProduct, updateProduct);

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Удалить продукт по ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID продукта для удаления
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Продукт успешно удален
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product deleted"
 *       404:
 *         description: Продукт не найден
 */
router.delete('/:id', deleteProduct);

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Получить информацию о конкретном продукте по ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID продукта для получения информации
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Информация о продукте успешно получена
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "65d8bfc123456789abcdef01"
 *                 name:
 *                   type: string
 *                   example: "Wireless Mouse"
 *                 price:
 *                   type: number
 *                   example: 29.99
 *                 category:
 *                   type: string
 *                   example: "65d8bfc123456789abcdef02"
 *                 stock:
 *                   type: number
 *                   example: 100
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Продукт не найден
 */
router.get('/:id', getProductById);

export default router;

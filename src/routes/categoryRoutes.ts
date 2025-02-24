import express from 'express';
import {
    createCategory,
    deleteCategory,
    getCategories,
    getCategoryById,
    updateCategory
} from '../controllers/categoryController';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: CRUD для категорий
 */

/**
 * @swagger
 * /api/categories:
 *   get:
 *     summary: Получить все категории
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: Список категорий
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
 *                     example: "Electronics"
 *                   description:
 *                     type: string
 *                     example: "Devices and gadgets"
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 */
router.get('/', getCategories);

/**
 * @swagger
 * /api/categories:
 *   post:
 *     summary: Создать новую категорию
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Electronics"
 *               description:
 *                 type: string
 *                 example: "Devices and gadgets"
 *     responses:
 *       201:
 *         description: Категория успешно создана
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "65d8bfc123456789abcdef02"
 *                 name:
 *                   type: string
 *                   example: "Electronics"
 *                 description:
 *                   type: string
 *                   example: "Devices and gadgets"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 */
router.post('/', createCategory);

/**
 * @swagger
 * /api/categories/{id}:
 *   put:
 *     summary: Обновить категорию по ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID категории для обновления
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
 *                 example: "Updated Electronics"
 *               description:
 *                 type: string
 *                 example: "Updated description"
 *     responses:
 *       200:
 *         description: Категория успешно обновлена
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
 *                   example: "Updated Electronics"
 *                 description:
 *                   type: string
 *                   example: "Updated description"
 */
router.put('/:id', updateCategory);

/**
 * @swagger
 * /api/categories/{id}:
 *   delete:
 *     summary: Удалить категорию по ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID категории для удаления
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Категория успешно удалена
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Category deleted"
 */
router.delete('/:id', deleteCategory);

/**
 * @swagger
 * /api/categories/{id}:
 *   get:
 *     summary: Получить информацию о конкретной категории по ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID категории для получения информации
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Информация о категории успешно получена
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "65d8bfc123456789abcdef02"
 *                 name:
 *                   type: string
 *                   example: "Electronics"
 *                 description:
 *                   type: string
 *                   example: "All kinds of electronic devices"
 *       404:
 *         description: Категория не найдена
 */
router.get('/:id', getCategoryById);

export default router;

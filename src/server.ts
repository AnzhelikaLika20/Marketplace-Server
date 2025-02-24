import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import productRoutes from "./routes/productRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import {errorHandler, validateRequest} from "./utils/errorHandler";
import {requestLogger, responseLogger} from "./utils/loggerMiddleware";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI!)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('Connection error:', err));

app.use(express.json());

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Warehouse API',
            version: '1.0.0',
            description: 'API для управления товарами и категориями на складе',
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
            },
        ],
    },
    apis: ['./src/routes/*.ts'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(errorHandler);
app.use(validateRequest);
app.use(requestLogger);
app.use(responseLogger);

app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});

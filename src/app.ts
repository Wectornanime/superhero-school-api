import express from "express";
import cors from "cors";
import router from "./router";
import swaggerUi from "swagger-ui-express";
import swaggerJson from './swagger.json';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerJson))
app.use(router);

export default app;

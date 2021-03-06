import express from "express";
import swagger from "swagger-ui-express";

import swaggerConfig from "../swagger.json";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);
app.use("/api-docs", swagger.serve, swagger.setup(swaggerConfig));

export { app };

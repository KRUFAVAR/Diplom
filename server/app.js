import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { swaggerOptions } from "./src/config/swagger.js";

const app = express();
const PORT = 8000;
const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

async function connectToDb() {
  try {
    await sequelizeConfig.authenticate();
    console.log("Connected to pg via sequelize");
  } catch (error) {
    console.log("Database connection failed: " + error.message);
  }
}

app.listen(PORT, () => {
  connectToDb();
  console.log(`Server start: http://localhost:${PORT}`);
  console.log(`Swagger UI: http://localhost:${PORT}/api-docs`);
});

export const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My Express API",
      version: "1.0.0",
      description: "Simple Express API with Sequelize and Swagger",
    },
    servers: [
      {
        url: "http://localhost:8000",
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

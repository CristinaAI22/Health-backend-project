require("dotenv").config();
require("express-async-errors");

const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const express = require("express");
const app = express();
const cors = require("cors");
const swaggerDocument = YAML.load("./swagger.yaml");

const connectDB = require("./db/connect");
const authenticateUser = require("./middleware/authentication");

const authRouter = require("./routes/auth");
const getProductsList = require("./routes/getProductsList");
const dailyUserInfo = require("./routes/dailyUserInfo");
const publicCaloriesCalculator = require("./routes/publicCaloriesCalculator");

const notFoundMiddleware = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/errorHandler");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send('<h1>Health API</h1><a href="/api-docs">API Documentation</a>');
});

//routes
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/health/users", authRouter);
app.use("/api/health/products", getProductsList);
app.use("/api/health/users/daily", authenticateUser, dailyUserInfo);
app.use("/api/health/calculate-calories", publicCaloriesCalculator);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();

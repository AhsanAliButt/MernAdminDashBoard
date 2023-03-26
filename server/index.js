import express from "express";

import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import connectDB from "./src/config/mongoos.js";
// import Routes
import generalRoutes from "./src/routes/general.js";
import clientRoutes from "./src/routes/client.js";
import salesRoutes from "./src/routes/sales.js";
import managementRoutes from "./src/routes/management.js";

// "CONFIGURATION"
dotenv.config();
const PORT = process.env.PORT || 7000;
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// MONGOOSE SETUP
connectDB();
// "ROUTES"

app.use("/client", clientRoutes);
app.use("/management", managementRoutes);
app.use("/general", generalRoutes);
app.use("/sales", salesRoutes);

//RUn Server
app.listen(PORT, (res, req) => {
  console.log(`Server is running on port ${PORT}`);
});

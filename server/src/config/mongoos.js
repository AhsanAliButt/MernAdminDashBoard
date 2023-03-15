import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

// import Schemas
import User from "../models/User.js";
import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import Transaction from "../models/Transaction.js";
//Data imports
import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
} from "../data/index.js";
//CONFIGURE
const DATABASE_URL = process.env.DATABASE_URL;

const connectDB = async () => {
  try {
    const DB_OPTIONS = {
      dbName: "adminDashboard",
    };
    const conn = await mongoose.connect(DATABASE_URL, DB_OPTIONS, {
      //must add in order to not get any error masseges:
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB connected... ${conn.connection.host}`);
    // Add User data only one Time
    // User.insertMany(dataUser);
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
    // Transaction.insertMany(dataTransaction);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDB;

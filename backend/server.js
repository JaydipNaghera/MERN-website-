const path = require("path");
const express = require("express");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
require("colors");
const morgan = require("morgan");
const products = require("./data/products");
const dotenv = require("dotenv");
const connectDb = require("./config/config");
const productRoutes = require("./routes/productsRoutes");
const usersRoutes = require("./routes/UsersRoutes");
const orderRoutes = require("./routes/orderRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

dotenv.config();
//connecting to mongodb database
connectDb();
const app = express();
//middleware bodyparser

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

//dotenv config
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Node Server</h1>");
});

app.use("/api", productRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/uploads", uploadRoutes);
// // Razorpay
// app.get("/api/config/stripe", (req, res) => {
//   res.send(process.env.stripe_CLIENT_ID);
// });

__dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(notFound);
app.use(errorHandler);

const PORT = 8080;
app.listen(process.env.PORT || PORT, () => {
  console.log(
    `Server Running in ${process.env.NODE_ENV} Mode on Port ${process.env.PORT}`
      .inverse
  );
});

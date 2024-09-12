const express = require("express");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const ratelimit = require("express-rate-limit");
const expressMongosanitize = require("express-mongo-sanitize");
const xssClean = require("xss-clean");
const hpp = require("hpp");
const { AppError } = require("./utils/AppError");
const Citiesrouter = require("./routers/Citiesrouter");
const router = require("./routers/userrouter");
///////////////////
const app = express();
//////////////////////
app.use(compression());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(express.json());
///////////////////////
app.use(
  cors({
    origin: ["http://localhost:5173", "https://world-q468.vercel.app"],
    credentials: true,
    methods: "*",
  })
);
app.use(helmet());
app.use(morgan("dev"));
app.use(
  ratelimit({
    max: 100,
    windowMs: 3 * 1000,
    message: "please try later",
  })
);
//////////////////////
app.use(expressMongosanitize());
app.use(xssClean());
app.use(hpp());
//////////////////////
app.use("/api/v1/cities", Citiesrouter);
app.use("/api/v1/users", router);

app.all("*", (req, res, next) => {
  next(new AppError(`We cant find the ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 404;
  err.status = err.status || "error";
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
  });
});

module.exports = app;

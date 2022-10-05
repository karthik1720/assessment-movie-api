import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoute from "./routes/user.js";
import movieRoute from "./routes/movie.js";
import bodyParser from "body-parser";
const app = express();
dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
//app.use("/api");

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.use("/api/auth/", authRoute);
app.use("/api/crud/", movieRoute);
// app.use("/api/users", userRoutes);
// app.use("/api", videoRoutes);
// app.use("/api", commentRoutes);

// app.use((err, req, res, next) => {
//   const status = err.status || 500;
//   const message = err.message || "Something went wrong";
//   return res.status(status).json({
//     success: false,
//     status: status,
//     message: message,
//   });
// });

//-----APP LISTEN-------
const port = process.env.PORT;
app.listen(port, (req, res, next) => {
  console.log("Server listening to " + port);
});
//-----APP LISTEN END-----

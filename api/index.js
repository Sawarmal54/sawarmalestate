// // import express from "express";
// // import mongoose from "mongoose";
// // import dotenv from "dotenv";
// // import userRouter from "./routes/user.route.js"
// // import authRouter from './routes/auth.route.js'
// // dotenv.config();

// // const app = express();
// // try {
// //   mongoose
// //     .connect(process.env.MONGO)
// //     .then(() => {
// //       console.log("Connected to MONGODB!");
// //     })
// // } catch (error) {
// //   console.log(error);
// // }
// // app.use(express.json());

// // app.listen(3000, () => {
// //     console.log("server is running on 3000");
// //   });


// // app.use('/api/user', userRouter)
// // app.use('/api/auth', authRouter)


// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import userRouter from "./routes/user.route.js";
// import authRouter from "./routes/auth.route.js";
// import listingRouter from "./routes/listing.route.js";
// import cookieParser from "cookie-parser";
// import cors from 'cors';
// import path from 'path';
// dotenv.config();

// const app = express();

// // Middleware to parse JSON bodies
// app.use(express.json());
// app.use(cookieParser());
// app.use(cors());
// // Connect to MongoDB
// mongoose.connect(process.env.MONGO)
// .then(() => {
//   console.log("Connected to MongoDB!");
// })
// .catch((error) => {
//   console.error("Error connecting to MongoDB:", error);
//   process.exit(1); // Exit the process if unable to connect to MongoDB
// });

// const __dirname = path.resolve();


// // Routes
// app.use('/api/user', userRouter);
// app.use('/api/auth', authRouter);
// app.use('/api/listing', listingRouter);


// app.use(express.static(path.join(__dirname,"/client/dist")))

// app.get('*',(req,res)=>{
//   res.sendFile(path.join(__dirname, 'client','dist','index.html'));
// })

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// app.use((err, req, res, next)=>{
//     const statusCode = err.statusCode || 500;
//     const message =  err.message || "Internal Server Error";
//     return res.status(statusCode).json({
//       success: false,
//       statusCode,
//       message,
//     })
// })


import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

  const __dirname = path.resolve();

const app = express();

app.use(express.json());

app.use(cookieParser());

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);


app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
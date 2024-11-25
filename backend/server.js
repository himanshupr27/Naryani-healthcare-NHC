import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./router/auth-router.js"
import contRouter from "./router/contact-router.js"
import bookRouter from "./router/bookappoint-router.js"
import connectDB from "./db.js";
import errorMiddleware from "./middleware/error-middleware.js";
import env from "dotenv";

const app= express();
const port = process.evn.PORT || 4000;

const CorsOption={
  origin:`${process.env.BASE_URL}`,
  methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials:true,
};
app.use(cors(CorsOption));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(bodyParser.json());

app.use("/api/auth",router);

app.use("/api/form",contRouter);

app.use("/api/book",bookRouter);

app.use(errorMiddleware);

connectDB().then(()=>{
app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}`);
  });
});
  
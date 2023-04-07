import express from "express";
import cors from "cors";
import postsRoutes from "./routes/posts.routes.js";

const app = express();
//midleware
app.use(express.json());
app.use(cors());
//routes 
app.use(postsRoutes);
export default app
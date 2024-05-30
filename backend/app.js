import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connection from "./db/connection.js";
dotenv.config({
    path:'./.env'
 })

const app = express();

app.use(cors())

app.use(express.json())
connection();
app.listen(process.env.PORT, ()=>console.log(`server is ready and listening on ${process.env.PORT}`));

import router from "./routes/blog.routes.js";

app.use('/api/v1/',router);

export { app };
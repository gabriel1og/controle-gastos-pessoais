import dotenv from 'dotenv'
import express from "express";
import cors from "cors";
import expenseRoutes from "./routes/expenseRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/', expenseRoutes)

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
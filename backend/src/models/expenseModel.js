import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

export const getExpenses = async () => {
    const query = "SELECT * FROM expenses ORDER BY date DESC;";
    const result = await pool.query(query);
    return result.rows;
};

export const addExpense = async (expense) => {
    const { price, category, description } = expense;
    const query = `
    INSERT INTO expenses (price, category, description)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
    const values = [price, category, description];
    const result = await pool.query(query, values);
    return result.rows[0];
};

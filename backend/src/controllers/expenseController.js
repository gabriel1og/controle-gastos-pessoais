import { addExpense, getExpenses } from "../models/expenseModel.js";

export const listExpenses = async (req, res) => {
    try {
        const expenses = await getExpenses();
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ error: "Erro ao listar despesas" });
    }
};

export const createExpense = async (req, res) => {
    try {
        const expense = req.body;
        const newExpense = await addExpense(expense);
        res.status(201).json(newExpense);
    } catch (error) {
        res.status(500).json({ error: "Erro ao adicionar despesa" });
    }
};

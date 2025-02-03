"use client";

import { Card, Text } from "@chakra-ui/react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { Expense } from "@/lib/types";
import { setPriceBRL } from "@/lib/utils";

type ExpensesChartProps = {
  expenses: Expense[];
};

const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"];

export default function ExpensesChart({ expenses = [] }: ExpensesChartProps) {
  const expensesByCategory = expenses
    .filter((e) => e.price)
    .reduce((acc, expense) => {
      const category = expense.category;
      acc[category] = (acc[category] || 0) + Math.abs(expense.price);
      return acc;
    }, {} as Record<string, number>);

  const data = Object.entries(expensesByCategory).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <Card.Root p={4} gap={4}>
      <Card.Header>
        <Card.Title>Despesas por Categoria</Card.Title>
      </Card.Header>

      <Card.Description>
        {data.length === 0 ? (
          <Text>Nenhuma despesa registrada</Text>
        ) : (
          <ResponsiveContainer width="100%" height={500}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={150}
                dataKey="value"
              >
                {data.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => `${setPriceBRL(value)}`} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        )}
      </Card.Description>
    </Card.Root>
  );
}

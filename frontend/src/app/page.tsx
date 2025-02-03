"use client";

import ExpensesChart from "@/components/ExpensesChart";
import {
  Card,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Box,
} from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";
import { Expense } from "@/lib/types";
import { useEffect, useState } from "react";
import ExpensesForm from "@/components/ExpensesForm";
import { setPriceBRL } from "@/lib/utils";
import ExpensesList from "@/components/ExpensesList";
import axios from "axios";

export default function Home() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const handleAddExpense = (expense: Expense) => {
    setExpenses((prev) => [expense, ...prev]);
  };

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/");
        setExpenses(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchExpenses();
  });

  const currentBalance = expenses.reduce(
    (sum, expense) => sum + Number(expense.price),
    0
  );

  return (
    <Flex position="relative" direction="column" p={8} gap={8}>
      <Box position="absolute" top={8} right={8}>
        <ColorModeButton />
      </Box>

      <Box>
        <Heading
          fontSize="2rem"
          mb={8}
          _after={{
            content: "''",
            display: "flex",
            width: "40px",
            height: "3px",
            bgColor: "#dd0000",
            marginTop: "10px",
          }}
        >
          Controle de gastos pessoais
        </Heading>
      </Box>

      <Card.Root w="100%" p={4}>
        <Card.Body>
          <Card.Title>Total de Gastos</Card.Title>

          <Text fontSize="2rem" fontWeight={700} color="red">
            {setPriceBRL(currentBalance)}
          </Text>
        </Card.Body>
      </Card.Root>

      <ExpensesForm addExpense={handleAddExpense} />

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
        <GridItem>
          <ExpensesChart expenses={expenses || []} />
        </GridItem>

        <GridItem>
          <ExpensesList expenses={expenses} />
        </GridItem>
      </SimpleGrid>
    </Flex>
  );
}

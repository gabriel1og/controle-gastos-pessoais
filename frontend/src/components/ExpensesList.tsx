"use client";

import { Expense } from "@/lib/types";
import { setPriceBRL } from "@/lib/utils";
import { Card, VStack, Text, HStack } from "@chakra-ui/react";
import moment from "moment";
import { useState } from "react";
import { Field } from "@/components/ui/field";
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select";

type ExpensesListProps = {
  expenses: Expense[];
};

export default function ExpensesList({ expenses }: ExpensesListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const filteredExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  const categories = [...new Set(expenses.map((e) => e.category))];

  return (
    <Card.Root p={4} gap={10}>
      <Card.Header>
        <Card.Title>Lista de Despesas</Card.Title>
      </Card.Header>

      <Card.Description>
        <VStack gap={4}>
          <Field label="Filtrar por categoria">
            <NativeSelectRoot>
              <NativeSelectField
                defaultValue="Todas"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                p={2}
              >
                <option value="">Todas</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </NativeSelectField>
            </NativeSelectRoot>
          </Field>

          {filteredExpenses.length === 0 ? (
            <Text>Nenhum gasto registrado.</Text>
          ) : (
            filteredExpenses.map((e) => (
              <Card.Root key={e.id} w="100%">
                <HStack justifyContent="space-between" p={4}>
                  <VStack alignItems="flex-start">
                    <Text fontWeight={600} fontSize="1.4rem">
                      {e.description}
                    </Text>
                    <Text>
                      {e.category} •{" "}
                      {moment(e.date).format("DD/MM/YYYY - h:mm a")}
                    </Text>
                  </VStack>

                  <Text fontWeight={600} fontSize="1.4rem" color="red">
                    {setPriceBRL(Number(e.price))}
                  </Text>
                </HStack>
              </Card.Root>
            ))
          )}
        </VStack>
      </Card.Description>
    </Card.Root>
  );
}

import { useState } from "react";
import { Expense, TCategory } from "@/lib/types";
import {
  Button,
  Card,
  Input,
  VStack,
  Heading,
  Text,
  Field,
} from "@chakra-ui/react";
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select";
import axios from "axios";

type ExpenseFormProps = {
  addExpense: (expense: Expense) => void;
};

const categories: TCategory[] = [
  "Contas",
  "Alimentação",
  "Transporte",
  "Saúde",
  "Lazer",
];

export default function ExpensesForm({ addExpense }: ExpenseFormProps) {
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState<TCategory>("Contas");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!price || !category || !description) {
      return;
    }

    const expense: Expense = {
      price,
      category,
      description,
    };

    try {
      const response = await axios.post("http://localhost:5000/", expense);
      addExpense(response.data);
      setPrice(0);
      setCategory("Contas");
      setDescription("");
    } catch (error) {
      console.error("Erro ao adicionar despesa: ", error);
    }
  };

  return (
    <Card.Root p={4} gap={4}>
      <Card.Description>
        <VStack my={6}>
          <Heading fontSize="1.6rem">Registre sua Despesa</Heading>
          <Text fontSize="1rem">Digite os detalhes da sua despesa aqui.</Text>
        </VStack>

        <form onSubmit={handleSubmit}>
          <Field.Root mb={6}>
            <Field.Label>Descrição</Field.Label>
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              p={2}
            />
          </Field.Root>

          <Field.Root mb={6}>
            <Field.Label>Preço</Field.Label>
            <Input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              p={2}
            />
          </Field.Root>

          <Field.Root mb={6}>
            <Field.Label>Categoria</Field.Label>
            <NativeSelectRoot>
              <NativeSelectField
                name="category"
                items={categories}
                value={category}
                onChange={(e) => setCategory(e.target.value as TCategory)}
                p={2}
              />
            </NativeSelectRoot>
          </Field.Root>

          <Button type="submit" p={4}>
            Adicionar Despesa
          </Button>
        </form>
      </Card.Description>
    </Card.Root>
  );
}

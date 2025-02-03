export type TCategory =
  | "Contas"
  | "Alimentação"
  | "Transporte"
  | "Saúde"
  | "Lazer";

export type Expense = {
  id?: string;
  price: number;
  category: TCategory;
  description: string;
  date?: string;
};

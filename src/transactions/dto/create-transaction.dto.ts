export class CreateTransactionDto {
    date: Date;
    amount: number;
    description?: string; // Optional
    category_id?: number; // Optional
    payment_method?: string; // Optional
    user_id?: string; // Optional
  }
  
import { Category } from 'src/categories/entities/category.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'date', type: 'timestamp with time zone' })
  date: Date;

  @Column({ name: 'amount', type: 'numeric', precision: 10, scale: 2 })
  amount: number;

  @Column({ name: 'description', type: 'text', nullable: true })
  description: string | null;

  @Column({ name: 'category_id', type: 'int', nullable: true })
  category_id: number | null;

  @Column({ name: 'payment_method', length: 50, nullable: true })
  payment_method: string | null;

  @Column({ name: 'user_id', type: 'uuid', nullable: true })
  user_id: string | null;

  @ManyToOne(() => Category, category => category.transactions, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'category_id' })
  category: Category;
}

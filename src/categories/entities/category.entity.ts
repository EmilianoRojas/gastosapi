import { Transaction } from 'src/transactions/entities/transaction.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'uuid', nullable: true })
  user_id: string;

  @Column({ length: 100 })
  name: string;

  @Column({ default: false })
  is_premade: boolean;

  @OneToMany(() => Transaction, transaction => transaction.category)
  transactions: Transaction[];

}
